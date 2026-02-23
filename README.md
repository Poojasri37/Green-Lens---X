
# GreenLens X | AMD Slingshot Flagship Demo

GreenLens X is an NPU-accelerated edge AI platform that visualizes the real-time energy and carbon cost of AI models on AMD Ryzen AI PCs.

## Core Features
- **Live AI Carbon Radar**: Real-time energy telemetry via WebSockets.
- **AMD XDNA™ 2 Integration**: Demonstrates the massive efficiency gains of NPU vs CPU/GPU.
- **Precision Toggle Lab**: Compare performance and carbon across FP32, BF16, and INT8.
- **Cinematic UI**: Glassmorphic dashboard with Three.js hardware metaphors.
- **AI Sustainability Coach**: On-device guidance for green AI optimization.

## How to Run
1. Ensure Python 3.10+ is installed.
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn psutil
   ```
3. Run the platform:
   ```bash
   python main.py
   ```
4. Open your browser at `http://localhost:8000`

## Technical Stack
- **Backend**: FastAPI (Python) for hardware telemetry.
- **Hardware Hook**: `psutil` + Simulated AMD XDNA 2 counters (ready for Ryzen AI SDK hooks).
- **Frontend**: Vanilla JS + Three.js + GSAP + CSS Glassmorphism.

## Why AMD?
This project demonstrates that high-performance AI doesn't have to be carbon-heavy. By leveraging AMD's dedicated NPU hardware, we can achieve up to 90% reduction in energy impact for per-inference workloads compared to traditional CPU/GPU execution.
