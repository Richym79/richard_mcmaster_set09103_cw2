from flask import Flask, redirect, url_for, render_template, json, request, Markup
app = Flask(__name__)

@app.route('/')
def root():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "0":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter1/')
def chapter1():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "1":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter2/')
def chapter2():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "2":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter3/')
def chapter3():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "3":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter4/')
def chapter4():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "4":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter5/')
def chapter5():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "5":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")
    
@app.route('/chapter6/')
def chapter6():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "6":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter7/')
def chapter7():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "7":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/chapter8/')
def chapter8():
	story_data = []
	with app.open_resource('static/json/story_content.json') as stories:
		story_array = json.load(stories)
		total_stories = len(story_array)
		for story in story_array:
			story_chapter = str(story['chapter'])
			if story_chapter == "8":
				story_data.append(story)	
				
	return render_template('index.html', story_data=story_data, outcome_selected="0")

@app.route('/outcome1/')
def outcome1():
	return render_template('index.html', outcome_selected="1")

@app.route('/outcome2/')
def outcome2():
	return render_template('index.html', outcome_selected="2")

@app.route('/outcome3/')
def outcome3():
	return render_template('index.html', outcome_selected="3")

@app.route('/outcome4/')
def outcome4():
	return render_template('index.html', outcome_selected="4")

if __name__ == '__main__':
	app.run(debug-True)
