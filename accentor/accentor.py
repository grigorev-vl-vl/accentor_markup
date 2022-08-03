from flask import url_for


class Accentor:
    """Класс для расстановки ударений"""
    def __init__(self):
        # TODO deal with static file path
        with open("/home/local/REGION/vv.grigorev/Desktop/tts/accentor_markup/accentor/static/dict", 'r') as f:
            surname = f.read()
            # self.surname = list()
            # for item in surname:
            #     self.surname.append(item)
            self.surname = surname
