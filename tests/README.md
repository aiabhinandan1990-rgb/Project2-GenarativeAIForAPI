# Playwright API Automation Framework using Generative AI


## AI-Assisted Test Development Approach

The automation test cases were generated using GitHub Copilot with the help of contextual input provided through:

```text id="m7x2qp"
textcontext/apicontext.txt
`````

apicontext file contains -
````

1. You are an API test generator using playwright MCP
2. Use playwright's `request` context and `@playwright/test` framework
3. The test should : 
     - Send HTTP request to target API 
     - Validate the status code , response body and schema(if applicable)
     - Print useful logs for debugging if needed
     - Export the test to a `.spec.ts` file under the `/tests` folder
4. Do not generate test code until all steps are fully explored and validated.
```
Prompt for test case given as below -

```
Generate a Playwright API tests for following scenario

Define the API endpoint URL : 'https://fakestoreapi.com/products/1'
Send a GET request to the endpoint
Verify response status is 200
Validate the response contains these keys: 'id', 'title', 'price', 'category' and 'description'
optionally validate the data types using a JSON Schema (Ajv)
Log the product title and price to the code
```

The API context file was used as a reference to guide Generative AI in creating automation test scenarios.

---




