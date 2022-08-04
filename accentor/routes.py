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
        return render_template("accentor.html", surname=new_accentor.surname)
    if request.method == 'POST':
        new_surname = request.form['surname']
        new_accentor = Accentor()
        new_accentor.next(new_surname)
        return 'done'

