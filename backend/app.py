from flask import Flask, render_template, request
from backend.calculator import calculator

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)

history = []


@app.route('/', methods=['GET', 'POST'])
def home():

    result = None

    if request.method == 'POST':

        num1 = float(request.form['num1'])
        num2 = float(request.form['num2'])
        operator = request.form['operator']

        result = calculator(num1, num2, operator)

        history.append(
            (num1, operator, num2, result)
        )

    return render_template(
        'index.html',
        result=result,
        history=history
    )


if __name__ == "__main__":
    app.run(debug=True)