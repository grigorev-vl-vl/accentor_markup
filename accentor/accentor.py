from flask import url_for


class Accentor:
    """Класс для расстановки ударений"""
    def __init__(self, surname=None):
        # TODO deal with static file path
        # Read particular line
        with open("/home/local/REGION/vv.grigorev/Desktop/tts/accentor_markup/accentor/static/current_line", 'r') as f:
            line = f.read()
            self.line = int(line)
        with open("/home/local/REGION/vv.grigorev/Desktop/tts/accentor_markup/accentor/static/input_dict", 'r') as f:
            surname = f.readlines()[self.line].strip('\n')
            self.surname = surname

    def next(self, surname):
        # Write the next line index:
        with open("/home/local/REGION/vv.grigorev/Desktop/tts/accentor_markup/accentor/static/current_line", 'w') as f:
            f.write(str(self.line + 1))

        # Write the surname with correct stress
        with open("/home/local/REGION/vv.grigorev/Desktop/tts/accentor_markup/accentor/static/output_dict", 'a') as f:
            f.write(f"{surname}\n")
        return True



