from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import asyncio
import json
import os
from hardware import monitor

app = FastAPI()

STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")

# ── WebSocket: real-time hardware metrics ──────────────────────────
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            metrics = monitor.get_metrics()
            await websocket.send_text(json.dumps(metrics))
            await asyncio.sleep(0.5)
    except Exception as e:
        print(f"WebSocket closed: {e}")

# ── Serve React SPA (all non-API routes fall through to index.html) ─
app.mount("/assets", StaticFiles(directory=os.path.join(STATIC_DIR, "assets")), name="assets")

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """Serve the React SPA for all routes (client-side routing)."""
    index_file = os.path.join(STATIC_DIR, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"error": "Frontend not built. Run: node node_modules/vite/bin/vite.js build (in /client)"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
