import time
import os
from urllib import request as req
import requests
from flask import Flask, request


app = Flask(__name__, static_folder='../build', static_url_path='/')

# to ensure that a url that ends in a slash e.g.:
# With this route, when the client requests 
# the https://example.com/ the server will send the contents of the index.html static file.
@app.route('/')
def index():
    """Return a clean URL."""
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    """Return unix time - for testing."""
    return {'time': time.time()}

@app.route('/api/convert', methods=["POST"], strict_slashes=False)
def convert():
    """Convert measurements."""

    ingredientname = request.json['Ingredient'] 
    originalmeasure = request.json['OriginalMeasure']
    originalvalue = request.json['OriginalValue']
    newunit = request.json['NewUnit']

    # Contact API
    try:
        api_key = os.environ.get("API_KEY")
        response = req.get(f"https://api.spoonacular.com/recipes/convert?apiKey={api_key}&ingredientName={urllib.parse.quote_plus(ingredientname)}&sourceAmount={urllib.parse.quote_plus(originalvalue)}&sourceUnit={urllib.parse.quote_plus(originalmeasure)}&targetUnit={urllib.parse.quote_plus(newunit)}")
        response.raise_for_status()
    except requests.RequestException:
        return None

    # Parse response
    try:
        newmeasure = response.json()
        return {
            "conversion": newmeasure["answer"]
        }
    except (KeyError, TypeError, ValueError):
        return None


@app.route('/api/getRecipe')
def get_recipe():
    """Retrive a recipe from spoonacular by URL
    and return full list of ingredients and instructions."""

    # Contact API
    try:
        api_key = os.environ.get("API_KEY")
        response = requests.get(f"https://api.spoonacular.com/recipes/extract?url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies&apiKey={api_key}")
        response.raise_for_status()
    except requests.RequestException:
        return None

    # Parse response
    try:
        recipe = response.json()
        return {
            "id": recipe["id"],
            "title": recipe["title"],
            "sourcename": recipe["sourceName"],
            "image" : recipe["image"],
            "sourceurl" : recipe["sourceUrl"],
            "aggregatelikes" : recipe["aggregateLikes"],
            "servings" : recipe["servings"],
            "weightwatcherssmartpoints" : recipe["weightWatcherSmartPoints"],
        }    
    except (KeyError, TypeError, ValueError):
        return None

@app.route('/api/analyse')
def analyse():
    """Retrive a recipe from spoonacular by URL
    and return full list of ingredients and instructions."""

    # Contact API
    try:
        url = "https://www.bbc.co.uk/food/recipes/chicken_supreme_38559"
        api_key = os.environ.get("API_KEY")
        response = requests.get(f"https://api.spoonacular.com/recipes/extract?url={url}&apiKey={api_key}&includeNutrition=false")
        response.raise_for_status()
    except requests.RequestException:
        return None

    # Parse response
    try:
        recipe = response.json()
        return {
            "id": recipe["id"],
            "title": recipe["title"],
            "sourcename": recipe["sourceName"],
            "image" : recipe["image"],
            "sourceurl" : recipe["sourceUrl"],
            "aggregatelikes" : recipe["aggregateLikes"],
            "servings" : recipe["servings"],
            "weightwatcherssmartpoints" : recipe["weightWatcherSmartPoints"],
            "extendedingredients" : recipe["extendedIngredients"]
        }
    except (KeyError, TypeError, ValueError):
        return None
