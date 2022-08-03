from flask import Flask, redirect, url_for


def create_app():
    """Construct the core flask_session_tutorial."""
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['SESSION_COOKIE_PATH'] = '/'
    app.config['SECRET_KEY'] = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0



    with app.app_context():
        from accentor.routes import accentor

        app.register_blueprint(accentor)



        app.add_url_rule("/", "index", lambda: redirect(url_for('accentor.index')))
        app.add_url_rule("/accentor", "go_accentor", lambda: redirect(url_for('base.index', custom_page="special")))

        print(app.url_map)

        return app


if __name__ == '__main__':
    web_app = create_app()
    web_app.run(host='0.0.0.0', port=18088, debug=True, threaded=True, use_reloader=True)
