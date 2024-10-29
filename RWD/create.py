import os
import re


def custom_sort_key(s):
    match = re.search(r"\d+", s)
    if match:
        num = int(match.group())
        if num >= 10:
            return (1, num)
        else:
            return (0, num)
    return (2, s)


def create_combined_index_html():
    current_dir = os.getcwd()

    html_content = """
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>feeeCodeCamp RWD Series</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                display: flex;
                flex-direction: column;
            }
            h1 {
                color: #333;
                text-align: center;
                border-style:double;
            }
            h2 {
                margin-left: 20px;
            }
            .container {
                display: flex;
                justify-content: space-between;
            }
            .column {
                width: 48%;
                border: 1px solid #ccc;
            }
            ol {
                padding-left: 20px;
            }
            li {
                margin-bottom: 10px;
                list-style-type: none;
            }
            a {
                color: #0066cc;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>feeeCodeCamp RWD Series</h1>
        <div class="container">
            <div class="column">
                <h2>HTML 文件</h2>
                <ol>
    """

    html_files = []
    css_files = []
    for root, dirs, files in os.walk(current_dir):
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, current_dir)
            rel_path = rel_path.replace(os.path.sep, "/")
            if file.endswith(".html") and root != current_dir:
                html_files.append(rel_path)
            elif file == "styles.css" and root != current_dir:
                css_files.append(rel_path)

    html_files.sort(key=custom_sort_key)
    css_files.sort(key=custom_sort_key)

    for file_path in html_files:
        html_content += (
            f'                    <li><a href="{file_path}">{file_path}</a></li>\n'
        )

    html_content += """
                </ol>
            </div>
            <div class="column">
                <h2>CSS 文件</h2>
                <ol>
    """

    for file_path in css_files:
        html_content += (
            f'                    <li><a href="{file_path}">{file_path}</a></li>\n'
        )

    html_content += """
                </ol>
            </div>
        </div>
    </body>
    </html>
    """

    with open("combined_index.html", "w", encoding="utf-8") as f:
        f.write(html_content)

    print(
        "combined_index.html 文件已成功創建，左右分欄列出了所有子目錄中的 HTML 和 CSS 文件。"
    )


create_combined_index_html()
