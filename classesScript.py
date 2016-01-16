import csv
import string
import re
#0 P
#54 S
#136 As
#162 HNO
fileDirectory = "/home/aparry2/WordSite/"
chemicalsName = "chemicals.csv"
classes = "all_classes.csv"


def updateData():
	
	count = 0
	error = ""
	output = open(fileDirectory + "classes.json", "w")
	jsons = []
	count = 0
	name = ""
	description = ""
	chemPres = 0;
	with open(fileDirectory+classes,'rb') as classFile:
		classData = csv.reader(classFile, dialect='excel')
		i = 0
		for data in classData:
			spaces = [m.start() for m in re.finditer('\s', data[0])]
			print spaces[0]
			name = data[0][0:spaces[1]]
			description = data[0][spaces[1]+1:]
			print name
			print description
			json = "{\n\tname: \"" + name + "\",\n\tdescription: \"" + description +"\","
			json += "\n\tteachers: [],\n\tid: " + str(i) +"\n},\n"
			jsons.append(json)	
			i+= 1;
	theJson = ""
	for js in jsons:
		theJson += js
	output.write(theJson)

			

updateData()

