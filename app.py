from flask import Flask, redirect, url_for, render_template, json, request, Markup
app = Flask(__name__)

@app.route('/')
def root():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_data.append(story)	
	
	story_arr_length = len(story_data)			
	return render_template('index.html', stories=total_stories, arr_len=story_arr_length, story=story_data)

@app.route('/chapter1/')
def chapter1():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		for obj in story_array:
			chapter = str(obj["chapter"])
			if chapter == "1":
				story_data.append(obj)

	return render_template('index.html', story=story_data)
  

if __name__ == '__main__':
	app.run(debug-True)
