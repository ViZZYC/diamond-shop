import os
import re

directories = [
    'src/app/(admin)',
    'src/app/(admin-login)',
    'src/features/admin'
]

font_pattern = re.compile(r'\s*style=\{\{\s*fontFamily:\s*"Cormorant Garamond, serif"\s*\}\}')
button_pattern1 = re.compile(r'rounded-full(.*?)uppercase tracking-widest')
button_pattern2 = re.compile(r'uppercase tracking-widest(.*?)rounded-full')
button_pattern3 = re.compile(r'rounded-full')
button_pattern4 = re.compile(r'uppercase tracking-widest')

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content
    # Remove font styles
    content = font_pattern.sub('', content)
    
    # Tone down buttons
    # Replace uppercase tracking-widest with nothing, and rounded-full to rounded-lg
    content = content.replace('uppercase tracking-widest', '')
    content = content.replace('tracking-widest uppercase', '')
    content = content.replace('rounded-full', 'rounded-lg')
    # For login page button:
    content = content.replace('tracking-widest uppercase', '')
    content = content.replace('rounded-2xl', 'rounded-lg')
    content = content.replace('font-light', 'font-semibold')

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

for d in directories:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                process_file(os.path.join(root, file))
