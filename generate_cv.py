from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUTPUT_PDF = Path("Goktug_Karaca_CV.pdf")
FONT_DIR = Path("cv_assets")


PROFILE = {
    "name": "Goktug Karaca",
    "title": "Computer Engineering Student",
    "location": "Istanbul, Turkiye",
    "email": "karacagoktug73@gmail.com",
    "website": "www.goktugkaraca.com",
    "github": "github.com/krcgoktug",
    "linkedin": "linkedin.com/in/goktug-karaca-921479249",
    "instagram": "instagram.com/krcgoktug",
}


ABOUT = (
    "Project-driven Computer Engineering student focused on software engineering, "
    "AI, cybersecurity, and digital systems. I build end-to-end products from architecture "
    "to delivery with emphasis on reliability, clarity, and measurable outcomes."
)


EDUCATION = {
    "school": "Fenerbahce University",
    "degree": "B.Sc. in Computer Engineering (CENG), 3rd Year",
    "period": "September 2023 - June 2027 (Expected)",
}


EXPERIENCE = [
    {
        "title": "System Programming Project Experience",
        "body": "Built containerized SIS architecture with C++, PostgreSQL, and practical backend design patterns.",
    },
    {
        "title": "Cybersecurity Data Mining Experience",
        "body": "Developed IDS-oriented workflows using CIC-IDS2017 dataset and model-level analysis.",
    },
    {
        "title": "Applied AI Simulation Experience",
        "body": "Implemented and compared A* and Q-Learning in dynamic parking simulation scenarios.",
    },
]


PROJECTS = [
    {
        "name": "RATEFLIX",
        "desc": "Web-based movie and series tracking platform.",
        "link": "github.com/krcgoktug/RATEFLIX | rateflix-lime.vercel.app/login",
    },
    {
        "name": "LuminaLib",
        "desc": "Advanced Java OOP library system with role hierarchy and thread-safe catalog design.",
        "link": "github.com/krcgoktug/luminalib",
    },
    {
        "name": "Digital System Design CPU Chip",
        "desc": "Course-level CPU chip architecture with ALU, control unit, and register file modules.",
        "link": "github.com/krcgoktug/digital-system-design-cpu-chip",
    },
    {
        "name": "Budgee",
        "desc": "Personal finance tracking direction focused on clear UX and practical spending insights.",
        "link": "github.com/krcgoktug/budgee-1",
    },
    {
        "name": "NexGen ERP",
        "desc": "Modular ERP/CRM concept with relational integrity and SQL optimization focus.",
        "link": "Course project concept",
    },
]


SKILLS = [
    "Programming: C, C++, Java, Kotlin, Python, JavaScript, PHP, SQL, Verilog",
    "Web: HTML5, CSS3, REST APIs, Responsive UI",
    "Data & Infra: PostgreSQL, SQLite, Docker, Linux, Git/GitHub",
    "Core Areas: System Programming, OOP, AI Simulation, Data Mining",
]


ACTIVITIES = [
    "FBU IEEE Student Club - Member",
    "Actively participating in technical talks and peer collaboration events.",
]


def register_fonts() -> None:
    font_path = FONT_DIR / "Montserrat-Variable.ttf"
    if not font_path.exists():
        raise FileNotFoundError(f"Font file missing: {font_path}")

    # Register under separate names to keep semantic style calls in drawing code.
    pdfmetrics.registerFont(TTFont("Montserrat-Regular", str(font_path)))
    pdfmetrics.registerFont(TTFont("Montserrat-SemiBold", str(font_path)))
    pdfmetrics.registerFont(TTFont("Montserrat-Bold", str(font_path)))


