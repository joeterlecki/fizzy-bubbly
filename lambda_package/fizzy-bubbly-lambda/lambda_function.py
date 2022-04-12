import json

def generate_number_list(start_number, end_number):
    number_list = []
    for number in range(start_number, end_number):
        number_list.append(number)

    return number_list


def calculate_fiz_buzz(numbers):
    fizz_buzz_list = []
    for number in numbers:
        if number % 3 == 0 and number % 5 == 0:
            fizz_buzz_list.append('FIZZBUZZ')
        elif number % 3 == 0:
            fizz_buzz_list.append('FIZZ')
        elif number % 5 == 0:
            fizz_buzz_list.append('BUZZ')
        else:
            fizz_buzz_list.append(str(number))

    return fizz_buzz_list


def format_response(response_data):
    numbers_response = {}
    numbers_response['number_list'] = response_data

    request_response = {}
    request_response['statusCode'] = 200
    request_response['headers'] = {}
    request_response['headers']['Content-Type'] = 'application/json'
    request_response['headers']['Access-Control-Allow-Origin'] = '*'
    request_response['body'] = json.dumps(numbers_response)
    
    return request_response


def main(event):
    start_number = int(event['queryStringParameters']['start_number'])
    end_number = int(event['queryStringParameters']['end_number'])

    number_list = generate_number_list(start_number, end_number + 1)
    response = calculate_fiz_buzz(number_list)

    request_response = format_response(response)

    return request_response


def lambda_handler(event, context):
    response = main(event)

    return response
