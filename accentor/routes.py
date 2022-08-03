from accentor.accentor import Accentor

from flask import Blueprint, Response, session, render_template, jsonify, redirect, url_for, request, make_response

accentor = Blueprint('accentor',
                      __name__,
                      url_prefix='/accentor',
                      template_folder='templates',
                      static_folder='static')


@accentor.route("/", methods=['GET', 'POST'])
def index():
    new_accentor = Accentor()
    return render_template("accentor.html", surname=new_accentor.surname)
