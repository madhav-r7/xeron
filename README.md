# Xeron — Campus Digital Print Management System

A high-efficiency, full-stack college print and assignment management system designed for students to configure and upload assignments, monitor real-time print status, and collect physical prints using secure, cryptographic QR passes. Features a comprehensive Operator Console with digital press queue controls, printer fleet telemetry, and instant barcode collection verification.

Built with an editorial aesthetic inspired by fine paper studios: warm linen canvas, deep aubergine-black ink typography, tactile pill buttons, and responsive glassmorphism.

---

## 🚀 Key Capabilities

### 1. Unified Student Experience
- **Smart Assignment Upload**: Drag-and-drop support for PDF, DOCX, PPTX, JPG, and PNG files with automatic client-side PDF merging via `pdf-lib`.
- **Granular Print Customization**: Configure color modes (Monochrome ₹2/page vs Full Color ₹10/page), paper formats (A4, A3, Letter), duplex / back-to-back printing, and finishing styles (Corner staple, Spiral coil binding, Project hardbound).
- **Express Priority Queue**: Optional expedited machine queueing for last-minute submissions.
- **Dynamic Cost Calculator**: Instant transparent bill calculation before order submission.
- **Collection Pass QR**: Offline-verifiable encrypted QR code generated per order with 1-click PNG card download.

### 2. Live 4-Step Print Tracker
- **Stage 1: Queued** — Order validated and assigned to laser press queue.
- **Stage 2: Printing** — Active processing on designated fleet printer with ETA telemetry.
- **Stage 3: Ready for Pickup** — Document stapled, bound, and waiting at counter with chime audio alert.
- **Stage 4: Completed** — Verified by operator QR scan and handed over to student.

### 3. Operator & Admin Console
- **Live Fleet Telemetry**: Real-time printer health monitoring (Active, Low Paper, Toner Warning, Offline).
- **One-Click Queue Control**: Start digital print runs, trigger manual job reassignment, or engage technical pause holds.
- **Hardware & Webcam QR Scanner**: High-speed QR token scanner supporting direct camera capture, file upload, or manual token lookup for instant handover verification.
- **Historical Deliveries Archive**: Searchable log of past print orders with timestamps and staff notes.

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Vanilla CSS + Tailwind CSS (Editorial Linen & Ink Theme)
- **Icons:** Lucide React
- **Document Processing:** `pdf-lib` (Client-side merging and rendering)
- **QR Engine:** `qrcode` & `html5-qrcode` (Scan-to-collect hardware & camera verification)
- **Audio Feedback:** Web Audio API synthesizer chimes
- **Persistence:** LocalStorage with multi-tab custom event bus + optional Supabase backend sync

---

## 🏃 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 👤 Author & Maintainer

- **Xeron Project** — Maintained and developed by **V S Raveendran** (madhav-r7).
