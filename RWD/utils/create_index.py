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


def create_index_html():
    current_dir = os.getcwd()

    html_content = """
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>子目錄HTML文件索引</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            ol {
                padding-left: 20px;
            }
            li {
                margin-bottom: 10px;
		list-style-type:none;
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
        <h1>子目錄HTML文件索引</h1>
        <ol>
    """

    html_files = []
    for root, dirs, files in os.walk(current_dir):
        for file in files:
            if file.endswith(".html") and root != current_dir:
                # 使用 os.path.join 和 os.path.relpath 來確保路徑的正確性
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, current_dir)
                # 將反斜線轉換為正斜線，以確保在 HTML 中正確顯示
                rel_path = rel_path.replace(os.path.sep, "/")
                html_files.append(rel_path)

    html_files.sort(key=custom_sort_key)

    for file_path in html_files:
        html_content += f'        <li><a href="{file_path}">{file_path}</a></li>\n'

    html_content += """
        </ol>
    </body>
    </html>
    """

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html_content)

    print("index.html 文件已成功創建，連結按自定義順序排列。")


create_index_html()
