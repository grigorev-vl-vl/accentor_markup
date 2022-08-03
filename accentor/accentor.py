class Accentor:
    """Класс для расстановки ударений"""
    def __init__(self):
        with open(f"accentor/static/dict", 'r') as f:
            self.dict = f.read()
