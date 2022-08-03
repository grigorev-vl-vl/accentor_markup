from accentor.accentor import Accentor

from flask import Blueprint, Response, session, render_template, jsonify, redirect, url_for, request, make_response

accentor = Blueprint('accentor',
                      __name__,
                      url_prefix='/accentor',
                      template_folder='templates',
                      static_folder='static')


@accentor.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        new_accentor = Accentor()
        print(f"Init surname is {new_accentor.surname}")
        return render_template("accentor.html", surname=new_accentor.surname)
    if request.method == 'POST':
        new_surname = request.form['surname']
        print(f"After write surname is {new_surname}")
        new_accentor = Accentor()
        new_accentor.next(new_surname)
