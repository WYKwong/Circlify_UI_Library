# 🌌 Circlify UI Library

A minimalist UI component collection built with **Next.js (App Router)**, **TypeScript**, and **native CSS**.  
Each component is designed as a self-contained module with its own usage example, styling, and preview image — easy to integrate, extend, or study.

---

## 📦 Features

- ⚛️ **Next.js App Router + TypeScript**
- 🎨 **Native CSS** for styling (no frameworks)
- 🧩 Each component is **independent** and **modular**
- 📸 Includes demo `.gif` or `.png` preview per component
- 💡 Perfect for learning, prototyping, and production-ready UI

---

## 📁 Project Structure

```txt
.
├── [ComponentName]/             # Each folder = one UI component module
│   ├── component/               # TSX component implementation
│   │   └── index.tsx
│   ├── style/                   # Scoped CSS styles
│   │   └── index.css
│   ├── page.tsx                 # Usage example (Next.js App Router)
│   └── sample.gif / sample.png  # Visual preview (GIF or PNG)
│
├── LICENSE
└── README.md
```

> 📦 Each folder in the root directory follows this exact structure.  
> There is **no global CSS**, and each component is fully encapsulated for reuse.

---

## 🚀 Getting Started

<details>
<summary>Expand for instructions</summary>

```bash
# 1. Clone this repository
git clone https://github.com/your-username/Circlify_UI_Library.git

# 2. Navigate into any component folder
cd Circlify_UI_Library/YourComponentName
```

You can view the component demo locally by importing from the `component/` folder into `page.tsx`, or integrating it into your own App Router project.

```tsx
// Example
import { YourComponent } from "./component";

export default function DemoPage() {
  return <YourComponent />;
}
```

Styling is included automatically from `./style/index.css`.

</details>

---

## 📸 Component Preview

Each component includes a `.gif` or `.png` showing what it does.

```txt
[ComponentName]/
└── sample.gif   # or sample.png
```

Replace this file if you want to update the visual demo.

---
