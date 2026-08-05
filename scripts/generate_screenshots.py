import os
from PIL import Image, ImageDraw, ImageFont

def create_rich_ui_screen(filepath, proj_id, title, subtitle, bg_color, card_color, accent_color, text_color, is_dark, screen_idx):
    width, height = 1200, 800
    img = Image.new("RGB", (width, height), bg_color)
    draw = ImageDraw.Draw(img)

    # Load clean fonts
    try:
        font_hero = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
        font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
        font_bold = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 15)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 13)
        font_tiny = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 11)
    except:
        font_hero = font_title = font_sub = font_bold = font_small = font_tiny = ImageFont.load_default()

    # Top Header Bar
    bar_bg = "#121212" if is_dark else "#FFFFFF"
    draw.rectangle([0, 0, width, 60], fill=bar_bg)
    draw.text((40, 18), title.upper(), fill=accent_color, font=font_title)
    
    # Header Nav Links
    nav_items = ["HOME", "SERVICES", "PORTFOLIO", "CONTACT"]
    for i, item in enumerate(nav_items):
        draw.text((680 + i * 110, 23), item, fill=text_color, font=font_tiny)
    draw.rounded_rectangle([1080, 14, 1160, 46], radius=16, fill=accent_color)
    draw.text((1095, 23), "BOOK", fill="#0F0F0F" if accent_color in ["#B9FF66", "#D9B36C", "#E8B5A3"] else "#FFFFFF", font=font_tiny)

    # 1. RESTAURANT — MAISON BISTRO (Burgundy & Gold)
    if proj_id == "restaurant":
        if screen_idx == 0: # Home
            draw.text((50, 100), "MICHELIN-STAR GASTRONOMY", fill=accent_color, font=font_sub)
            draw.text((50, 130), "Maison Artisanal Bistro", fill=text_color, font=font_hero)
            draw.text((50, 180), "Artisanal tasting menus, rare vintages & contemporary French dining.", fill=text_color, font=font_small)

            # Hero Food Photography Card
            draw.rounded_rectangle([50, 230, 680, 730], radius=18, fill=card_color)
            draw.text((80, 255), "Chef's Tasting Experience 2026", fill=text_color, font=font_title)
            # Simulated food dish photo artwork
            draw.rounded_rectangle([80, 300, 650, 640], radius=14, fill="#4A181D")
            draw.ellipse([250, 360, 480, 590], fill="#F8F4EE", outline=accent_color, width=4)
            draw.ellipse([290, 400, 440, 550], fill="#8B5E34")
            draw.ellipse([340, 450, 390, 500], fill=accent_color)
            draw.text((80, 665), "7-Course Seasonal Pairing • $195 per guest", fill=text_color, font=font_small)
            draw.rounded_rectangle([500, 655, 650, 695], radius=20, fill=accent_color)
            draw.text((525, 668), "Reserve →", fill="#0F0F0F", font=font_bold)

            # Wine & Salon Cards
            draw.rounded_rectangle([710, 230, 1150, 460], radius=18, fill=card_color)
            draw.text((740, 255), "Sommelier Wine Vault", fill=text_color, font=font_title)
            draw.text((740, 290), "Over 1,200 rare Bordeaux & Burgundy vintages", fill=text_color, font=font_small)
            draw.rounded_rectangle([740, 335, 1120, 425], radius=12, fill="#4A181D")
            draw.text((760, 368), "98 Pt Vintage Selection • 2018 Reserve", fill=accent_color, font=font_small)

            draw.rounded_rectangle([710, 490, 1150, 730], radius=18, fill=card_color)
            draw.text((740, 515), "Private Dining Salon", fill=text_color, font=font_title)
            draw.text((740, 550), "Intimate galas & bespoke tasting menus", fill=text_color, font=font_small)
            draw.rounded_rectangle([740, 610, 1120, 690], radius=20, fill=accent_color)
            draw.text((840, 640), "Inquire Salon", fill="#0F0F0F", font=font_bold)

        elif screen_idx == 1: # Menu
            draw.text((50, 100), "SEASONAL TASTING MENU", fill=accent_color, font=font_sub)
            draw.text((50, 130), "Artisanal Tastings & Wine Pairings", fill=text_color, font=font_hero)
            courses = [
                ("01. Truffle Scallop Carpaccio", "Yuzu caviar, micro sea herbs, citrus emulsion", "$38"),
                ("02. Wagyu A5 Tenderloin", "Wild chanterelles, smoked bone marrow jus", "$85"),
                ("03. Duck Confit & Foie Gras", "Braised endive, spiced cherry reduction", "$52"),
            ]
            for i, (c_title, c_desc, c_price) in enumerate(courses):
                y = 220 + i * 165
                draw.rounded_rectangle([50, y, 1150, y + 145], radius=16, fill=card_color)
                draw.text((80, y + 25), c_title, fill=text_color, font=font_title)
                draw.text((80, y + 65), c_desc, fill=text_color, font=font_small)
                draw.text((1030, y + 35), c_price, fill=accent_color, font=font_title)
                draw.rounded_rectangle([1020, y + 80, 1120, y + 115], radius=14, fill=accent_color)
                draw.text((1045, y + 92), "Order", fill="#0F0F0F", font=font_tiny)

        elif screen_idx == 2: # Gallery
            draw.text((50, 100), "CULINARY ARTISTRY", fill=accent_color, font=font_sub)
            draw.text((50, 130), "Inside Maison Bistro", fill=text_color, font=font_hero)
            grid = [(50, 210, 580, 450), (600, 210, 1150, 450), (50, 475, 580, 725), (600, 475, 1150, 725)]
            labels = ["Main Dining Salon", "Chef's Kitchen Studio", "Sommelier Wine Vault", "Private Terrace"]
            for idx, (x1, y1, x2, y2) in enumerate(grid):
                draw.rounded_rectangle([x1, y1, x2, y2], radius=16, fill=card_color)
                draw.rounded_rectangle([x1 + 15, y1 + 15, x2 - 15, y2 - 45], radius=12, fill="#4A181D")
                draw.text((x1 + 25, y2 - 35), labels[idx], fill=accent_color, font=font_sub)

        else: # Booking
            draw.text((50, 100), "RESERVATIONS", fill=accent_color, font=font_sub)
            draw.text((50, 130), "Reserve Your Experience", fill=text_color, font=font_hero)
            draw.rounded_rectangle([50, 210, 680, 725], radius=18, fill=card_color)
            draw.text((80, 240), "Date & Guest Selection", fill=text_color, font=font_title)
            fields = ["Date: Friday, Oct 24, 2026", "Guests: 4 Guests", "Time: 8:00 PM (Dinner Service)", "Seating: Main Salon Window"]
            for i, f in enumerate(fields):
                y = 290 + i * 75
                draw.rounded_rectangle([80, y, 650, y + 55], radius=10, fill=bg_color)
                draw.text((100, y + 18), f, fill=text_color, font=font_small)
            draw.rounded_rectangle([80, 620, 320, 675], radius=24, fill=accent_color)
            draw.text((120, 638), "Confirm Booking →", fill="#0F0F0F", font=font_bold)

            draw.rounded_rectangle([710, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((740, 240), "Bistro Location & Hours", fill=text_color, font=font_title)
            draw.rounded_rectangle([740, 290, 1120, 520], radius=14, fill="#4A181D")
            draw.text((740, 550), "164 Fifth Avenue, New York, NY", fill=text_color, font=font_small)
            draw.text((740, 580), "Dinner: 5:00 PM – 11:00 PM Daily", fill=text_color, font=font_small)

    # 2. GIFT SHOP — LUXE GIFT STUDIO (Terracotta & Rose Pastel)
    elif proj_id == "gift-shop":
        if screen_idx == 0: # Home
            draw.text((50, 100), "CURATED LUXURY GIFTS", fill=accent_color, font=font_sub)
            draw.text((50, 130), "Luxe Gift Studio", fill=text_color, font=font_hero)
            draw.text((50, 180), "Bespoke gift boxes, artisanal packaging & express gift concierge.", fill=text_color, font=font_small)

            # Product Grid Cards
            products = [("Artisanal Tea Set", "$120"), ("Velvet Scented Candle", "$85"), ("Leather Journal Box", "$145")]
            for i, (p_name, p_price) in enumerate(products):
                x1 = 50 + i * 370
                draw.rounded_rectangle([x1, 230, x1 + 340, 730], radius=18, fill=card_color)
                draw.rounded_rectangle([x1 + 20, 250, x1 + 320, 550], radius=14, fill="#EAD5CC")
                draw.text((x1 + 25, 580), p_name, fill=text_color, font=font_title)
                draw.text((x1 + 25, 620), p_price, fill=accent_color, font=font_title)
                draw.rounded_rectangle([x1 + 25, 660, x1 + 315, 705], radius=20, fill=accent_color)
                draw.text((x1 + 100, 675), "Add to Cart", fill="#0F0F0F", font=font_bold)
        else:
            draw.text((50, 100), "BESPOKE GIFT COLLECTIONS", fill=accent_color, font=font_sub)
            draw.text((50, 130), title, fill=text_color, font=font_hero)
            draw.rounded_rectangle([50, 220, 1150, 725], radius=18, fill=card_color)
            draw.text((80, 250), f"Featured Collection Screen {screen_idx+1}", fill=text_color, font=font_title)
            draw.rounded_rectangle([80, 300, 1120, 680], radius=14, fill="#EAD5CC")

    # 3. BOUTIQUE — VELVET & THREAD (Monochrome High Fashion Dark)
    elif proj_id == "boutique":
        draw.text((50, 100), "HAUTE COUTURE 2026", fill=accent_color, font=font_sub)
        draw.text((50, 130), "Velvet & Thread", fill=text_color, font=font_hero)
        if screen_idx == 0:
            draw.rounded_rectangle([50, 210, 680, 725], radius=18, fill=card_color)
            draw.text((80, 240), "Autumn / Winter Editorial", fill=text_color, font=font_title)
            draw.rounded_rectangle([80, 280, 650, 640], radius=14, fill="#2A2A2A")
            draw.text((80, 665), "Monochrome Tailored Trench • $1,450", fill=accent_color, font=font_small)
            
            draw.rounded_rectangle([710, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((740, 240), "Lookbook Grid", fill=text_color, font=font_title)
            draw.rounded_rectangle([740, 280, 1120, 480], radius=12, fill="#2A2A2A")
            draw.rounded_rectangle([740, 500, 1120, 690], radius=12, fill="#2A2A2A")
        else:
            draw.rounded_rectangle([50, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((80, 240), f"Runway Collection {screen_idx+1}", fill=text_color, font=font_title)
            draw.rounded_rectangle([80, 290, 1120, 680], radius=14, fill="#2A2A2A")

    # 4. FITNESS — PULSE FITNESS HUB (Cyber Dark Slate & Lime)
    elif proj_id == "gym":
        draw.text((50, 100), "AI ATHLETIC PERFORMANCE", fill=accent_color, font=font_sub)
        draw.text((50, 130), "Pulse Fitness Hub", fill=text_color, font=font_hero)
        if screen_idx == 0:
            metrics = [("Active Members", "4,280", "+14%"), ("Avg Cal Burned", "785 kcal", "+8%"), ("Heart Rate", "132 bpm", "Optimal")]
            for i, (m_title, m_val, m_badge) in enumerate(metrics):
                x1 = 50 + i * 370
                draw.rounded_rectangle([x1, 210, x1 + 340, 350], radius=16, fill=card_color)
                draw.text((x1 + 25, 235), m_title, fill="#94A3B8", font=font_small)
                draw.text((x1 + 25, 270), m_val, fill=text_color, font=font_hero)
                draw.text((x1 + 240, 235), m_badge, fill=accent_color, font=font_tiny)

            draw.rounded_rectangle([50, 380, 1150, 725], radius=18, fill=card_color)
            draw.text((80, 410), "Biometric Waveform & Workout Intensity", fill=text_color, font=font_title)
            pts = [(100, 650), (200, 570), (300, 610), (400, 490), (500, 540), (600, 470), (700, 520), (800, 480), (900, 570), (1000, 480), (1100, 620)]
            for i in range(len(pts) - 1):
                draw.line([pts[i], pts[i+1]], fill=accent_color, width=4)
                draw.ellipse([pts[i][0]-5, pts[i][1]-5, pts[i][0]+5, pts[i][1]+5], fill=accent_color)
        else:
            draw.rounded_rectangle([50, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((80, 240), f"Training Program View {screen_idx+1}", fill=text_color, font=font_title)
            draw.rounded_rectangle([80, 290, 1120, 680], radius=14, fill="#334155")

    # 5. HEALTHCARE — APEX HEALTHCARE (Clinical Blue & Soft White)
    elif proj_id == "hospital":
        draw.text((50, 100), "CLINICAL INTELLIGENCE PORTAL", fill=accent_color, font=font_sub)
        draw.text((50, 130), "Apex Healthcare", fill=text_color, font=font_hero)
        if screen_idx == 0:
            draw.rounded_rectangle([50, 210, 680, 725], radius=18, fill=card_color)
            draw.text((80, 240), "Daily Patient Vitals & EHR Summary", fill=text_color, font=font_title)
            stats = ["Patient Admissions: 142 Active", "Critical Care Vitals: 99.4% Normal", "Lab Diagnostics: 28 Pending"]
            for i, st in enumerate(stats):
                y = 290 + i * 80
                draw.rounded_rectangle([80, y, 650, y + 60], radius=10, fill="#E2E8F0")
                draw.text((100, y + 20), st, fill=text_color, font=font_small)
            draw.rounded_rectangle([80, 630, 300, 685], radius=24, fill=accent_color)
            draw.text((120, 648), "New Patient Record", fill="#FFFFFF", font=font_bold)

            draw.rounded_rectangle([710, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((740, 240), "Doctor Scheduling Roster", fill=text_color, font=font_title)
            draw.rounded_rectangle([740, 290, 1120, 680], radius=14, fill="#E2E8F0")
        else:
            draw.rounded_rectangle([50, 210, 1150, 725], radius=18, fill=card_color)
            draw.text((80, 240), f"Medical Analytics Module {screen_idx+1}", fill=text_color, font=font_title)
            draw.rounded_rectangle([80, 290, 1120, 680], radius=14, fill="#E2E8F0")

    # 6. CONSTRUCTION — APEX BUILT INFRA (Safety Amber & Dark Slate)
    else:
        draw.text((50, 100), "INDUSTRIAL ENGINEERING & BUILD", fill=accent_color, font=font_sub)
        draw.text((50, 130), "Apex Built Infra", fill=text_color, font=font_hero)
        draw.rounded_rectangle([50, 210, 1150, 725], radius=18, fill=card_color)
        draw.text((80, 240), f"Commercial Megastructure Portfolio {screen_idx+1}", fill=text_color, font=font_title)
        draw.rounded_rectangle([80, 290, 1120, 680], radius=14, fill="#475569")

    # Save WebP Image
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    img.save(filepath, "WEBP", quality=92)
    print(f"Rendered {filepath}")

# Projects config with distinct vibrant brand colors
projects = {
    "restaurant": {
        "title": "Maison Bistro",
        "subtitle": "Michelin-star fine dining & artisanal culinary experience",
        "bg_color": "#7A2632",    # Deep Burgundy
        "card_color": "#5B1E24",  # Dark Burgundy Card
        "accent_color": "#D9B36C",# Rich Gold Accent
        "text_color": "#F8F4EE",  # Soft Cream Text
        "is_dark": True,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    },
    "gift-shop": {
        "title": "Luxe Gift Studio",
        "subtitle": "Curated luxury gift boxes & artisanal packaging",
        "bg_color": "#F9F0ED",    # Soft Blush Rose
        "card_color": "#EFE0DA",  # Card Blush
        "accent_color": "#E8B5A3",# Terracotta Accent
        "text_color": "#2B2D42",  # Dark Espresso Text
        "is_dark": False,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    },
    "boutique": {
        "title": "Velvet & Thread",
        "subtitle": "Haute couture fashion & luxury editorial collection",
        "bg_color": "#1E1E1E",    # Fashion Dark Monochrome
        "card_color": "#2D2D2D",
        "accent_color": "#E5E5E5",# Off-white Accent
        "text_color": "#FAFAFA",
        "is_dark": True,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    },
    "gym": {
        "title": "Pulse Fitness Hub",
        "subtitle": "High-performance AI fitness & athletic training platform",
        "bg_color": "#0F172A",    # Dark Cyber Slate
        "card_color": "#1E293B",
        "accent_color": "#B9FF66",# NavYug Lime Accent
        "text_color": "#F8FAFC",
        "is_dark": True,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    },
    "hospital": {
        "title": "Apex Healthcare",
        "subtitle": "Next-generation patient EHR & clinical intelligence portal",
        "bg_color": "#F8FAFC",    # Clinical White
        "card_color": "#EFF6FF",  # Soft Blue Card
        "accent_color": "#1E88E5",# Cobalt Blue Accent
        "text_color": "#0F172A",
        "is_dark": False,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    },
    "construction": {
        "title": "Apex Built Infra",
        "subtitle": "Commercial megastructures & industrial engineering suite",
        "bg_color": "#1E293B",    # Industrial Steel Slate
        "card_color": "#334155",
        "accent_color": "#F59E0B",# Safety Amber Accent
        "text_color": "#F8FAFC",
        "is_dark": True,
        "files": ["01-home.webp", "02-services.webp", "03-gallery.webp", "04-contact.webp"]
    }
}

for proj_id, info in projects.items():
    for idx, fname in enumerate(info["files"]):
        dest_path = f"public/portfolio/{proj_id}/screenshots/{fname}"
        create_rich_ui_screen(
            filepath=dest_path,
            proj_id=proj_id,
            title=info["title"],
            subtitle=info["subtitle"],
            bg_color=info["bg_color"],
            card_color=info["card_color"],
            accent_color=info["accent_color"],
            text_color=info["text_color"],
            is_dark=info["is_dark"],
            screen_idx=idx
        )

print("All 24 Vibrant Project UI screenshots rendered successfully!")
