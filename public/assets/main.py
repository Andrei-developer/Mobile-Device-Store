import os
from PIL import Image

# === CONFIGURARE ===
INPUT_FOLDER = "img"
TARGET_SIZE = (1000, 1000)

width, height = TARGET_SIZE
OUTPUT_BASE = f"img/converted_{width}x{height}"
os.makedirs(OUTPUT_BASE, exist_ok=True)

ALLOWED_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.webp', '.avif')

for i in range(1, 111):
    subfolder = f"images{i}"
    input_path = os.path.join(INPUT_FOLDER, subfolder)
    output_path = os.path.join(OUTPUT_BASE, subfolder)

    if not os.path.exists(input_path):
        continue

    os.makedirs(output_path, exist_ok=True)

    for filename in os.listdir(input_path):
        if filename.lower().endswith(ALLOWED_EXTENSIONS):
            file_path = os.path.join(input_path, filename)
            try:
                with Image.open(file_path) as img:
                    img = img.convert("RGB")
                    img_resized = img.resize(TARGET_SIZE)
                    ext = os.path.splitext(filename)[1].lower()  # păstrează extensia originală
                    save_path = os.path.join(output_path, os.path.splitext(filename)[0] + ext)
                    img_resized.save(save_path)
                    print(f"[OK] {subfolder}/{filename} -> redimensionată la {TARGET_SIZE}")
            except Exception as e:
                print(f"[EROARE] {subfolder}/{filename}: {e}")

print(f"\n✅ Toate imaginile au fost redimensionate și salvate în: {OUTPUT_BASE}")