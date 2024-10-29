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
                padding: 0;
                min-height: 100vh;
                background: linear-gradient(135deg, 
                    rgb(10,10,35) 0%,
                    rgb(20,20,50) 50%,
                    rgb(15,15,40) 100%);
                color: #e0e0e0;
            }
            .wrapper {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            h1 {
                color: #fff;
                text-align: center;
                font-size: 2.5em;
                margin-bottom: 1.5em;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            h2 {
                color: #8be9fd;
                border-bottom: 2px solid #8be9fd;
                padding-bottom: 10px;
                margin-bottom: 20px;
            }
            .container {
                display: flex;
                justify-content: space-between;
                gap: 40px;
                background: rgba(15,15,45,0.5);
                border-radius: 15px;
                padding: 30px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .column {
                width: 48%;
                background: rgba(20,20,55,0.5);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            ol {
                padding-left: 20px;
                margin: 0;
            }
            li {
                margin-bottom: 12px;
                transition: transform 0.2s ease;
            }
            li:hover {
                transform: translateX(5px);
            }
            a {
                color: #bd93f9;
                text-decoration: none;
                transition: color 0.3s ease;
            }
            a:hover {
                color: #ff79c6;
                text-decoration: none;
            }
            @media (max-width: 768px) {
                .container {
                    flex-direction: column;
                }
                .column {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <h1>子目錄文件索引</h1>
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
            f'                        <li><a href="{file_path}">{file_path}</a></li>\n'
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
            f'                        <li><a href="{file_path}">{file_path}</a></li>\n'
        )

    html_content += """
                    </ol>
                </div>
            </div>
        </div>
    </body>
    </html>
    """

    with open("combined_index.html", "w", encoding="utf-8") as f:
        f.write(html_content)

    print("combined_index.html 文件已成功創建，使用深色漸層背景主題。")


create_combined_index_html()