def wrap_text(text: str, font_name: str, font_size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        candidate = word if not current else f"{current} {word}"
        width = pdfmetrics.stringWidth(candidate, font_name, font_size)
        if width <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_section_title(
    c: canvas.Canvas,
    title: str,
    x: float,
    y: float,
    width: float,
    text_color: colors.Color,
    line_color: colors.Color,
) -> float:
    c.setFont("Montserrat-Bold", 10)
    c.setFillColor(text_color)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(line_color)
    c.setLineWidth(0.8)
    c.line(x, y - 3, x + width, y - 3)
    return y - 16


def draw_paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font_name: str,
    font_size: float,
    leading: float,
    color: colors.Color,
) -> float:
    lines = wrap_text(text, font_name, font_size, width)
    c.setFont(font_name, font_size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_bullet_lines(
    c: canvas.Canvas,
    items: list[str],
    x: float,
    y: float,
    width: float,
    font_name: str,
    font_size: float,
    leading: float,
    color: colors.Color,
) -> float:
    for item in items:
        bullet_lines = wrap_text(item, font_name, font_size, width - 10)
        c.setFont(font_name, font_size)
        c.setFillColor(color)
        c.drawString(x, y, "-")
        c.drawString(x + 10, y, bullet_lines[0])
        y -= leading
        for line in bullet_lines[1:]:
            c.drawString(x + 10, y, line)
            y -= leading
    return y


def generate_pdf() -> None:
    register_fonts()

    page_w, page_h = A4
    c = canvas.Canvas(str(OUTPUT_PDF), pagesize=A4)

    left_w = 184
    right_x = left_w + 20
    right_w = page_w - right_x - 20

    dark_panel = colors.Color(0.09, 0.12, 0.11)
    light_bg = colors.Color(0.996, 0.996, 0.996)
    white = colors.Color(1, 1, 1)
    muted_left = colors.Color(0.84, 0.88, 0.86)
    heading_right = colors.Color(0.09, 0.18, 0.14)
    body_right = colors.Color(0.16, 0.16, 0.16)
    line_right = colors.Color(0.70, 0.74, 0.72)
    accent_left = colors.Color(0.67, 0.76, 0.72)

    c.setFillColor(light_bg)
    c.rect(0, 0, page_w, page_h, stroke=0, fill=1)

    c.setFillColor(dark_panel)
    c.rect(0, 0, left_w, page_h, stroke=0, fill=1)

    y_left = page_h - 46
    c.setFillColor(white)
    c.setFont("Montserrat-Bold", 20)
    c.drawString(18, y_left, "GOKTUG")
    y_left -= 24
    c.drawString(18, y_left, "KARACA")
    y_left -= 18

    c.setFont("Montserrat-SemiBold", 9)
    c.setFillColor(muted_left)
    c.drawString(18, y_left, PROFILE["title"].upper())
    y_left -= 20

    c.setStrokeColor(accent_left)
    c.setLineWidth(0.8)
    c.line(18, y_left, left_w - 18, y_left)
    y_left -= 18

    y_left = draw_section_title(c, "Contact", 18, y_left, left_w - 36, white, accent_left)
    c.setFont("Montserrat-Regular", 8.4)
    c.setFillColor(muted_left)
    left_contact = [
        PROFILE["location"],
        PROFILE["email"],
        PROFILE["website"],
        PROFILE["github"],
        PROFILE["linkedin"],
        PROFILE["instagram"],
    ]
    for line in left_contact:
        for wrapped in wrap_text(line, "Montserrat-Regular", 8.4, left_w - 36):
            c.drawString(18, y_left, wrapped)
            y_left -= 11.2
    y_left -= 8

    y_left = draw_section_title(c, "Skills", 18, y_left, left_w - 36, white, accent_left)
    y_left = draw_bullet_lines(
        c,
        SKILLS,
        18,
        y_left,
        left_w - 36,
        "Montserrat-Regular",
        8.2,
        11.0,
        muted_left,
    )
    y_left -= 8

    y_left = draw_section_title(c, "Activities", 18, y_left, left_w - 36, white, accent_left)
    y_left = draw_bullet_lines(
        c,
        ACTIVITIES,
        18,
        y_left,
        left_w - 36,
        "Montserrat-Regular",
        8.2,
        11.0,
        muted_left,
    )

    y_right = page_h - 46
    c.setFillColor(heading_right)
    c.setFont("Montserrat-Bold", 22)
    c.drawString(right_x, y_right, PROFILE["name"])
    y_right -= 16

    c.setFont("Montserrat-SemiBold", 9.2)
    c.setFillColor(colors.Color(0.28, 0.33, 0.30))
    c.drawString(right_x, y_right, "PROJECT-DRIVEN COMPUTER ENGINEERING STUDENT")
    y_right -= 18

    c.setStrokeColor(line_right)
    c.setLineWidth(0.8)
    c.line(right_x, y_right, right_x + right_w, y_right)
    y_right -= 18

    y_right = draw_section_title(
        c, "About Me", right_x, y_right, right_w, heading_right, line_right
    )
    y_right = draw_paragraph(
        c,
        ABOUT,
        right_x,
        y_right,
        right_w,
        "Montserrat-Regular",
        9.1,
        12.8,
        body_right,
    )
    y_right -= 10

    y_right = draw_section_title(
        c, "Education", right_x, y_right, right_w, heading_right, line_right
    )
    c.setFont("Montserrat-SemiBold", 10)
    c.setFillColor(body_right)
    c.drawString(right_x, y_right, EDUCATION["school"])
    y_right -= 12
    c.setFont("Montserrat-Regular", 9)
    c.drawString(right_x, y_right, EDUCATION["degree"])
    y_right -= 11
    c.drawString(right_x, y_right, EDUCATION["period"])
    y_right -= 16

    y_right = draw_section_title(
        c, "Experience", right_x, y_right, right_w, heading_right, line_right
    )
    for item in EXPERIENCE:
        c.setFont("Montserrat-SemiBold", 9.5)
        c.setFillColor(body_right)
        c.drawString(right_x, y_right, item["title"])
        y_right -= 11
        y_right = draw_paragraph(
            c,
            item["body"],
            right_x,
            y_right,
            right_w,
            "Montserrat-Regular",
            8.8,
            11.8,
            body_right,
        )
        y_right -= 7

    y_right = draw_section_title(
        c, "Projects", right_x, y_right, right_w, heading_right, line_right
    )
    for project in PROJECTS:
        c.setFont("Montserrat-SemiBold", 9.3)
        c.setFillColor(body_right)
        c.drawString(right_x, y_right, project["name"])
        y_right -= 10.8

        y_right = draw_paragraph(
            c,
            project["desc"],
            right_x,
            y_right,
            right_w,
            "Montserrat-Regular",
            8.5,
            11.1,
            body_right,
        )

        c.setFont("Montserrat-Regular", 8.1)
        c.setFillColor(colors.Color(0.20, 0.28, 0.24))
        for wrapped in wrap_text(project["link"], "Montserrat-Regular", 8.1, right_w):
            c.drawString(right_x, y_right, wrapped)
            y_right -= 10.2
        y_right -= 3.5

    c.save()
    print(f"Created: {OUTPUT_PDF.resolve()}")


if __name__ == "__main__":
    generate_pdf()
