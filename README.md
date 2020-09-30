# Interest Calculator
An interest calculator that performs both simple and compound interest calculations.


## Usage

### User Interface
To perform calculations via the user interface, go to https://intcalc.herokuapp.com/

### API
To integrate the application's functionalities with a third-party software, you can do this via the app's API function as demonstrated below:

#### Queries
You will need to supply the data as queries in the request url. The following queries are obtainable:
* amount - number expected. Defaults to 0 if omitted.
* rate - number expected. Defaults to 0 if omitted.
* basis - string (either month or year expected). Defaults to month if omitted.
* duration (in months) - number expected. Defaults to 0 if omitted.

#### Results
The application will return a JSON object that you can parse and apply to your application. The JSON object has three properties, viz.: principal, interest, and totalAmount.

#### Using Fetch
To perform a simple interest calculation on a principal of 50,000 at 10% interest per month for 2 months using fetch, the syntax will be something like this:

```
fetch("https://intcalc.herokuapp.com/simple?amount=50000&rate=10&basis=month&duration=2")
.then(response => response.json())
.then(json => console.log(json.principal, json.interest, json.totalAmount));
```
> The code above parses the returned JSON object and logs each property of the object to the console. If you are new to Fetch, you can check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

To perform a compound interest calculation with similar values for the queries but for a duration of 2 years which is equivalent to 24 months, the syntax will instead be:
```
fetch("https://intcalc.herokuapp.com/compound?amount=50000&rate=10&basis=month&duration=24")
.then(response => response.json())
.then(json => console.log(json.principal, json.interest, json.totalAmount));
```