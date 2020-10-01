# Interest Calculator
An interest calculator that performs both simple and compound interest calculations.


## Usage

### User Interface
To perform calculations via the user interface, go to https://intcalc.herokuapp.com/

### API
To integrate the application's functionalities with a third-party software, you can do this via the app's API function as demonstrated below:

#### Queries
You will need to supply the data as queries in the request url in no particular order. The following queries are obtainable:
* amount - number expected. Defaults to 0 if omitted.
* rate - number expected. Defaults to 0 if omitted.
* basis - string (either month or year expected). Defaults to month if omitted.
* duration (in months) - number expected. Defaults to 0 if omitted.

#### Results
The application will return a JSON object that you can parse and apply to your application. The JSON object has three properties, viz.: principal, interest, and totalAmount.

#### Using Fetch
To perform a simple interest calculation on a principal of 50,000 at 10% interest per month for 2 months using Fetch, the syntax below can be used.

```
fetch("https://intcalc.herokuapp.com/simple?amount=50000&rate=10&basis=month&duration=2")
.then(response => response.json())
.then(json => console.log(json.principal, json.interest, json.totalAmount));
```
> The code above parses the returned JSON object and logs each property of the object to the console. If you are new to Fetch, you can check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

To perform a compound interest calculation with similar values for the queries but for a duration of 2 years which is equivalent to 24 months, the queries provided below will be used instead.
```
fetch("https://intcalc.herokuapp.com/compound?amount=50000&rate=10&basis=month&duration=24")
.then(response => response.json())
.then(json => console.log(json.principal, json.interest, json.totalAmount));
```

#### Using Ajax
You can use AJAX to make the API calls instead. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.

```
$.ajax({
    url: "https://intcalc.herokuapp.com/simple?amount=50000&rate=10&basis=month&duration=2",
    dataType: "json",
    success: function (result) {
      console.log(result);
    }
});
```
For more information on using JQuery's AJAX, check out the [documentation](https://api.jquery.com/jquery.ajax/)

## Known Issues
There are no known issues yet. To report an issue, go to [issues](https://github.com/Chukwuamaka/interest-calculator/issues).

## Contribution
Here are some awesome ways you can contribute:

* Extend the capabilities of the application by contributing to the source code.
* Report and solve issues/bugs.
* Make feature requests.
* Review source code changes.
* Review the documentation and make pull requests for anything, from typos to new content.

We would be happy to receive your contributions towards this project 😃. You will be contributing to the common good.

## Feedback
Let me know what you think by:

* Sending a [mail](mailto:osujichukwuamaka@gmail.com)
* Sending a private message on [LinkedIn](https://www.linkedin.com/in/chukwuamakaosuji/) or [Twitter](https://twitter.com/SenseiAmaka)

## License
This software is licensed under the MIT license.

**Enjoy!** 😃