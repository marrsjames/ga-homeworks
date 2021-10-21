# to pass the test function, please return a string of 'string' from then function
# eg: test() => 'string'
def test():
    return 'string'

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"


def hello(string= "World"):
    return f"Hello {string}!"


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return (radius**2 * 3.141592653589793)


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return ((celcius*1.8) + 32)


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    number_string = f"{number}"
    stringlength=len(number_string)
    slicedString=number_string[stringlength::-1]
    return float(slicedString)

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False


def palindrome_check(string):
    stripped_string = string.replace(" ", "")
    string_length=len(stripped_string)
    sliced_string=stripped_string[string_length::-1]
    # print (stripped_string)
    # print (slicedString)
    return (stripped_string == sliced_string)

# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):

    lower_string = string.lower().replace(" ","")
    sorted_characters = sorted(lower_string)
    ordered_lowercase_string = "".join(sorted_characters)
    return ordered_lowercase_string

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'


def title_case(string):
    split_string=string.split()
    capitalized_array=[]
    for word in split_string:
        upper_split_word=word.capitalize()
        capitalized_array.append(upper_split_word)
    capitalized_string = ' '.join(capitalized_array)
    return capitalized_string

# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6


def num_of_vowels(string):
    lowercase_array = list(string.lower())
    number_of_vowels = 0
    for character in lowercase_array:
        if (character == 'a' or character == 'e' or character == 'i' or character == 'o' or character == 'u'):
            number_of_vowels=number_of_vowels + 1
            
    return number_of_vowels

    # write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************


def frame(string):
    string_length = len(string)
    frame_length = string_length+4
    print(string_length)
    asterisk_array = []
    for x in range(frame_length):
        asterisk_array.append('*')
    asterisk_row= ''.join(asterisk_array)
    framed_string = asterisk_row + '\n* ' + string + ' *\n' + asterisk_row
    return framed_string