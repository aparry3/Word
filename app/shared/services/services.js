angular.module('WordApp')
.factory('teachers', [function() {
	var o = [
		{
			name: 'Aaron'
		},
		{
			name: 'Colin'
		}
	];
	return o;
}]).factory('classes', [function() {
	var o = [
		{
	name: "ACCT 2101",
	description: "ACCOUNTING I",
	teachers: [],
	id: 0
},
{
	name: "ACCT 2102",
	description: "ACCOUNTING II",
	teachers: [],
	id: 1
},
{
	name: "AE 1350",
	description: "INTRO TO AEROSPACE ENGR",
	teachers: [],
	id: 2
},
{
	name: "AE 1355",
	description: "DESIGN COMPETITION I",
	teachers: [],
	id: 3
},
{
	name: "AE 1601",
	description: "INTRODUCTION TO AE",
	teachers: [],
	id: 4
},
{
	name: "AE 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 5
},
{
	name: "AE 1770",
	description: "INTRO TO ENGR GRAPHICS",
	teachers: [],
	id: 6
},
{
	name: "AE 1XXX",
	description: "AEROSPACE ENGR ELECTIVE",
	teachers: [],
	id: 7
},
{
	name: "AE 2010",
	description: "THERMODYN&FLUIDS FUNDAM",
	teachers: [],
	id: 8
},
{
	name: "AE 2020",
	description: "LOW SPEED AERODYNAMICS",
	teachers: [],
	id: 9
},
{
	name: "AE 2120",
	description: "INTRO TO MECHANICS",
	teachers: [],
	id: 10
},
{
	name: "AE 2220",
	description: "DYNAMICS",
	teachers: [],
	id: 11
},
{
	name: "AE 2355",
	description: "DESIGN COMPETITION II",
	teachers: [],
	id: 12
},
{
	name: "AE 2610",
	description: "INTRO EXPER METHODS AE",
	teachers: [],
	id: 13
},
{
	name: "AE 2611",
	description: "TECHNICAL COMMUN FOR AE",
	teachers: [],
	id: 14
},
{
	name: "AE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 15
},
{
	name: "AE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 16
},
{
	name: "AE 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 17
},
{
	name: "AE 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 18
},
{
	name: "AE 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 19
},
{
	name: "AE 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 20
},
{
	name: "AE 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 21
},
{
	name: "AE 2903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 22
},
{
	name: "AE 2XXX",
	description: "AEROSPACE ENGR ELECTIVE",
	teachers: [],
	id: 23
},
{
	name: "AE 3021",
	description: "HIGH SPEED AERODYNAMICS",
	teachers: [],
	id: 24
},
{
	name: "AE 3030",
	description: "AERODYNAMICS",
	teachers: [],
	id: 25
},
{
	name: "AE 3051",
	description: "EXPERIMENTAL FLUID DYN",
	teachers: [],
	id: 26
},
{
	name: "AE 3090",
	description: "NUMERICAL METHODS FOR AE",
	teachers: [],
	id: 27
},
{
	name: "AE 3120",
	description: "INTRO-STRUCTURAL ANALY",
	teachers: [],
	id: 28
},
{
	name: "AE 3125",
	description: "AE STRUCTURAL ANALYSIS",
	teachers: [],
	id: 29
},
{
	name: "AE 3140",
	description: "STRUCTURAL ANALYSIS",
	teachers: [],
	id: 30
},
{
	name: "AE 3145",
	description: "STRUCTURES LABORATORY",
	teachers: [],
	id: 31
},
{
	name: "AE 3310",
	description: "AE VEHICLE PERFORMANCE",
	teachers: [],
	id: 32
},
{
	name: "AE 3330",
	description: "INTRO AE VEHICLE PERFORM",
	teachers: [],
	id: 33
},
{
	name: "AE 3340",
	description: "DESIGN&SYSTEM ENG METHOD",
	teachers: [],
	id: 34
},
{
	name: "AE 3355",
	description: "DESIGN COMPETITION III",
	teachers: [],
	id: 35
},
{
	name: "AE 3450",
	description: "THERMODYNAMICS&COMP FLOW",
	teachers: [],
	id: 36
},
{
	name: "AE 3515",
	description: "SYSTEM DYNAMICS& CONTROL",
	teachers: [],
	id: 37
},
{
	name: "AE 3521",
	description: "FLIGHT DYNAMICS",
	teachers: [],
	id: 38
},
{
	name: "AE 3530",
	description: "SYS DYNAMICS&VIBRATION",
	teachers: [],
	id: 39
},
{
	name: "AE 3531",
	description: "CTRL SYS ANALYSIS&DESIGN",
	teachers: [],
	id: 40
},
{
	name: "AE 3610",
	description: "EXPER FLUIDS&SOLID MECH",
	teachers: [],
	id: 41
},
{
	name: "AE 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 42
},
{
	name: "AE 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 43
},
{
	name: "AE 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 44
},
{
	name: "AE 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 45
},
{
	name: "AE 3902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 46
},
{
	name: "AE 3903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 47
},
{
	name: "AE 3XXX",
	description: "AEROSPACE ENGR ELECTIVE",
	teachers: [],
	id: 48
},
{
	name: "AE 4040",
	description: "COMPUTATIONAL FLUID DYN",
	teachers: [],
	id: 49
},
{
	name: "AE 4051",
	description: "FLOW DIAGNOSTICS",
	teachers: [],
	id: 50
},
{
	name: "AE 4060",
	description: "AEROACOUSTICS",
	teachers: [],
	id: 51
},
{
	name: "AE 4070",
	description: "PROPELLER & ROTOR THEORY",
	teachers: [],
	id: 52
},
{
	name: "AE 4080",
	description: "AEROTHERMODYNAMICS",
	teachers: [],
	id: 53
},
{
	name: "AE 4120",
	description: "INTR-COMPOSITE AE STRUCT",
	teachers: [],
	id: 54
},
{
	name: "AE 4131",
	description: "INTRO TO FINITE ELEMENT",
	teachers: [],
	id: 55
},
{
	name: "AE 4170",
	description: "STRUCT INTEGRITY&DURA",
	teachers: [],
	id: 56
},
{
	name: "AE 4220",
	description: "AEROELASTICITY",
	teachers: [],
	id: 57
},
{
	name: "AE 4310",
	description: "SPACE FLIGHT MECHANICS",
	teachers: [],
	id: 58
},
{
	name: "AE 4341",
	description: "AIRCRAFT DESIGN",
	teachers: [],
	id: 59
},
{
	name: "AE 4342",
	description: "SPACE SYSTEM DESIGN",
	teachers: [],
	id: 60
},
{
	name: "AE 4343",
	description: "ROTORCRAFT DESIGN",
	teachers: [],
	id: 61
},
{
	name: "AE 4350",
	description: "AE DESIGN PROJECT I",
	teachers: [],
	id: 62
},
{
	name: "AE 4351",
	description: "AE DESIGN PROJECT II",
	teachers: [],
	id: 63
},
{
	name: "AE 4355",
	description: "DESIGN COMPETITION IV",
	teachers: [],
	id: 64
},
{
	name: "AE 4356",
	description: "SPACE SYSTEMS DESIGN I",
	teachers: [],
	id: 65
},
{
	name: "AE 4357",
	description: "SPACE SYSTEMS DESIGN II",
	teachers: [],
	id: 66
},
{
	name: "AE 4358",
	description: "ROTORCRAFT DESIGN I",
	teachers: [],
	id: 67
},
{
	name: "AE 4359",
	description: "ROTORCRAFT DESIGN II",
	teachers: [],
	id: 68
},
{
	name: "AE 4370",
	description: "LIFE CYCLE COST ANALYSIS",
	teachers: [],
	id: 69
},
{
	name: "AE 4375",
	description: "COMPUTER-AIDED DESIGN",
	teachers: [],
	id: 70
},
{
	name: "AE 4451",
	description: "JET & ROCKET PROPULSION",
	teachers: [],
	id: 71
},
{
	name: "AE 4461",
	description: "INTRO TO COMBUSTION",
	teachers: [],
	id: 72
},
{
	name: "AE 4521",
	description: "VEHICLE GUIDANCE&SIMULAT",
	teachers: [],
	id: 73
},
{
	name: "AE 4525",
	description: "CONTROL SYSTEM DSGN LAB",
	teachers: [],
	id: 74
},
{
	name: "AE 4531",
	description: "AIRCRAFT FLIGHT DYNAMICS",
	teachers: [],
	id: 75
},
{
	name: "AE 4532",
	description: "SPACECRAFT FLIGHT DYNAM",
	teachers: [],
	id: 76
},
{
	name: "AE 4552",
	description: "INTRO HUMANS & AUTONOMY",
	teachers: [],
	id: 77
},
{
	name: "AE 4580",
	description: "AVIONICS INTEGRATION",
	teachers: [],
	id: 78
},
{
	name: "AE 4610",
	description: "DYNAMICS & CONTROL LAB",
	teachers: [],
	id: 79
},
{
	name: "AE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 80
},
{
	name: "AE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 81
},
{
	name: "AE 4701",
	description: "WIND ENGINEERING",
	teachers: [],
	id: 82
},
{
	name: "AE 4757",
	description: "BIOFLUID MECHANICS",
	teachers: [],
	id: 83
},
{
	name: "AE 4758",
	description: "BIOSOLID MECHANICS",
	teachers: [],
	id: 84
},
{
	name: "AE 4760",
	description: "ACOUSTICS& NOISE CONTROL",
	teachers: [],
	id: 85
},
{
	name: "AE 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 86
},
{
	name: "AE 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 87
},
{
	name: "AE 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 88
},
{
	name: "AE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 89
},
{
	name: "AE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 90
},
{
	name: "AE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 91
},
{
	name: "AE 4804",
	description: "SPEC TOPIC-AEROSPACE EGR",
	teachers: [],
	id: 92
},
{
	name: "AE 4883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 93
},
{
	name: "AE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 94
},
{
	name: "AE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 95
},
{
	name: "AE 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 96
},
{
	name: "AE 4XXX",
	description: "AEROSPACE ENGR ELECTIVE",
	teachers: [],
	id: 97
},
{
	name: "AE 6009",
	description: "VISCOUS FLUID FLOW",
	teachers: [],
	id: 98
},
{
	name: "AE 6012",
	description: "TURBULENT FLOWS",
	teachers: [],
	id: 99
},
{
	name: "AE 6015",
	description: "ADVANCED AERODYNAMICS",
	teachers: [],
	id: 100
},
{
	name: "AE 6020",
	description: "HIGH SPEED FLOW",
	teachers: [],
	id: 101
},
{
	name: "AE 6030",
	description: "UNSTEADY AERODYNAMICS",
	teachers: [],
	id: 102
},
{
	name: "AE 6042",
	description: "COMPUTATIONAL FLUID DYN",
	teachers: [],
	id: 103
},
{
	name: "AE 6050",
	description: "GAS DYNAMICS",
	teachers: [],
	id: 104
},
{
	name: "AE 6052",
	description: "FLOW DIAGNOSTICS",
	teachers: [],
	id: 105
},
{
	name: "AE 6060",
	description: "AEROACOUSTICS",
	teachers: [],
	id: 106
},
{
	name: "AE 6070",
	description: "ROTARY WING AERODYNAMICS",
	teachers: [],
	id: 107
},
{
	name: "AE 6080",
	description: "DYNAMICS OF TURBULENCE",
	teachers: [],
	id: 108
},
{
	name: "AE 6100",
	description: "STRUCTURAL STABILITY I",
	teachers: [],
	id: 109
},
{
	name: "AE 6101",
	description: "STRUCTURAL STABILITY II",
	teachers: [],
	id: 110
},
{
	name: "AE 6104",
	description: "COMPUTATIONAL MECHANICS",
	teachers: [],
	id: 111
},
{
	name: "AE 6106",
	description: "ANALYSIS-AERO STRUCTURES",
	teachers: [],
	id: 112
},
{
	name: "AE 6107",
	description: "AEROL STRUCTURAL ELEMENTS",
	teachers: [],
	id: 113
},
{
	name: "AE 6111",
	description: "ELASTICITY",
	teachers: [],
	id: 114
},
{
	name: "AE 6112",
	description: "INELASTIC RESPONSE",
	teachers: [],
	id: 115
},
{
	name: "AE 6114",
	description: "FUNDAMNTL SOLID MECHANIC",
	teachers: [],
	id: 116
},
{
	name: "AE 6115",
	description: "FNDMNTL AERO STRUCT ANAL",
	teachers: [],
	id: 117
},
{
	name: "AE 6123",
	description: "FIBER REINFORC COMPOSITE",
	teachers: [],
	id: 118
},
{
	name: "AE 6161",
	description: "THEORY OF PLATES",
	teachers: [],
	id: 119
},
{
	name: "AE 6162",
	description: "SHELL STRUCTURES",
	teachers: [],
	id: 120
},
{
	name: "AE 6165",
	description: "PRIN-FRACTURE & FATIGUE",
	teachers: [],
	id: 121
},
{
	name: "AE 6170",
	description: "STRUCTURAL OPTIMIZATION",
	teachers: [],
	id: 122
},
{
	name: "AE 6200",
	description: "AEROELASTICITY",
	teachers: [],
	id: 123
},
{
	name: "AE 6210",
	description: "ADVANCED DYNAMICS I",
	teachers: [],
	id: 124
},
{
	name: "AE 6211",
	description: "ADVANCED DYNAMICS II",
	teachers: [],
	id: 125
},
{
	name: "AE 6220",
	description: "ROTORCRAFT DYNAMICS",
	teachers: [],
	id: 126
},
{
	name: "AE 6230",
	description: "STRUCTURAL DYNAMICS",
	teachers: [],
	id: 127
},
{
	name: "AE 6231",
	description: "SYSTEM ID IN STRUCT DYN",
	teachers: [],
	id: 128
},
{
	name: "AE 6240",
	description: "NUMERICAL METHODS",
	teachers: [],
	id: 129
},
{
	name: "AE 6251",
	description: "EXPER METH-STRUCT DYNAM",
	teachers: [],
	id: 130
},
{
	name: "AE 6252",
	description: "SMART STRUCTURE CONTROL",
	teachers: [],
	id: 131
},
{
	name: "AE 6263",
	description: "FLEXIBLE MULTI-BODY DYN",
	teachers: [],
	id: 132
},
{
	name: "AE 6270",
	description: "NONLINEAR DYNAMICS",
	teachers: [],
	id: 133
},
{
	name: "AE 6280",
	description: "WAVE PROPAGATION",
	teachers: [],
	id: 134
},
{
	name: "AE 6310",
	description: "OPTIMIZ DESIGN ENGIN SYS",
	teachers: [],
	id: 135
},
{
	name: "AE 6322",
	description: "SPACECRAFT DESIGN I",
	teachers: [],
	id: 136
},
{
	name: "AE 6323",
	description: "SPACECRAFT DESIGN II",
	teachers: [],
	id: 137
},
{
	name: "AE 6333",
	description: "ROTORCRAFT DESIGN I",
	teachers: [],
	id: 138
},
{
	name: "AE 6334",
	description: "ROTORCRAFT DESIGN II",
	teachers: [],
	id: 139
},
{
	name: "AE 6343",
	description: "AIRCRAFT DESIGN I",
	teachers: [],
	id: 140
},
{
	name: "AE 6344",
	description: "AIRCRAFT DESIGN II",
	teachers: [],
	id: 141
},
{
	name: "AE 6353",
	description: "ORBITAL MECHANICS",
	teachers: [],
	id: 142
},
{
	name: "AE 6354",
	description: "ADV ORBITAL MECHANICS",
	teachers: [],
	id: 143
},
{
	name: "AE 6355",
	description: "PLANETARY ENTRY & DESCENT",
	teachers: [],
	id: 144
},
{
	name: "AE 6361",
	description: "PROPULSION SYS DESIGN I",
	teachers: [],
	id: 145
},
{
	name: "AE 6362",
	description: "SAFETY BY DESIGN",
	teachers: [],
	id: 146
},
{
	name: "AE 6372",
	description: "AEROSPACE SYSTEMS ENGR",
	teachers: [],
	id: 147
},
{
	name: "AE 6373",
	description: "ADV DESIGN METHODS I",
	teachers: [],
	id: 148
},
{
	name: "AE 6374",
	description: "ADV DESIGN METHODS II",
	teachers: [],
	id: 149
},
{
	name: "AE 6380",
	description: "COMPUTER AIDED DESIGN",
	teachers: [],
	id: 150
},
{
	name: "AE 6381",
	description: "SOFTWARE DEV FOR ENGR",
	teachers: [],
	id: 151
},
{
	name: "AE 6382",
	description: "COMPUTING SYS ENGR LAB",
	teachers: [],
	id: 152
},
{
	name: "AE 6383",
	description: "APPLIED DESIGN LAB",
	teachers: [],
	id: 153
},
{
	name: "AE 6410",
	description: "COMBUSTION DYNAMICS",
	teachers: [],
	id: 154
},
{
	name: "AE 6412",
	description: "TURBULENT COMBUSTION",
	teachers: [],
	id: 155
},
{
	name: "AE 6414",
	description: "MULTIPHASE COMBUSTION",
	teachers: [],
	id: 156
},
{
	name: "AE 6440",
	description: "TURBINE ENGINE AEROTHERM",
	teachers: [],
	id: 157
},
{
	name: "AE 6445",
	description: "COMBUSTOR FUNDAMENTALS",
	teachers: [],
	id: 158
},
{
	name: "AE 6450",
	description: "ROCKET PROPULSION",
	teachers: [],
	id: 159
},
{
	name: "AE 6451",
	description: "ELECTRIC PROPULSION",
	teachers: [],
	id: 160
},
{
	name: "AE 6503",
	description: "HELICOPTER STABILITY&CTL",
	teachers: [],
	id: 161
},
{
	name: "AE 6504",
	description: "MODERN METH-FLIGHT CTRL",
	teachers: [],
	id: 162
},
{
	name: "AE 6505",
	description: "KALMAN FILTERING",
	teachers: [],
	id: 163
},
{
	name: "AE 6506",
	description: "GUIDANCE & NAVIGATION",
	teachers: [],
	id: 164
},
{
	name: "AE 6511",
	description: "OPTIMAL GUIDANCE & CTRL",
	teachers: [],
	id: 165
},
{
	name: "AE 6520",
	description: "ADV FLIGHT DYNAMICS",
	teachers: [],
	id: 166
},
{
	name: "AE 6530",
	description: "MULTIVAR LINEAR SYS&CTRL",
	teachers: [],
	id: 167
},
{
	name: "AE 6531",
	description: "ROBUST CONTROL I",
	teachers: [],
	id: 168
},
{
	name: "AE 6532",
	description: "ROBUST CONTROL II",
	teachers: [],
	id: 169
},
{
	name: "AE 6534",
	description: "CONTROL OF AE STRUCTURES",
	teachers: [],
	id: 170
},
{
	name: "AE 6551",
	description: "COGNITIVE ENGINEERING",
	teachers: [],
	id: 171
},
{
	name: "AE 6552",
	description: "ADV HUMANS & AUTONOMY",
	teachers: [],
	id: 172
},
{
	name: "AE 6561",
	description: "RELIABLE CONTRL SOFTWARE",
	teachers: [],
	id: 173
},
{
	name: "AE 6571",
	description: "AIR TRAFFIC CONTROL & MGT",
	teachers: [],
	id: 174
},
{
	name: "AE 6580",
	description: "NONLINEAR CONTROL",
	teachers: [],
	id: 175
},
{
	name: "AE 6701",
	description: "WIND ENGINEERING",
	teachers: [],
	id: 176
},
{
	name: "AE 6721",
	description: "EVAL HUMAN INTEG SYSTEMS",
	teachers: [],
	id: 177
},
{
	name: "AE 6760",
	description: "ACOUSTICS I",
	teachers: [],
	id: 178
},
{
	name: "AE 6761",
	description: "ACOUSTICS II",
	teachers: [],
	id: 179
},
{
	name: "AE 6762",
	description: "APPLIED ACOUSTICS",
	teachers: [],
	id: 180
},
{
	name: "AE 6765",
	description: "KINETICS & THERMO GASES",
	teachers: [],
	id: 181
},
{
	name: "AE 6766",
	description: "COMBUSTION",
	teachers: [],
	id: 182
},
{
	name: "AE 6767",
	description: "ADV TOPICS IN COMBUSTION",
	teachers: [],
	id: 183
},
{
	name: "AE 6769",
	description: "LINEAR ELASTICITY",
	teachers: [],
	id: 184
},
{
	name: "AE 6770",
	description: "ENERGY METH-ELAST&PLAST",
	teachers: [],
	id: 185
},
{
	name: "AE 6779",
	description: "DYNAMIC SYSTEM MODELING",
	teachers: [],
	id: 186
},
{
	name: "AE 6XXX",
	description: "AEROSPACE ENGR ELECTIVE",
	teachers: [],
	id: 187
},
{
	name: "AE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 188
},
{
	name: "AE 7764",
	description: "ACOUSTIC PROPAGATION",
	teachers: [],
	id: 189
},
{
	name: "AE 7772",
	description: "FUND-FRACTURE MECHANICS",
	teachers: [],
	id: 190
},
{
	name: "AE 7773",
	description: "ADV FRACTURE MECHANICS",
	teachers: [],
	id: 191
},
{
	name: "AE 7774",
	description: "FATIGUE-MATERIALS&STRUCT",
	teachers: [],
	id: 192
},
{
	name: "AE 7775",
	description: "FRACT&FATIGUE-STRUCTURES",
	teachers: [],
	id: 193
},
{
	name: "AE 7785",
	description: "INTRO ROBOTICS RESEARCH",
	teachers: [],
	id: 194
},
{
	name: "AE 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 195
},
{
	name: "AE 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 196
},
{
	name: "AE 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 197
},
{
	name: "AE 8001",
	description: "DESIGN SEMINAR",
	teachers: [],
	id: 198
},
{
	name: "AE 8750",
	description: "ROBOTICS RESEARCH FND I",
	teachers: [],
	id: 199
},
{
	name: "AE 8751",
	description: "ROBOTICS RESEARCH FND II",
	teachers: [],
	id: 200
},
{
	name: "AE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 201
},
{
	name: "AE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 202
},
{
	name: "AE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 203
},
{
	name: "AE 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 204
},
{
	name: "AE 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 205
},
{
	name: "AE 8883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 206
},
{
	name: "AE 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 207
},
{
	name: "AE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 208
},
{
	name: "AE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 209
},
{
	name: "AE 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 210
},
{
	name: "AE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 211
},
{
	name: "AE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 212
},
{
	name: "AE 8999",
	description: "PREP-DOCTORAL DISSERTA'N",
	teachers: [],
	id: 213
},
{
	name: "AE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 214
},
{
	name: "APPH 1040",
	description: "SCI FOUNDATION OF HEALTH",
	teachers: [],
	id: 215
},
{
	name: "APPH 1050",
	description: "SCI OF PHYS ACT & HEALTH",
	teachers: [],
	id: 216
},
{
	name: "APPH 2500",
	description: "INTRO TO SPORT SCIENCE",
	teachers: [],
	id: 217
},
{
	name: "APPH 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 218
},
{
	name: "APPH 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 219
},
{
	name: "APPH 3000",
	description: "SURVEY OF MEDICINE",
	teachers: [],
	id: 220
},
{
	name: "APPH 3300",
	description: "HEALTH PROMOTION",
	teachers: [],
	id: 221
},
{
	name: "APPH 3500",
	description: "NUTRITION AND HEALTH",
	teachers: [],
	id: 222
},
{
	name: "APPH 3751",
	description: "ANATOMY & PHYSIOLOGY",
	teachers: [],
	id: 223
},
{
	name: "APPH 3753",
	description: "ANATOMY",
	teachers: [],
	id: 224
},
{
	name: "APPH 3754",
	description: "ANATOMY LAB",
	teachers: [],
	id: 225
},
{
	name: "APPH 3755",
	description: "HUMAN PHYSIOLOGY",
	teachers: [],
	id: 226
},
{
	name: "APPH 3756",
	description: "PHYSIOLOGY LAB",
	teachers: [],
	id: 227
},
{
	name: "APPH 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 228
},
{
	name: "APPH 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 229
},
{
	name: "APPH 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 230
},
{
	name: "APPH 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 231
},
{
	name: "APPH 3831",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 232
},
{
	name: "APPH 3832",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 233
},
{
	name: "APPH 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 234
},
{
	name: "APPH 3834",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 235
},
{
	name: "APPH 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 236
},
{
	name: "APPH 3902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 237
},
{
	name: "APPH 3903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 238
},
{
	name: "APPH 3904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 239
},
{
	name: "APPH 4100",
	description: "EXERCISE PHYSIOLOGY",
	teachers: [],
	id: 240
},
{
	name: "APPH 4200",
	description: "KINESIOLOGY",
	teachers: [],
	id: 241
},
{
	name: "APPH 4400",
	description: "HUMAN NEUROANATOMY",
	teachers: [],
	id: 242
},
{
	name: "APPH 4600",
	description: "MUSCLE STRUCT&PLASTICITY",
	teachers: [],
	id: 243
},
{
	name: "APPH 4651",
	description: "HUMAN ANATOMY",
	teachers: [],
	id: 244
},
{
	name: "APPH 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 245
},
{
	name: "APPH 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 246
},
{
	name: "APPH 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 247
},
{
	name: "APPH 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 248
},
{
	name: "APPH 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 249
},
{
	name: "APPH 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 250
},
{
	name: "APPH 4831",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 251
},
{
	name: "APPH 4832",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 252
},
{
	name: "APPH 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 253
},
{
	name: "APPH 4834",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 254
},
{
	name: "APPH 6202",
	description: "CLINICAL GAIT ANALYSIS",
	teachers: [],
	id: 255
},
{
	name: "APPH 6203",
	description: "BIOMECH & KINES IN P&O",
	teachers: [],
	id: 256
},
{
	name: "APPH 6209",
	description: "CLINICAL PATHOLOGY",
	teachers: [],
	id: 257
},
{
	name: "APPH 6211",
	description: "SYSTEMS PHYSIOLOGY I",
	teachers: [],
	id: 258
},
{
	name: "APPH 6212",
	description: "SYSTEMS PHYSIOLOGY II",
	teachers: [],
	id: 259
},
{
	name: "APPH 6213",
	description: "SYSTEMS PHYSIOLOGY III",
	teachers: [],
	id: 260
},
{
	name: "APPH 6214",
	description: "LAB ROTATIONS IN P&O",
	teachers: [],
	id: 261
},
{
	name: "APPH 6215",
	description: "RCR IN P&O",
	teachers: [],
	id: 262
},
{
	name: "APPH 6216",
	description: "REHABILITATION RESEARCH",
	teachers: [],
	id: 263
},
{
	name: "APPH 6223",
	description: "CAD/CAM-PROSTH/ORTH LAB",
	teachers: [],
	id: 264
},
{
	name: "APPH 6225",
	description: "BIOSTATISTICS",
	teachers: [],
	id: 265
},
{
	name: "APPH 6230",
	description: "EXERCISE METABOLISM",
	teachers: [],
	id: 266
},
{
	name: "APPH 6231",
	description: "HUMAN MOTOR CONTROL",
	teachers: [],
	id: 267
},
{
	name: "APPH 6232",
	description: "LOCOMOTION NEUROMECHANIC",
	teachers: [],
	id: 268
},
{
	name: "APPH 6233",
	description: "AGING MOVEMENT CONTROL",
	teachers: [],
	id: 269
},
{
	name: "APPH 6234",
	description: "PHYSICAL ACT-HUMAN BEHAV",
	teachers: [],
	id: 270
},
{
	name: "APPH 6235",
	description: "MECHANICS OF MOVEMENT",
	teachers: [],
	id: 271
},
{
	name: "APPH 6236",
	description: "NEUROMUSCULAR PHYSIOLOGY",
	teachers: [],
	id: 272
},
{
	name: "APPH 6237",
	description: "HUMAN NEUROIMAGING",
	teachers: [],
	id: 273
},
{
	name: "APPH 6238",
	description: "ION CHANNEL STRUCTURE",
	teachers: [],
	id: 274
},
{
	name: "APPH 6239",
	description: "MOVEMENT DISORDERS",
	teachers: [],
	id: 275
},
{
	name: "APPH 6400",
	description: "HUMAN NEUROANATOMY",
	teachers: [],
	id: 276
},
{
	name: "APPH 6500",
	description: "CLASSICS IN NEUROSCIENCE",
	teachers: [],
	id: 277
},
{
	name: "APPH 6600",
	description: "MUSCLE STRUCT & PLASTICITY",
	teachers: [],
	id: 278
},
{
	name: "APPH 6651",
	description: "HUMAN ANATOMY",
	teachers: [],
	id: 279
},
{
	name: "APPH 6746",
	description: "REHAB ENGINEERING",
	teachers: [],
	id: 280
},
{
	name: "APPH 6895",
	description: "LOWER LIMB ORTHOTICS I",
	teachers: [],
	id: 281
},
{
	name: "APPH 6896",
	description: "LOWER LIMB ORTHOTICS II",
	teachers: [],
	id: 282
},
{
	name: "APPH 6971",
	description: "INTRO TO P&O PROCESSES",
	teachers: [],
	id: 283
},
{
	name: "APPH 6975",
	description: "INTRO TO PROSTHETICS",
	teachers: [],
	id: 284
},
{
	name: "APPH 6981",
	description: "UPPER LIMB PROSTHETICS",
	teachers: [],
	id: 285
},
{
	name: "APPH 6982",
	description: "SPINAL ORTHOTICS",
	teachers: [],
	id: 286
},
{
	name: "APPH 6983",
	description: "UPPER LIMB ORTHOTICS",
	teachers: [],
	id: 287
},
{
	name: "APPH 6984",
	description: "TRANSTIBIAL PROSTHETICS",
	teachers: [],
	id: 288
},
{
	name: "APPH 6985",
	description: "TRANSFEMORAL PROSTHETICS",
	teachers: [],
	id: 289
},
{
	name: "APPH 6997",
	description: "ASSISTIVE TECHNOLOGY",
	teachers: [],
	id: 290
},
{
	name: "APPH 6999",
	description: "CLINICAL PRACTICUM",
	teachers: [],
	id: 291
},
{
	name: "APPH 8000",
	description: "SEMINAR",
	teachers: [],
	id: 292
},
{
	name: "APPH 8009",
	description: "RESEARCH SEMINAR I",
	teachers: [],
	id: 293
},
{
	name: "APPH 8010",
	description: "RESEARCH SEMINAR II",
	teachers: [],
	id: 294
},
{
	name: "APPH 8012",
	description: "RESEARCH SEMINAR III",
	teachers: [],
	id: 295
},
{
	name: "APPH 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 296
},
{
	name: "APPH 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 297
},
{
	name: "APPH 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 298
},
{
	name: "APPH 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 299
},
{
	name: "APPH 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 300
},
{
	name: "APPH 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 301
},
{
	name: "APPH 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 302
},
{
	name: "APPH 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 303
},
{
	name: "APPH 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 304
},
{
	name: "APPH 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 305
},
{
	name: "APPH 8904",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 306
},
{
	name: "APPH 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 307
},
{
	name: "APPH 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 308
},
{
	name: "APPH 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 309
},
{
	name: "ARBC 1001",
	description: "ELEMENTARY ARABIC I",
	teachers: [],
	id: 310
},
{
	name: "ARBC 1002",
	description: "ELEMENTARY ARABIC II",
	teachers: [],
	id: 311
},
{
	name: "ARBC 10X1",
	description: "TRANS ARABIC ELEMENTARY I",
	teachers: [],
	id: 312
},
{
	name: "ARBC 10X2",
	description: "TRANS ARABIC ELEMENTARY II",
	teachers: [],
	id: 313
},
{
	name: "ARBC 1501",
	description: "UNDERSTAND ARAB CULTURE",
	teachers: [],
	id: 314
},
{
	name: "ARBC 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 315
},
{
	name: "ARBC 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 316
},
{
	name: "ARBC 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 317
},
{
	name: "ARBC 1XXX",
	description: "ARABIC ELECTIVE",
	teachers: [],
	id: 318
},
{
	name: "ARBC 2001",
	description: "INTERMEDIATE ARABIC I",
	teachers: [],
	id: 319
},
{
	name: "ARBC 2002",
	description: "INTERMEDIATE ARABIC II",
	teachers: [],
	id: 320
},
{
	name: "ARBC 2301",
	description: "ARTS SCI TECH THRU HIST",
	teachers: [],
	id: 321
},
{
	name: "ARBC 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 322
},
{
	name: "ARBC 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 323
},
{
	name: "ARBC 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 324
},
{
	name: "ARBC 2823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 325
},
{
	name: "ARBC 2833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 326
},
{
	name: "ARBC 2XXX",
	description: "ARABIC ELECTIVE",
	teachers: [],
	id: 327
},
{
	name: "ARBC 3001",
	description: "ADVANCED ARABIC I",
	teachers: [],
	id: 328
},
{
	name: "ARBC 3002",
	description: "ADVANCED ARABIC II",
	teachers: [],
	id: 329
},
{
	name: "ARBC 3501",
	description: "MEN-WOMEN IN ISLAM",
	teachers: [],
	id: 330
},
{
	name: "ARBC 3691",
	description: "INTENSIVE ADVANCED ARBC",
	teachers: [],
	id: 331
},
{
	name: "ARBC 3692",
	description: "ARABIC BUSINESS & TECH I",
	teachers: [],
	id: 332
},
{
	name: "ARBC 3693",
	description: "ARABIC BUSINESS &TECH II",
	teachers: [],
	id: 333
},
{
	name: "ARBC 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 334
},
{
	name: "ARBC 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 335
},
{
	name: "ARBC 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 336
},
{
	name: "ARBC 3XXX",
	description: "ARABIC ELECTIVE",
	teachers: [],
	id: 337
},
{
	name: "ARBC 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 338
},
{
	name: "ARBC 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 339
},
{
	name: "ARBC 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 340
},
{
	name: "ARBC 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 341
},
{
	name: "ARBC 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 342
},
{
	name: "ARBC 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 343
},
{
	name: "ARBC 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 344
},
{
	name: "ARBC 4XXX",
	description: "ARABIC ELECTIVE",
	teachers: [],
	id: 345
},
{
	name: "ARCH 1XXX",
	description: "ARCHITECTURE ELECTIVE",
	teachers: [],
	id: 346
},
{
	name: "ARCH 2011",
	description: "ARCH DESIGN STUDIO I",
	teachers: [],
	id: 347
},
{
	name: "ARCH 2012",
	description: "ARCH DESIGN STUDIO II",
	teachers: [],
	id: 348
},
{
	name: "ARCH 2111",
	description: "HISTORY OF ARCH I",
	teachers: [],
	id: 349
},
{
	name: "ARCH 2112",
	description: "HISTORY OF ARCH II",
	teachers: [],
	id: 350
},
{
	name: "ARCH 2115",
	description: "MODERN ARCH & ART",
	teachers: [],
	id: 351
},
{
	name: "ARCH 2211",
	description: "CONSTRUCTION TECH I",
	teachers: [],
	id: 352
},
{
	name: "ARCH 2472",
	description: "ARCH MODELING & MEDIA 2",
	teachers: [],
	id: 353
},
{
	name: "ARCH 2474",
	description: "ARCH MODELING & MEDIA 3",
	teachers: [],
	id: 354
},
{
	name: "ARCH 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 355
},
{
	name: "ARCH 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 356
},
{
	name: "ARCH 2XXX",
	description: "ARCHITECTURE ELECTIVE",
	teachers: [],
	id: 357
},
{
	name: "ARCH 3011",
	description: "ARCH DESIGN STUDIO III",
	teachers: [],
	id: 358
},
{
	name: "ARCH 3012",
	description: "ARCH DESIGN STUDIO IV",
	teachers: [],
	id: 359
},
{
	name: "ARCH 3135",
	description: "CITY LITERACY",
	teachers: [],
	id: 360
},
{
	name: "ARCH 3231",
	description: "ENVIRONMENTAL SYSTEMS I",
	teachers: [],
	id: 361
},
{
	name: "ARCH 3241",
	description: "FUND OF STRUCTURES",
	teachers: [],
	id: 362
},
{
	name: "ARCH 3XXX",
	description: "ARCHITECTURE ELECTIVE",
	teachers: [],
	id: 363
},
{
	name: "ARCH 4011",
	description: "ARCH DESIGN STUDIO V",
	teachers: [],
	id: 364
},
{
	name: "ARCH 4012",
	description: "ARCH DESIGN STUDIO VI",
	teachers: [],
	id: 365
},
{
	name: "ARCH 4107",
	description: "INTRO TO HISTORIC PRESER",
	teachers: [],
	id: 366
},
{
	name: "ARCH 4109",
	description: "ARCH AND MINIMALISM",
	teachers: [],
	id: 367
},
{
	name: "ARCH 4110",
	description: "PUBLIC SPACE",
	teachers: [],
	id: 368
},
{
	name: "ARCH 4112",
	description: "ARCH IN GEORGIA",
	teachers: [],
	id: 369
},
{
	name: "ARCH 4113",
	description: "RENAISSANCE&MANNER ARCH",
	teachers: [],
	id: 370
},
{
	name: "ARCH 4114",
	description: "MEDIEVAL ARCHITECTURE",
	teachers: [],
	id: 371
},
{
	name: "ARCH 4115",
	description: "INTRO CLASSICAL DESIGN",
	teachers: [],
	id: 372
},
{
	name: "ARCH 4117",
	description: "ARTS AND CRAFTS ARCH",
	teachers: [],
	id: 373
},
{
	name: "ARCH 4118",
	description: "AMERICAN ACADEMIC ARCH",
	teachers: [],
	id: 374
},
{
	name: "ARCH 4119",
	description: "ARCH-FRANK LLOYD WRIGHT",
	teachers: [],
	id: 375
},
{
	name: "ARCH 4120",
	description: "ATLANTA ARCHITECTURE",
	teachers: [],
	id: 376
},
{
	name: "ARCH 4123",
	description: "EUROPEAN MODERNISM",
	teachers: [],
	id: 377
},
{
	name: "ARCH 4124",
	description: "HIST OF ARCH IN THE U.S.",
	teachers: [],
	id: 378
},
{
	name: "ARCH 4125",
	description: "FRENCH ARCH",
	teachers: [],
	id: 379
},
{
	name: "ARCH 4126",
	description: "PARIS URBAN HISTORY",
	teachers: [],
	id: 380
},
{
	name: "ARCH 4127",
	description: "INTRO TO ART & ARCH IN ITALY",
	teachers: [],
	id: 381
},
{
	name: "ARCH 4128",
	description: "BARCELONA ARCHITECTURE",
	teachers: [],
	id: 382
},
{
	name: "ARCH 4129",
	description: "FORM AND NARRATIVE",
	teachers: [],
	id: 383
},
{
	name: "ARCH 4133",
	description: "ARCH& DISCOURSE EVERYDAY",
	teachers: [],
	id: 384
},
{
	name: "ARCH 4137",
	description: "POSTWAR ARCH & URBANISM",
	teachers: [],
	id: 385
},
{
	name: "ARCH 4140",
	description: "MODERN ARCH THEORY",
	teachers: [],
	id: 386
},
{
	name: "ARCH 4142",
	description: "DWELLING ENV BEHAV DES",
	teachers: [],
	id: 387
},
{
	name: "ARCH 4143",
	description: "MUSEUMS HIST THEO DES",
	teachers: [],
	id: 388
},
{
	name: "ARCH 4151",
	description: "HISTORY OF URBAN FORM",
	teachers: [],
	id: 389
},
{
	name: "ARCH 4220",
	description: "CONSTRUCTION TECH II",
	teachers: [],
	id: 390
},
{
	name: "ARCH 4225",
	description: "REINVESTIGATING DETAILS",
	teachers: [],
	id: 391
},
{
	name: "ARCH 4227",
	description: "ARCHITECTURE & ECOLOGY",
	teachers: [],
	id: 392
},
{
	name: "ARCH 4231",
	description: "ENVIRONMENTAL SYSTEMS II",
	teachers: [],
	id: 393
},
{
	name: "ARCH 4251",
	description: "STRUCTURES I",
	teachers: [],
	id: 394
},
{
	name: "ARCH 4252",
	description: "STRUCTURES II",
	teachers: [],
	id: 395
},
{
	name: "ARCH 4253",
	description: "ADV STRUCTURES SEMINAR",
	teachers: [],
	id: 396
},
{
	name: "ARCH 4303",
	description: "PROGRAMMING & BLDG EVAL",
	teachers: [],
	id: 397
},
{
	name: "ARCH 4305",
	description: "CROSS-CULTURAL PRACTICE",
	teachers: [],
	id: 398
},
{
	name: "ARCH 4315",
	description: "PROFESSIONAL PRACTICE",
	teachers: [],
	id: 399
},
{
	name: "ARCH 4316",
	description: "TRADITIONS OF PRACTICE",
	teachers: [],
	id: 400
},
{
	name: "ARCH 4330",
	description: "CLIENTS AND USERS",
	teachers: [],
	id: 401
},
{
	name: "ARCH 4334",
	description: "HOUSING AND CULTURE",
	teachers: [],
	id: 402
},
{
	name: "ARCH 4335",
	description: "SOCIAL PRACTICE OF ARCH",
	teachers: [],
	id: 403
},
{
	name: "ARCH 4411",
	description: "INTRO TO VISUAL ARTS",
	teachers: [],
	id: 404
},
{
	name: "ARCH 4412",
	description: "LIFE DRAWING",
	teachers: [],
	id: 405
},
{
	name: "ARCH 4413",
	description: "COLLAGE MAKING",
	teachers: [],
	id: 406
},
{
	name: "ARCH 4414",
	description: "REPRESENT IN WATERCOLOR",
	teachers: [],
	id: 407
},
{
	name: "ARCH 4415",
	description: "PHOTOGRAPHY I",
	teachers: [],
	id: 408
},
{
	name: "ARCH 4416",
	description: "PHOTOGRAPHY II",
	teachers: [],
	id: 409
},
{
	name: "ARCH 4417",
	description: "FURNISHING BUILDINGS",
	teachers: [],
	id: 410
},
{
	name: "ARCH 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 411
},
{
	name: "ARCH 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 412
},
{
	name: "ARCH 4770",
	description: "ENVIRONMENTAL DESIGN",
	teachers: [],
	id: 413
},
{
	name: "ARCH 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 414
},
{
	name: "ARCH 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 415
},
{
	name: "ARCH 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 416
},
{
	name: "ARCH 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 417
},
{
	name: "ARCH 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 418
},
{
	name: "ARCH 4811",
	description: "SPEC TOPIC-ARCH DESIGN",
	teachers: [],
	id: 419
},
{
	name: "ARCH 4812",
	description: "SPEC TOPIC-ARCH DESIGN",
	teachers: [],
	id: 420
},
{
	name: "ARCH 4813",
	description: "SPEC TOPIC-ARCH DESIGN",
	teachers: [],
	id: 421
},
{
	name: "ARCH 4814",
	description: "SPEC TOPIC-ARCH DESIGN",
	teachers: [],
	id: 422
},
{
	name: "ARCH 4815",
	description: "SPEC TOPIC-ARCH DESIGN",
	teachers: [],
	id: 423
},
{
	name: "ARCH 4821",
	description: "SPEC TOP-HIST,THEOR&CRIT",
	teachers: [],
	id: 424
},
{
	name: "ARCH 4822",
	description: "SPEC TOP-HIST,THEOR&CRIT",
	teachers: [],
	id: 425
},
{
	name: "ARCH 4823",
	description: "SPEC TOP-HIST,THEOR,CRIT",
	teachers: [],
	id: 426
},
{
	name: "ARCH 4831",
	description: "SPECIAL TOPICS-ARCH TECH",
	teachers: [],
	id: 427
},
{
	name: "ARCH 4832",
	description: "SPECIAL TOPICS-ARCH TECH",
	teachers: [],
	id: 428
},
{
	name: "ARCH 4833",
	description: "SPECIAL TOPICS-ARCH TECH",
	teachers: [],
	id: 429
},
{
	name: "ARCH 4841",
	description: "SPEC TOPIC: PRACTICE",
	teachers: [],
	id: 430
},
{
	name: "ARCH 4842",
	description: "SPEC TOPIC: PRACTICE",
	teachers: [],
	id: 431
},
{
	name: "ARCH 4843",
	description: "SPEC TOPIC: PRACTICE",
	teachers: [],
	id: 432
},
{
	name: "ARCH 4851",
	description: "SPEC TOP-VIS ARTS&COMPUT",
	teachers: [],
	id: 433
},
{
	name: "ARCH 4852",
	description: "SPEC TOP-VIS ARTS&COMPUT",
	teachers: [],
	id: 434
},
{
	name: "ARCH 4853",
	description: "SPEC TOP-VIS ARTS&COMPUT",
	teachers: [],
	id: 435
},
{
	name: "ARCH 4863",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 436
},
{
	name: "ARCH 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 437
},
{
	name: "ARCH 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 438
},
{
	name: "ARCH 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 439
},
{
	name: "ARCH 4904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 440
},
{
	name: "ARCH 4905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 441
},
{
	name: "ARCH 4911",
	description: "SPEC PROB: ARCH DESIGN",
	teachers: [],
	id: 442
},
{
	name: "ARCH 4912",
	description: "SPEC PROB: ARCH DESIGN",
	teachers: [],
	id: 443
},
{
	name: "ARCH 4913",
	description: "SPEC PROB: ARCH DESIGN",
	teachers: [],
	id: 444
},
{
	name: "ARCH 4914",
	description: "SPEC PROB: ARCH DESIGN",
	teachers: [],
	id: 445
},
{
	name: "ARCH 4915",
	description: "SPEC PROB: ARCH DESIGN",
	teachers: [],
	id: 446
},
{
	name: "ARCH 4921",
	description: "SPEC PROB:HIST,THEO,CRIT",
	teachers: [],
	id: 447
},
{
	name: "ARCH 4922",
	description: "SPEC PROB:HIST,THEO,CRIT",
	teachers: [],
	id: 448
},
{
	name: "ARCH 4923",
	description: "SPEC PROB:HIST,THEO,CRIT",
	teachers: [],
	id: 449
},
{
	name: "ARCH 4931",
	description: "SPEC PROB; ARCH TECH",
	teachers: [],
	id: 450
},
{
	name: "ARCH 4932",
	description: "SPEC PROB: ARCH TECH",
	teachers: [],
	id: 451
},
{
	name: "ARCH 4933",
	description: "SPEC PROB: ARCH TECH",
	teachers: [],
	id: 452
},
{
	name: "ARCH 4941",
	description: "SPECIAL PROB: PRACTICE",
	teachers: [],
	id: 453
},
{
	name: "ARCH 4942",
	description: "SPECIAL PROB: PRACTICE",
	teachers: [],
	id: 454
},
{
	name: "ARCH 4943",
	description: "SPECIAL PROB: PRACTICE",
	teachers: [],
	id: 455
},
{
	name: "ARCH 4951",
	description: "SPEC PROB:VIS ART&COMPUT",
	teachers: [],
	id: 456
},
{
	name: "ARCH 4952",
	description: "SPEC PROB:VIS ART&COMPUT",
	teachers: [],
	id: 457
},
{
	name: "ARCH 4953",
	description: "SPEC PROB:VIS ART&COMPUT",
	teachers: [],
	id: 458
},
{
	name: "ARCH 4XXX",
	description: "ARCHITECTURE ELECTIVE",
	teachers: [],
	id: 459
},
{
	name: "ARCH 6024",
	description: "ARCH CORE I STUDIO",
	teachers: [],
	id: 460
},
{
	name: "ARCH 6026",
	description: "ARCH CORE II STUDIO",
	teachers: [],
	id: 461
},
{
	name: "ARCH 6027",
	description: "ARCH CORE III STUDIO",
	teachers: [],
	id: 462
},
{
	name: "ARCH 6051",
	description: "ARCH OPTIONS STUDIO I",
	teachers: [],
	id: 463
},
{
	name: "ARCH 6052",
	description: "ARCH OPTIONS STUDIO II",
	teachers: [],
	id: 464
},
{
	name: "ARCH 6069",
	description: "ADVANCED ARCH DESIGN I",
	teachers: [],
	id: 465
},
{
	name: "ARCH 6070",
	description: "ADVANCED ARCH DESIGN II",
	teachers: [],
	id: 466
},
{
	name: "ARCH 6071",
	description: "ARCH DES & RES STUDIO I",
	teachers: [],
	id: 467
},
{
	name: "ARCH 6072",
	description: "ARCH DES & RES STUDIO 2",
	teachers: [],
	id: 468
},
{
	name: "ARCH 6105",
	description: "ARCH HISTORY I",
	teachers: [],
	id: 469
},
{
	name: "ARCH 6106",
	description: "ARCH HISTORY II",
	teachers: [],
	id: 470
},
{
	name: "ARCH 6107",
	description: "INTRO TO HISTORIC PRESER",
	teachers: [],
	id: 471
},
{
	name: "ARCH 6109",
	description: "ARCH AND MINIMALISM",
	teachers: [],
	id: 472
},
{
	name: "ARCH 6110",
	description: "PUBLIC SPACE",
	teachers: [],
	id: 473
},
{
	name: "ARCH 6112",
	description: "ISLAMIC ARCH & URBANISM",
	teachers: [],
	id: 474
},
{
	name: "ARCH 6113",
	description: "HIST RENAISS&MANNER ARCH",
	teachers: [],
	id: 475
},
{
	name: "ARCH 6114",
	description: "ARCH&DISCOURSE EVERYDAY",
	teachers: [],
	id: 476
},
{
	name: "ARCH 6115",
	description: "INTRO CLASSICAL DESIGN",
	teachers: [],
	id: 477
},
{
	name: "ARCH 6117",
	description: "ARCH-ARTS&CRAFTS MOVEMNT",
	teachers: [],
	id: 478
},
{
	name: "ARCH 6119",
	description: "FL WRIGHT& HIS INFLUENCE",
	teachers: [],
	id: 479
},
{
	name: "ARCH 6120",
	description: "HISTORY OF ATLANTA ARCH",
	teachers: [],
	id: 480
},
{
	name: "ARCH 6127",
	description: "INTRO-ART& ARCH IN ITALY",
	teachers: [],
	id: 481
},
{
	name: "ARCH 6129",
	description: "FORM AND NARRATIVE",
	teachers: [],
	id: 482
},
{
	name: "ARCH 6135",
	description: "ARCH REPRESENTATION",
	teachers: [],
	id: 483
},
{
	name: "ARCH 6136",
	description: "ARCH AND IDEOLOGY",
	teachers: [],
	id: 484
},
{
	name: "ARCH 6137",
	description: "POSTWAR ARCH & URBANISM",
	teachers: [],
	id: 485
},
{
	name: "ARCH 6142",
	description: "DWELLING ENV BEHAV DES",
	teachers: [],
	id: 486
},
{
	name: "ARCH 6143",
	description: "MUSEUMS HIST THRY DESIGN",
	teachers: [],
	id: 487
},
{
	name: "ARCH 6151",
	description: "THEORIES OF URBAN DESIGN",
	teachers: [],
	id: 488
},
{
	name: "ARCH 6152",
	description: "LANDSCAPE ARCHITECTURE",
	teachers: [],
	id: 489
},
{
	name: "ARCH 6153",
	description: "HIST&THEORY-MODERN CITY",
	teachers: [],
	id: 490
},
{
	name: "ARCH 6154",
	description: "INTRO TO URBAN DESIGN",
	teachers: [],
	id: 491
},
{
	name: "ARCH 6155",
	description: "CONTEMP ARCH IN EUROPE",
	teachers: [],
	id: 492
},
{
	name: "ARCH 6160",
	description: "RACE AND SPACE",
	teachers: [],
	id: 493
},
{
	name: "ARCH 6171",
	description: "DESIGN INTENTION IN ARCH",
	teachers: [],
	id: 494
},
{
	name: "ARCH 6206",
	description: "BUILDING ASSEMBLIES",
	teachers: [],
	id: 495
},
{
	name: "ARCH 6209",
	description: "BUILDING ENCLOSURE",
	teachers: [],
	id: 496
},
{
	name: "ARCH 6210",
	description: "ARCHITECTONICS",
	teachers: [],
	id: 497
},
{
	name: "ARCH 6215",
	description: "CONTEMP ARCH&CONSTR TECH",
	teachers: [],
	id: 498
},
{
	name: "ARCH 6216",
	description: "ECO-TECTONICS",
	teachers: [],
	id: 499
},
{
	name: "ARCH 6218",
	description: "MATERIAL LOGIC OF ARCH",
	teachers: [],
	id: 500
},
{
	name: "ARCH 6225",
	description: "REINVESTIGATING DETAILS",
	teachers: [],
	id: 501
},
{
	name: "ARCH 6226",
	description: "GREEN CONSTRUCTION",
	teachers: [],
	id: 502
},
{
	name: "ARCH 6227",
	description: "ARCHITECTURE + ECOLOGY",
	teachers: [],
	id: 503
},
{
	name: "ARCH 6228",
	description: "ANALYT INVEST URB DESIGN",
	teachers: [],
	id: 504
},
{
	name: "ARCH 6229",
	description: "CONSTRUCTION TECH I",
	teachers: [],
	id: 505
},
{
	name: "ARCH 6230",
	description: "CONSTRUCTION TECH 2",
	teachers: [],
	id: 506
},
{
	name: "ARCH 6241",
	description: "BLDG SIMULA DESIGN PRACT",
	teachers: [],
	id: 507
},
{
	name: "ARCH 6242",
	description: "BLDG PHYSICS MODELING",
	teachers: [],
	id: 508
},
{
	name: "ARCH 6243",
	description: "EVIDENCE-BASED DESIGN",
	teachers: [],
	id: 509
},
{
	name: "ARCH 6251",
	description: "BUILDING STRUCTURES I",
	teachers: [],
	id: 510
},
{
	name: "ARCH 6252",
	description: "BUILDING STRUCTURES II",
	teachers: [],
	id: 511
},
{
	name: "ARCH 6268",
	description: "ADV ARCH, CULT & BEHAV",
	teachers: [],
	id: 512
},
{
	name: "ARCH 6271",
	description: "HEALTHCARE DES OF FUTURE",
	teachers: [],
	id: 513
},
{
	name: "ARCH 6303",
	description: "URBAN DESIGN POLICY",
	teachers: [],
	id: 514
},
{
	name: "ARCH 6305",
	description: "CROSS-CULTURAL PRACTICE",
	teachers: [],
	id: 515
},
{
	name: "ARCH 6312",
	description: "ECOLOGICAL PRACTICE",
	teachers: [],
	id: 516
},
{
	name: "ARCH 6313",
	description: "TRADITIONS ARCH PRACTICE",
	teachers: [],
	id: 517
},
{
	name: "ARCH 6315",
	description: "PRACTICE OF ARCH I",
	teachers: [],
	id: 518
},
{
	name: "ARCH 6316",
	description: "PRACTICE OF ARCH 2",
	teachers: [],
	id: 519
},
{
	name: "ARCH 6350",
	description: "THEORY OF ARCHITECTURE I",
	teachers: [],
	id: 520
},
{
	name: "ARCH 6352",
	description: "THEORY OF ARCHITECTURE 2",
	teachers: [],
	id: 521
},
{
	name: "ARCH 6404",
	description: "ELECTRONIC MEDIA",
	teachers: [],
	id: 522
},
{
	name: "ARCH 6412",
	description: "DWELLING ENV BEHAV DES",
	teachers: [],
	id: 523
},
{
	name: "ARCH 6417",
	description: "FURNISHING BUILDINGS",
	teachers: [],
	id: 524
},
{
	name: "ARCH 6420",
	description: "DESIGN COMPUTING",
	teachers: [],
	id: 525
},
{
	name: "ARCH 6426",
	description: "3D MODELING",
	teachers: [],
	id: 526
},
{
	name: "ARCH 6427",
	description: "ADV MODELING & ANIMATION",
	teachers: [],
	id: 527
},
{
	name: "ARCH 6428",
	description: "FORMAL SYS-DGN,ART&ARCH",
	teachers: [],
	id: 528
},
{
	name: "ARCH 6447",
	description: "URBAN ECOLOGICAL DESIGN",
	teachers: [],
	id: 529
},
{
	name: "ARCH 6470",
	description: "ARCH MODELING & MEDIA I",
	teachers: [],
	id: 530
},
{
	name: "ARCH 6472",
	description: "ARCH MODELING & MEDIA 2",
	teachers: [],
	id: 531
},
{
	name: "ARCH 6474",
	description: "ARCH MODELING & MEDIA 3",
	teachers: [],
	id: 532
},
{
	name: "ARCH 6501",
	description: "ANALOG-DIGITAL DES COMP",
	teachers: [],
	id: 533
},
{
	name: "ARCH 6502",
	description: "DESIGN SCRIPTING",
	teachers: [],
	id: 534
},
{
	name: "ARCH 6503",
	description: "BIM APPLICATIONS",
	teachers: [],
	id: 535
},
{
	name: "ARCH 6504",
	description: "FABRICATION WORKSHOP",
	teachers: [],
	id: 536
},
{
	name: "ARCH 6505",
	description: "GEOMETRIC CONSTRUCTS",
	teachers: [],
	id: 537
},
{
	name: "ARCH 6506",
	description: "MATERIALS/FABRICATIONS",
	teachers: [],
	id: 538
},
{
	name: "ARCH 6507",
	description: "PARAMETRIC DESIGN",
	teachers: [],
	id: 539
},
{
	name: "ARCH 6508",
	description: "SHAPE GRAMMARS",
	teachers: [],
	id: 540
},
{
	name: "ARCH 6509",
	description: "COMP CREATIVITY DES COGN",
	teachers: [],
	id: 541
},
{
	name: "ARCH 6531",
	description: "ENVIRONMENTAL SYSTEMS I",
	teachers: [],
	id: 542
},
{
	name: "ARCH 6532",
	description: "ENVIRONMENTAL SYSTEMS II",
	teachers: [],
	id: 543
},
{
	name: "ARCH 6731",
	description: "ZERO ENERGY HOUSE",
	teachers: [],
	id: 544
},
{
	name: "ARCH 6XXX",
	description: "ARCHITECTURE ELECTIVE",
	teachers: [],
	id: 545
},
{
	name: "ARCH 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 546
},
{
	name: "ARCH 7042",
	description: "URBAN DESIGN WORKSHOP",
	teachers: [],
	id: 547
},
{
	name: "ARCH 7043",
	description: "URBAN DESIGN WORKSHOP",
	teachers: [],
	id: 548
},
{
	name: "ARCH 7044",
	description: "URBAN DESIGN WORKSHOP",
	teachers: [],
	id: 549
},
{
	name: "ARCH 7045",
	description: "URBAN DESIGN WORKSHOP",
	teachers: [],
	id: 550
},
{
	name: "ARCH 7060",
	description: "CRITICAL POSITIONS",
	teachers: [],
	id: 551
},
{
	name: "ARCH 7252",
	description: "COMPUTA BLDG SIMULATION",
	teachers: [],
	id: 552
},
{
	name: "ARCH 7471",
	description: "COGN FUNCT VISUAL DESIGN",
	teachers: [],
	id: 553
},
{
	name: "ARCH 8100",
	description: "INTRO TO ARCH RESEARCH 1",
	teachers: [],
	id: 554
},
{
	name: "ARCH 8101",
	description: "INTRO TO ARCH RESEARCH 2",
	teachers: [],
	id: 555
},
{
	name: "ARCH 8102",
	description: "INTRO TO ARCH RESEARCH 3",
	teachers: [],
	id: 556
},
{
	name: "ARCH 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 557
},
{
	name: "ARCH 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 558
},
{
	name: "ARCH 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 559
},
{
	name: "ARCH 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 560
},
{
	name: "ARCH 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 561
},
{
	name: "ARCH 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 562
},
{
	name: "ARCH 8811",
	description: "SPEC TOP-ARCH DESIGN",
	teachers: [],
	id: 563
},
{
	name: "ARCH 8812",
	description: "SPEC TOP-ARCH DESIGN",
	teachers: [],
	id: 564
},
{
	name: "ARCH 8813",
	description: "SPEC TOP-ARCH DESIGN",
	teachers: [],
	id: 565
},
{
	name: "ARCH 8814",
	description: "SPEC TOP-ARCH DESIGN",
	teachers: [],
	id: 566
},
{
	name: "ARCH 8815",
	description: "SPEC TOP-ARCH DESIGN",
	teachers: [],
	id: 567
},
{
	name: "ARCH 8821",
	description: "SPEC TOP-HIST,THEOR&CRIT",
	teachers: [],
	id: 568
},
{
	name: "ARCH 8822",
	description: "SPEC TOP-HIST,THEOR&CRIT",
	teachers: [],
	id: 569
},
{
	name: "ARCH 8823",
	description: "SPEC TOP-HIST,THEOR,CRIT",
	teachers: [],
	id: 570
},
{
	name: "ARCH 8831",
	description: "SPEC TOP-ARCH TECH",
	teachers: [],
	id: 571
},
{
	name: "ARCH 8832",
	description: "SPEC TOP-ARCH TECH",
	teachers: [],
	id: 572
},
{
	name: "ARCH 8833",
	description: "SPEC TOP-ARCH TECH",
	teachers: [],
	id: 573
},
{
	name: "ARCH 8841",
	description: "SPEC TOP-PRACTICE",
	teachers: [],
	id: 574
},
{
	name: "ARCH 8842",
	description: "SPEC TOP-PRACTICE",
	teachers: [],
	id: 575
},
{
	name: "ARCH 8843",
	description: "SPEC TOP-PRACTICE",
	teachers: [],
	id: 576
},
{
	name: "ARCH 8851",
	description: "SPEC TOP-ARTS& COMPUTING",
	teachers: [],
	id: 577
},
{
	name: "ARCH 8852",
	description: "SPEC TOP-ARTS& COMPUTING",
	teachers: [],
	id: 578
},
{
	name: "ARCH 8853",
	description: "SPEC TOP-ARTS& COMPUTING",
	teachers: [],
	id: 579
},
{
	name: "ARCH 8863",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 580
},
{
	name: "ARCH 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 581
},
{
	name: "ARCH 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 582
},
{
	name: "ARCH 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 583
},
{
	name: "ARCH 8911",
	description: "SPEC PROB-ARCH DESIGN",
	teachers: [],
	id: 584
},
{
	name: "ARCH 8912",
	description: "SPEC PROB-ARCH DESIGN",
	teachers: [],
	id: 585
},
{
	name: "ARCH 8913",
	description: "SPEC PROB-ARCH DESIGN",
	teachers: [],
	id: 586
},
{
	name: "ARCH 8914",
	description: "SPEC PROB-ARCH DESIGN",
	teachers: [],
	id: 587
},
{
	name: "ARCH 8915",
	description: "SPEC PROB-ARCH DESIGN",
	teachers: [],
	id: 588
},
{
	name: "ARCH 8921",
	description: "SPEC PROB-HIST,THEO&CRIT",
	teachers: [],
	id: 589
},
{
	name: "ARCH 8922",
	description: "SPEC PROB-HIST,THEO&CRIT",
	teachers: [],
	id: 590
},
{
	name: "ARCH 8923",
	description: "SPEC PROB-HIST,THEO,CRIT",
	teachers: [],
	id: 591
},
{
	name: "ARCH 8924",
	description: "SPEC PROB:HIST,THEO&CRIT",
	teachers: [],
	id: 592
},
{
	name: "ARCH 8925",
	description: "SPEC PROB:HIST,THEO&CRIT",
	teachers: [],
	id: 593
},
{
	name: "ARCH 8931",
	description: "SPEC PROB-ARCH TECH",
	teachers: [],
	id: 594
},
{
	name: "ARCH 8932",
	description: "SPEC PROB-ARCH TECH",
	teachers: [],
	id: 595
},
{
	name: "ARCH 8933",
	description: "SPEC PROB-ARCH TECH",
	teachers: [],
	id: 596
},
{
	name: "ARCH 8941",
	description: "SPEC PROB-PRACTICE",
	teachers: [],
	id: 597
},
{
	name: "ARCH 8942",
	description: "SPEC PROB-PRACTICE",
	teachers: [],
	id: 598
},
{
	name: "ARCH 8943",
	description: "SPEC PROB-PRACTICE",
	teachers: [],
	id: 599
},
{
	name: "ARCH 8951",
	description: "SPEC PROB-ARTS&COMPUTING",
	teachers: [],
	id: 600
},
{
	name: "ARCH 8952",
	description: "SPEC PROB-ARTS&COMPUTING",
	teachers: [],
	id: 601
},
{
	name: "ARCH 8953",
	description: "SPEC PROB-ARTS&COMPUTING",
	teachers: [],
	id: 602
},
{
	name: "ARCH 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 603
},
{
	name: "ARCH 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 604
},
{
	name: "AS 1110",
	description: "FOUNDATIONS OF THE AF I",
	teachers: [],
	id: 605
},
{
	name: "AS 1111",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 606
},
{
	name: "AS 1120",
	description: "FOUNDATIONS OF THE AF II",
	teachers: [],
	id: 607
},
{
	name: "AS 1121",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 608
},
{
	name: "AS 2210",
	description: "US AIR & SPACE POWER I",
	teachers: [],
	id: 609
},
{
	name: "AS 2211",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 610
},
{
	name: "AS 2220",
	description: "US AIR & SPACE POWER II",
	teachers: [],
	id: 611
},
{
	name: "AS 2221",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 612
},
{
	name: "AS 3310",
	description: "LEADERSHIP STUDIES I",
	teachers: [],
	id: 613
},
{
	name: "AS 3311",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 614
},
{
	name: "AS 3320",
	description: "LEADERSHIP STUDIES II",
	teachers: [],
	id: 615
},
{
	name: "AS 3321",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 616
},
{
	name: "AS 4410",
	description: "NATIONAL SECURITY AFFAIR",
	teachers: [],
	id: 617
},
{
	name: "AS 4411",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 618
},
{
	name: "AS 4420",
	description: "PREP FOR ACTIVE DUTY",
	teachers: [],
	id: 619
},
{
	name: "AS 4421",
	description: "LEADERSHIP LABORATORY",
	teachers: [],
	id: 620
},
{
	name: "ASE 6001",
	description: "FUND MODERN SYS ENG",
	teachers: [],
	id: 621
},
{
	name: "ASE 6002",
	description: "SYSTEMS DESIGN/ANALYSIS",
	teachers: [],
	id: 622
},
{
	name: "ASE 6003",
	description: "MODELING/SIM SYS ENG",
	teachers: [],
	id: 623
},
{
	name: "ASE 6004",
	description: "LEADING SYS ENG TEAMS",
	teachers: [],
	id: 624
},
{
	name: "ASE 6005",
	description: "ADV TOPICS SE - SYSML",
	teachers: [],
	id: 625
},
{
	name: "ASE 6006",
	description: "SYSTEMS ENGINEERING LAB",
	teachers: [],
	id: 626
},
{
	name: "ASE 6101",
	description: "ANALYSIS & SYNTH-VEHICLE",
	teachers: [],
	id: 627
},
{
	name: "ASE 6102",
	description: "SYSTEM OF SYSTEMS & ARCH",
	teachers: [],
	id: 628
},
{
	name: "ASE 6103",
	description: "SYSTEM LIFECYCLE & INTEG",
	teachers: [],
	id: 629
},
{
	name: "ASE 6104",
	description: "CAPSTONE COMPLEX SYSTEMS",
	teachers: [],
	id: 630
},
{
	name: "ASE 6111",
	description: "ANALYSIS & SYNTH-SENSORS",
	teachers: [],
	id: 631
},
{
	name: "ASE 6121",
	description: "ANALYSIS & SYNTH-INFOSYS",
	teachers: [],
	id: 632
},
{
	name: "ASE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 633
},
{
	name: "BC 1XXX",
	description: "BLDG CONSTRUCTION ELECT",
	teachers: [],
	id: 634
},
{
	name: "BC 2600",
	description: "CONSTRUCTION CONTRACTING",
	teachers: [],
	id: 635
},
{
	name: "BC 2610",
	description: "CONSTRUCTION TECH I",
	teachers: [],
	id: 636
},
{
	name: "BC 2620",
	description: "CONSTRUCTION TECH II",
	teachers: [],
	id: 637
},
{
	name: "BC 2630",
	description: "CONSTRUCTION SEMINAR",
	teachers: [],
	id: 638
},
{
	name: "BC 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 639
},
{
	name: "BC 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 640
},
{
	name: "BC 2XXX",
	description: "BLDG CONSTRUCTION ELECT",
	teachers: [],
	id: 641
},
{
	name: "BC 3600",
	description: "CONSTRUCTION COST MGT",
	teachers: [],
	id: 642
},
{
	name: "BC 3610",
	description: "CONSTRUCTION LAW",
	teachers: [],
	id: 643
},
{
	name: "BC 3620",
	description: "REAL EST&CNST FIN&ACCT",
	teachers: [],
	id: 644
},
{
	name: "BC 3630",
	description: "PROJECT MANAGEMENT I",
	teachers: [],
	id: 645
},
{
	name: "BC 3640",
	description: "CONSTRUCTION MECHANICS",
	teachers: [],
	id: 646
},
{
	name: "BC 3XXX",
	description: "BLDG CONSTRUCTION ELECT",
	teachers: [],
	id: 647
},
{
	name: "BC 4050",
	description: "BUILDING INFO MODELING",
	teachers: [],
	id: 648
},
{
	name: "BC 4110",
	description: "TRENDS & POL FOR RES DEV",
	teachers: [],
	id: 649
},
{
	name: "BC 4120",
	description: "COMMUNITY DSGN & CONSTR",
	teachers: [],
	id: 650
},
{
	name: "BC 4130",
	description: "INTG DESIGN CONSTR & DEV",
	teachers: [],
	id: 651
},
{
	name: "BC 4600",
	description: "PROJECT MANAGEMENT II",
	teachers: [],
	id: 652
},
{
	name: "BC 4610",
	description: "VALUE ENGR & BLDG ECON",
	teachers: [],
	id: 653
},
{
	name: "BC 4620",
	description: "BLDG STRUCTURAL ANALYSIS",
	teachers: [],
	id: 654
},
{
	name: "BC 4630",
	description: "SENIOR CAPSTONE PROJECT",
	teachers: [],
	id: 655
},
{
	name: "BC 4640",
	description: "CONSTRUCTION MARKETING",
	teachers: [],
	id: 656
},
{
	name: "BC 4650",
	description: "LAB FOR SUSTAINABLE DSGN",
	teachers: [],
	id: 657
},
{
	name: "BC 4660",
	description: "ENTREPRENEURSHIP-CONSTRU",
	teachers: [],
	id: 658
},
{
	name: "BC 4672",
	description: "MEP SYSTEMS",
	teachers: [],
	id: 659
},
{
	name: "BC 4680",
	description: "PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 660
},
{
	name: "BC 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 661
},
{
	name: "BC 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 662
},
{
	name: "BC 4700",
	description: "CONSTRUCTION MANAGEMENT",
	teachers: [],
	id: 663
},
{
	name: "BC 4710",
	description: "GREEN CONSTRUCTION",
	teachers: [],
	id: 664
},
{
	name: "BC 4720",
	description: "RESIDENT CONSTR&PROP MGT",
	teachers: [],
	id: 665
},
{
	name: "BC 4730",
	description: "BEST PRAC MULTI-FAM PROP",
	teachers: [],
	id: 666
},
{
	name: "BC 4735",
	description: "REAL ESTATE DEV&CONSTRUC",
	teachers: [],
	id: 667
},
{
	name: "BC 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 668
},
{
	name: "BC 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 669
},
{
	name: "BC 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 670
},
{
	name: "BC 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 671
},
{
	name: "BC 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 672
},
{
	name: "BC 4843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 673
},
{
	name: "BC 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 674
},
{
	name: "BC 4XXX",
	description: "BLDG CONSTRUCTION ELECT",
	teachers: [],
	id: 675
},
{
	name: "BC 6002",
	description: "ISSUES IN SUST CONSTRUCT",
	teachers: [],
	id: 676
},
{
	name: "BC 6004",
	description: "SUSTAINABLE ENERGY AEC",
	teachers: [],
	id: 677
},
{
	name: "BC 6025",
	description: "CONSTRUCTION MANAGEMENT",
	teachers: [],
	id: 678
},
{
	name: "BC 6050",
	description: "BUILDING INFO MODELING",
	teachers: [],
	id: 679
},
{
	name: "BC 6100",
	description: "PROF TRENDS-FACILITY MGT",
	teachers: [],
	id: 680
},
{
	name: "BC 6125",
	description: "PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 681
},
{
	name: "BC 6150",
	description: "DESIGN-BUILD ORGN & MGT",
	teachers: [],
	id: 682
},
{
	name: "BC 6175",
	description: "REAL ESTATE DEV & CONSTR",
	teachers: [],
	id: 683
},
{
	name: "BC 6185",
	description: "INTRO TO CONST PROG MGT",
	teachers: [],
	id: 684
},
{
	name: "BC 6200",
	description: "MAINT MGT-BUILT ASSETS",
	teachers: [],
	id: 685
},
{
	name: "BC 6250",
	description: "VALUE MGT-INTEGRATED DGN",
	teachers: [],
	id: 686
},
{
	name: "BC 6275",
	description: "COMMUNITY DSGN & CONSTR",
	teachers: [],
	id: 687
},
{
	name: "BC 6285",
	description: "MGT OF PREDESIGN PHASE",
	teachers: [],
	id: 688
},
{
	name: "BC 6300",
	description: "SAFETY & ENVIRON ISSUES",
	teachers: [],
	id: 689
},
{
	name: "BC 6350",
	description: "DESIGN& CONSTRUCTION LAW",
	teachers: [],
	id: 690
},
{
	name: "BC 6375",
	description: "TRENDS & POL FOR RES DEV",
	teachers: [],
	id: 691
},
{
	name: "BC 6385",
	description: "MGT OF DESIGN PHASE",
	teachers: [],
	id: 692
},
{
	name: "BC 6400",
	description: "FAC PLN,PROJ MGT&BENCHMK",
	teachers: [],
	id: 693
},
{
	name: "BC 6500",
	description: "REAL EST ASSEST&PROP MGT",
	teachers: [],
	id: 694
},
{
	name: "BC 6550",
	description: "DESIGN&CONSTR PROCESSES",
	teachers: [],
	id: 695
},
{
	name: "BC 6575",
	description: "REAL ESTATE PROD FINANCE",
	teachers: [],
	id: 696
},
{
	name: "BC 6585",
	description: "MGT OF CONSTR AS OWNER",
	teachers: [],
	id: 697
},
{
	name: "BC 6600",
	description: "FAC MGT FINANCIAL ANALY",
	teachers: [],
	id: 698
},
{
	name: "BC 6650",
	description: "ADVANCED PROJECT MGT",
	teachers: [],
	id: 699
},
{
	name: "BC 6675",
	description: "RES DESIGN & CONSTR",
	teachers: [],
	id: 700
},
{
	name: "BC 6685",
	description: "LEADERSHIP IN DES&CONSTR",
	teachers: [],
	id: 701
},
{
	name: "BC 6700",
	description: "ADV FACILITY MGT PRACTIC",
	teachers: [],
	id: 702
},
{
	name: "BC 6731",
	description: "ZERO ENERGY HOUSING",
	teachers: [],
	id: 703
},
{
	name: "BC 6800",
	description: "FACIL&PROP MGT CAPSTONE",
	teachers: [],
	id: 704
},
{
	name: "BC 6910",
	description: "BEST PRAC MULTI-FAM PROP",
	teachers: [],
	id: 705
},
{
	name: "BC 6920",
	description: "INTRO-RESIDENT PROP MGT",
	teachers: [],
	id: 706
},
{
	name: "BC 6930",
	description: "INTG DESIGN CONSTR & DEV",
	teachers: [],
	id: 707
},
{
	name: "BC 6XXX",
	description: "BLDG CONSTRUCT ELECTIVE",
	teachers: [],
	id: 708
},
{
	name: "BC 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 709
},
{
	name: "BC 7100",
	description: "QUANT METH CONSTR RESCH",
	teachers: [],
	id: 710
},
{
	name: "BC 7200",
	description: "ADV READINGS IN BC",
	teachers: [],
	id: 711
},
{
	name: "BC 8000",
	description: "PHD SEMINAR",
	teachers: [],
	id: 712
},
{
	name: "BC 8100",
	description: "RESEARCH METHODOLOGY",
	teachers: [],
	id: 713
},
{
	name: "BC 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 714
},
{
	name: "BC 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 715
},
{
	name: "BC 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 716
},
{
	name: "BC 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 717
},
{
	name: "BC 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 718
},
{
	name: "BC 8815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 719
},
{
	name: "BC 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 720
},
{
	name: "BC 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 721
},
{
	name: "BC 8843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 722
},
{
	name: "BC 8901",
	description: "SPEC PROB-BUILD CONSTRUC",
	teachers: [],
	id: 723
},
{
	name: "BC 8902",
	description: "SPEC PROB-BUILD CONSTRUC",
	teachers: [],
	id: 724
},
{
	name: "BC 8903",
	description: "SPEC PROB-BUILD CONSTRUC",
	teachers: [],
	id: 725
},
{
	name: "BC 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 726
},
{
	name: "BC 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 727
},
{
	name: "BC 8999",
	description: "DOCTORIAL THESIS PREP",
	teachers: [],
	id: 728
},
{
	name: "BC 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 729
},
{
	name: "BIOL 1510",
	description: "BIOLOGICAL PRINCIPLES",
	teachers: [],
	id: 730
},
{
	name: "BIOL 1511",
	description: "HONORS BIOLOGICAL PRIN",
	teachers: [],
	id: 731
},
{
	name: "BIOL 1520",
	description: "INTRO TO ORGANISMAL BIOL",
	teachers: [],
	id: 732
},
{
	name: "BIOL 1521",
	description: "HONORS ORGANISMAL BIOL",
	teachers: [],
	id: 733
},
{
	name: "BIOL 1XXX",
	description: "BIOLOGY ELECTIVE",
	teachers: [],
	id: 734
},
{
	name: "BIOL 2100",
	description: "BIOGEOGRAPHY-NEW ZEALAND",
	teachers: [],
	id: 735
},
{
	name: "BIOL 2335",
	description: "GENERAL ECOLOGY",
	teachers: [],
	id: 736
},
{
	name: "BIOL 2336",
	description: "GENERAL ECOLOGY LAB",
	teachers: [],
	id: 737
},
{
	name: "BIOL 2337",
	description: "HONORS ECOLOGY",
	teachers: [],
	id: 738
},
{
	name: "BIOL 2338",
	description: "HONORS ECOLOGY LAB",
	teachers: [],
	id: 739
},
{
	name: "BIOL 2344",
	description: "GENETICS",
	teachers: [],
	id: 740
},
{
	name: "BIOL 2345",
	description: "GENETICS LABORATORY",
	teachers: [],
	id: 741
},
{
	name: "BIOL 2354",
	description: "HONORS GENETICS",
	teachers: [],
	id: 742
},
{
	name: "BIOL 2355",
	description: "HONORS GENETICS LAB",
	teachers: [],
	id: 743
},
{
	name: "BIOL 2400",
	description: "MATH MODELS IN BIOL",
	teachers: [],
	id: 744
},
{
	name: "BIOL 2694",
	description: "INTERN ASSISTANTSHIP",
	teachers: [],
	id: 745
},
{
	name: "BIOL 2695",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 746
},
{
	name: "BIOL 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 747
},
{
	name: "BIOL 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 748
},
{
	name: "BIOL 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 749
},
{
	name: "BIOL 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 750
},
{
	name: "BIOL 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 751
},
{
	name: "BIOL 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 752
},
{
	name: "BIOL 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 753
},
{
	name: "BIOL 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 754
},
{
	name: "BIOL 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 755
},
{
	name: "BIOL 2903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 756
},
{
	name: "BIOL 2904",
	description: "SPECIAL PROBLEM",
	teachers: [],
	id: 757
},
{
	name: "BIOL 2905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 758
},
{
	name: "BIOL 2XXX",
	description: "BIOLOGY ELECTIVE",
	teachers: [],
	id: 759
},
{
	name: "BIOL 3100",
	description: "ECOLOGY&EVOL-AUSTRALIA",
	teachers: [],
	id: 760
},
{
	name: "BIOL 3300",
	description: "TROPICAL ECOLOGY",
	teachers: [],
	id: 761
},
{
	name: "BIOL 3380",
	description: "INTRO MICROBIOLOGY",
	teachers: [],
	id: 762
},
{
	name: "BIOL 3381",
	description: "INTRO MICROBIOLOGY LAB",
	teachers: [],
	id: 763
},
{
	name: "BIOL 3450",
	description: "CELL MOLECULAR BIOL",
	teachers: [],
	id: 764
},
{
	name: "BIOL 3451",
	description: "CELL MOLECULAR BIOL LAB",
	teachers: [],
	id: 765
},
{
	name: "BIOL 3600",
	description: "INTRO EVOLUTIONARY BIOL",
	teachers: [],
	id: 766
},
{
	name: "BIOL 3751",
	description: "ANATOMY & PHYSIOLOGY",
	teachers: [],
	id: 767
},
{
	name: "BIOL 3753",
	description: "ANATOMY",
	teachers: [],
	id: 768
},
{
	name: "BIOL 3754",
	description: "ANATOMY LAB",
	teachers: [],
	id: 769
},
{
	name: "BIOL 3755",
	description: "HUMAN PHYSIOLOGY",
	teachers: [],
	id: 770
},
{
	name: "BIOL 3756",
	description: "PHYSIOLOGY LAB",
	teachers: [],
	id: 771
},
{
	name: "BIOL 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 772
},
{
	name: "BIOL 3XXX",
	description: "BIOLOGY ELECTIVE",
	teachers: [],
	id: 773
},
{
	name: "BIOL 4012",
	description: "PROTEIN BIOLOGY",
	teachers: [],
	id: 774
},
{
	name: "BIOL 4015",
	description: "CANCER BIO/TECH",
	teachers: [],
	id: 775
},
{
	name: "BIOL 4101",
	description: "SENSORY ECOLOGY",
	teachers: [],
	id: 776
},
{
	name: "BIOL 4105",
	description: "MACROMOLECULAR MODELING",
	teachers: [],
	id: 777
},
{
	name: "BIOL 4150",
	description: "GENOMICS&APPL BIOINFOR",
	teachers: [],
	id: 778
},
{
	name: "BIOL 4221",
	description: "BIOLOGICAL OCEANOGRAPHY",
	teachers: [],
	id: 779
},
{
	name: "BIOL 4225",
	description: "MOLECULAR EVOLUTION",
	teachers: [],
	id: 780
},
{
	name: "BIOL 4340",
	description: "MEDICAL MICROBIOLOGY",
	teachers: [],
	id: 781
},
{
	name: "BIOL 4401",
	description: "EXPER DGN&STATIS METHODS",
	teachers: [],
	id: 782
},
{
	name: "BIOL 4410",
	description: "MICROBIAL ECOLOGY",
	teachers: [],
	id: 783
},
{
	name: "BIOL 4417",
	description: "MARINE ECOLOGY",
	teachers: [],
	id: 784
},
{
	name: "BIOL 4418",
	description: "MICROBIAL PHYSIOLOGY",
	teachers: [],
	id: 785
},
{
	name: "BIOL 4422",
	description: "THEORETICAL ECOLOGY",
	teachers: [],
	id: 786
},
{
	name: "BIOL 4428",
	description: "POPULATION DYNAMICS",
	teachers: [],
	id: 787
},
{
	name: "BIOL 4440",
	description: "PLANT PHYSIOLOGY",
	teachers: [],
	id: 788
},
{
	name: "BIOL 4446",
	description: "ANIMAL PHYSIOLOGY",
	teachers: [],
	id: 789
},
{
	name: "BIOL 4460",
	description: "COMM BIOLOGICAL RESEARCH",
	teachers: [],
	id: 790
},
{
	name: "BIOL 4464",
	description: "DEVELOPMENTAL BIOLOGY",
	teachers: [],
	id: 791
},
{
	name: "BIOL 4471",
	description: "BEHAVIOR BIOLOGY",
	teachers: [],
	id: 792
},
{
	name: "BIOL 4478",
	description: "BIOPHYSICS",
	teachers: [],
	id: 793
},
{
	name: "BIOL 4480",
	description: "EVOLUTION-DEVELOP BIOL",
	teachers: [],
	id: 794
},
{
	name: "BIOL 4545",
	description: "HUMAN GENETICS",
	teachers: [],
	id: 795
},
{
	name: "BIOL 4570",
	description: "IMMUNOLOGY & IMMUNOCHEM",
	teachers: [],
	id: 796
},
{
	name: "BIOL 4590",
	description: "RESEARCH PROJECT LAB",
	teachers: [],
	id: 797
},
{
	name: "BIOL 4607",
	description: "MOLECULAR MICROBIOLOGY",
	teachers: [],
	id: 798
},
{
	name: "BIOL 4608",
	description: "PROKARYOTIC MOLE GENETICS",
	teachers: [],
	id: 799
},
{
	name: "BIOL 4620",
	description: "AQUATIC CHEMICAL ECOLOGY",
	teachers: [],
	id: 800
},
{
	name: "BIOL 4650",
	description: "BIOETHICS",
	teachers: [],
	id: 801
},
{
	name: "BIOL 4668",
	description: "EUKARYOTIC MOL GENETICS",
	teachers: [],
	id: 802
},
{
	name: "BIOL 4690",
	description: "INDEPENDNT RESEARCH PROJ",
	teachers: [],
	id: 803
},
{
	name: "BIOL 4694",
	description: "INTERN ASSISTANTSHIP",
	teachers: [],
	id: 804
},
{
	name: "BIOL 4695",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 805
},
{
	name: "BIOL 4696",
	description: "BIOL TEACHING ASSISTANT",
	teachers: [],
	id: 806
},
{
	name: "BIOL 4697",
	description: "BIOL UNDERGRAD TEACHING",
	teachers: [],
	id: 807
},
{
	name: "BIOL 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 808
},
{
	name: "BIOL 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 809
},
{
	name: "BIOL 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 810
},
{
	name: "BIOL 4746",
	description: "SIGNALING MOLECULES",
	teachers: [],
	id: 811
},
{
	name: "BIOL 4752",
	description: "INTRO NEUROSCIENCE",
	teachers: [],
	id: 812
},
{
	name: "BIOL 4755",
	description: "MATHEMATICAL BIOLOGY",
	teachers: [],
	id: 813
},
{
	name: "BIOL 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 814
},
{
	name: "BIOL 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 815
},
{
	name: "BIOL 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 816
},
{
	name: "BIOL 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 817
},
{
	name: "BIOL 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 818
},
{
	name: "BIOL 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 819
},
{
	name: "BIOL 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 820
},
{
	name: "BIOL 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 821
},
{
	name: "BIOL 4904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 822
},
{
	name: "BIOL 4905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 823
},
{
	name: "BIOL 4910",
	description: "HONORS RESEARCH THESIS",
	teachers: [],
	id: 824
},
{
	name: "BIOL 4XXX",
	description: "BIOLOGY ELECTIVE",
	teachers: [],
	id: 825
},
{
	name: "BIOL 6150",
	description: "GENOMICS APPL BIOINF",
	teachers: [],
	id: 826
},
{
	name: "BIOL 6221",
	description: "BIOLOGICAL OCEANOGRAPHY",
	teachers: [],
	id: 827
},
{
	name: "BIOL 6410",
	description: "MICROBIAL ECOLOGY",
	teachers: [],
	id: 828
},
{
	name: "BIOL 6417",
	description: "MARINE ECOLOGY",
	teachers: [],
	id: 829
},
{
	name: "BIOL 6418",
	description: "MICROBIAL PHYSIOLOGY",
	teachers: [],
	id: 830
},
{
	name: "BIOL 6422",
	description: "THEORETICAL ECOLOGY",
	teachers: [],
	id: 831
},
{
	name: "BIOL 6478",
	description: "METHODS MOLEC BIOPHYSICS",
	teachers: [],
	id: 832
},
{
	name: "BIOL 6480",
	description: "EVOLUTION-DEVELOP BIOL",
	teachers: [],
	id: 833
},
{
	name: "BIOL 6570",
	description: "IMMUNOLOGY",
	teachers: [],
	id: 834
},
{
	name: "BIOL 6600",
	description: "EVOLUTION",
	teachers: [],
	id: 835
},
{
	name: "BIOL 6608",
	description: "PROKARYOTIC MOLEC GENE",
	teachers: [],
	id: 836
},
{
	name: "BIOL 6611",
	description: "ADV MICROBIAL PHYSIOLOGY",
	teachers: [],
	id: 837
},
{
	name: "BIOL 6620",
	description: "AQUATIC CHEMICAL ECOLOGY",
	teachers: [],
	id: 838
},
{
	name: "BIOL 6623",
	description: "EXPER-AQUATIC SIGNALING",
	teachers: [],
	id: 839
},
{
	name: "BIOL 6626",
	description: "PHYSIOLOGICAL ECOLOGY",
	teachers: [],
	id: 840
},
{
	name: "BIOL 6628",
	description: "AQUATIC TOXICOLOGY",
	teachers: [],
	id: 841
},
{
	name: "BIOL 6630",
	description: "ADV MICROBIAL ECOLOGY",
	teachers: [],
	id: 842
},
{
	name: "BIOL 6720",
	description: "ENV MICROBIAL GENOMICS",
	teachers: [],
	id: 843
},
{
	name: "BIOL 6756",
	description: "SIGNALING MOLECULES",
	teachers: [],
	id: 844
},
{
	name: "BIOL 6765",
	description: "GEOMICROBIOLOGY",
	teachers: [],
	id: 845
},
{
	name: "BIOL 6XXX",
	description: "BIOLOGY ELECTIVE",
	teachers: [],
	id: 846
},
{
	name: "BIOL 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 847
},
{
	name: "BIOL 7001",
	description: "FOUND-MOLECUL&CELL BIOL",
	teachers: [],
	id: 848
},
{
	name: "BIOL 7010",
	description: "ADVANCED CELL BIOLOGY",
	teachers: [],
	id: 849
},
{
	name: "BIOL 7015",
	description: "CANCER BIOL/TECH",
	teachers: [],
	id: 850
},
{
	name: "BIOL 7023",
	description: "BIOINFORMATICS",
	teachers: [],
	id: 851
},
{
	name: "BIOL 7101",
	description: "ADVANCED SENSORY ECOLOGY",
	teachers: [],
	id: 852
},
{
	name: "BIOL 7110",
	description: "MACROMOLECULAR MODELING",
	teachers: [],
	id: 853
},
{
	name: "BIOL 7111",
	description: "MOLECULAR EVOLUTION",
	teachers: [],
	id: 854
},
{
	name: "BIOL 7210",
	description: "COMPUTATIONAL GENOMICS",
	teachers: [],
	id: 855
},
{
	name: "BIOL 7668",
	description: "EUKARYOTIC MOLEC GENETIC",
	teachers: [],
	id: 856
},
{
	name: "BIOL 7913",
	description: "ADVANCES IN MICROBIOLOGY",
	teachers: [],
	id: 857
},
{
	name: "BIOL 7914",
	description: "ADVANCES IN BACTERIOLOGY",
	teachers: [],
	id: 858
},
{
	name: "BIOL 7923",
	description: "ADVANCES IN ECOLOGY",
	teachers: [],
	id: 859
},
{
	name: "BIOL 7924",
	description: "ADV-ENVIRONMENTAL BIOL",
	teachers: [],
	id: 860
},
{
	name: "BIOL 7963",
	description: "ADVANCES-MOLECULAR BIOL",
	teachers: [],
	id: 861
},
{
	name: "BIOL 7964",
	description: "ADVANCES IN GENETICS",
	teachers: [],
	id: 862
},
{
	name: "BIOL 8000",
	description: "INTEGRATIVE BIOL SEMINAR",
	teachers: [],
	id: 863
},
{
	name: "BIOL 8001",
	description: "SEMINAR",
	teachers: [],
	id: 864
},
{
	name: "BIOL 8002",
	description: "SEMINAR",
	teachers: [],
	id: 865
},
{
	name: "BIOL 8003",
	description: "SEMINAR",
	teachers: [],
	id: 866
},
{
	name: "BIOL 8005",
	description: "SIGNALS IN THE SEA SEM",
	teachers: [],
	id: 867
},
{
	name: "BIOL 8006",
	description: "INTEGRATIVE SYSTEMS BIOL",
	teachers: [],
	id: 868
},
{
	name: "BIOL 8106",
	description: "TOOLS OF SCIENCE SEMINAR",
	teachers: [],
	id: 869
},
{
	name: "BIOL 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 870
},
{
	name: "BIOL 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 871
},
{
	name: "BIOL 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 872
},
{
	name: "BIOL 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 873
},
{
	name: "BIOL 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 874
},
{
	name: "BIOL 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 875
},
{
	name: "BIOL 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 876
},
{
	name: "BIOL 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 877
},
{
	name: "BIOL 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 878
},
{
	name: "BIOL 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 879
},
{
	name: "BMED 1000",
	description: "INTRO TO BIOMEDICAL ENGR",
	teachers: [],
	id: 880
},
{
	name: "BMED 1300",
	description: "PROBLEMS-BIOMED ENGR I",
	teachers: [],
	id: 881
},
{
	name: "BMED 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 882
},
{
	name: "BMED 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 883
},
{
	name: "BMED 1802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 884
},
{
	name: "BMED 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 885
},
{
	name: "BMED 1804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 886
},
{
	name: "BMED 1805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 887
},
{
	name: "BMED 1811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 888
},
{
	name: "BMED 1812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 889
},
{
	name: "BMED 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 890
},
{
	name: "BMED 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 891
},
{
	name: "BMED 1815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 892
},
{
	name: "BMED 1XXX",
	description: "BIOENGINEERING ELECTIVE",
	teachers: [],
	id: 893
},
{
	name: "BMED 2210",
	description: "CONSERVATION PRIN IN BME",
	teachers: [],
	id: 894
},
{
	name: "BMED 2250",
	description: "PROBLEMS IN BIOMED ENGR",
	teachers: [],
	id: 895
},
{
	name: "BMED 2300",
	description: "PROBLEMS-BIOMED ENGR II",
	teachers: [],
	id: 896
},
{
	name: "BMED 2310",
	description: "INTRO BIOMED ENGR DESIGN",
	teachers: [],
	id: 897
},
{
	name: "BMED 2400",
	description: "INTRO-BIOENGR STATS",
	teachers: [],
	id: 898
},
{
	name: "BMED 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 899
},
{
	name: "BMED 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 900
},
{
	name: "BMED 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 901
},
{
	name: "BMED 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 902
},
{
	name: "BMED 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 903
},
{
	name: "BMED 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 904
},
{
	name: "BMED 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 905
},
{
	name: "BMED 2811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 906
},
{
	name: "BMED 2812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 907
},
{
	name: "BMED 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 908
},
{
	name: "BMED 2814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 909
},
{
	name: "BMED 2815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 910
},
{
	name: "BMED 2XXX",
	description: "BIOENGINEERING ELECTIVE",
	teachers: [],
	id: 911
},
{
	name: "BMED 3100",
	description: "SYSTEMS PHYSIOLOGY",
	teachers: [],
	id: 912
},
{
	name: "BMED 3110",
	description: "QUANT ENGR PHYSIO LAB I",
	teachers: [],
	id: 913
},
{
	name: "BMED 3300",
	description: "BIOTRANSPORT",
	teachers: [],
	id: 914
},
{
	name: "BMED 3310",
	description: "BIOTRANSPORT",
	teachers: [],
	id: 915
},
{
	name: "BMED 3400",
	description: "INTRO TO BIOMECHANICS",
	teachers: [],
	id: 916
},
{
	name: "BMED 3500",
	description: "SENSORS& INSTRUMENTATION",
	teachers: [],
	id: 917
},
{
	name: "BMED 3510",
	description: "BIOMED SYSTEMS & MODEL",
	teachers: [],
	id: 918
},
{
	name: "BMED 3520",
	description: "BIOMED SYS & MODELING",
	teachers: [],
	id: 919
},
{
	name: "BMED 3600",
	description: "PHYSIO CELL & MOL SYST",
	teachers: [],
	id: 920
},
{
	name: "BMED 3610",
	description: "QUANT ENGR PHYSIO LAB II",
	teachers: [],
	id: 921
},
{
	name: "BMED 3XXX",
	description: "BIOENGINEERING ELECTIVE",
	teachers: [],
	id: 922
},
{
	name: "BMED 4400",
	description: "NEUROENGINEERING FUND",
	teachers: [],
	id: 923
},
{
	name: "BMED 4477",
	description: "BIO NETWORKS & GENOMICS",
	teachers: [],
	id: 924
},
{
	name: "BMED 4500",
	description: "CELL & TISSUE ENGR LAB",
	teachers: [],
	id: 925
},
{
	name: "BMED 4600",
	description: "SENIOR DESIGN PROJECT I",
	teachers: [],
	id: 926
},
{
	name: "BMED 4601",
	description: "SENIOR DESIGN PROJECT II",
	teachers: [],
	id: 927
},
{
	name: "BMED 4602",
	description: "CAPSTONE DESIGN",
	teachers: [],
	id: 928
},
{
	name: "BMED 4603",
	description: "ADVANCED DESIGN",
	teachers: [],
	id: 929
},
{
	name: "BMED 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 930
},
{
	name: "BMED 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 931
},
{
	name: "BMED 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 932
},
{
	name: "BMED 4750",
	description: "DIAGNOSTIC IMAGING PHYS",
	teachers: [],
	id: 933
},
{
	name: "BMED 4751",
	description: "INTRO TO BIOMATERIALS",
	teachers: [],
	id: 934
},
{
	name: "BMED 4752",
	description: "INTRO NEUROSCIENCE",
	teachers: [],
	id: 935
},
{
	name: "BMED 4757",
	description: "BIOFLUID MECHANICS",
	teachers: [],
	id: 936
},
{
	name: "BMED 4758",
	description: "BIOSOLID MECHANICS",
	teachers: [],
	id: 937
},
{
	name: "BMED 4765",
	description: "DRUG DESIGN,DEVLPMNT&DELIVERY",
	teachers: [],
	id: 938
},
{
	name: "BMED 4781",
	description: "BIOMED INSTRUMENTATION",
	teachers: [],
	id: 939
},
{
	name: "BMED 4782",
	description: "BIOSYSTEMS ANALYSIS",
	teachers: [],
	id: 940
},
{
	name: "BMED 4783",
	description: "INTRO-MEDICAL IMAGE PROC",
	teachers: [],
	id: 941
},
{
	name: "BMED 4784",
	description: "ENGR ELECTROPHYSIOLOGY",
	teachers: [],
	id: 942
},
{
	name: "BMED 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 943
},
{
	name: "BMED 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 944
},
{
	name: "BMED 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 945
},
{
	name: "BMED 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 946
},
{
	name: "BMED 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 947
},
{
	name: "BMED 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 948
},
{
	name: "BMED 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 949
},
{
	name: "BMED 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 950
},
{
	name: "BMED 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 951
},
{
	name: "BMED 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 952
},
{
	name: "BMED 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 953
},
{
	name: "BMED 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 954
},
{
	name: "BMED 4843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 955
},
{
	name: "BMED 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 956
},
{
	name: "BMED 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 957
},
{
	name: "BMED 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 958
},
{
	name: "BMED 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 959
},
{
	name: "BMED 4XXX",
	description: "BIOENGINEERING ELECTIVE",
	teachers: [],
	id: 960
},
{
	name: "BMED 6041",
	description: "ANALYTICAL METHODS",
	teachers: [],
	id: 961
},
{
	name: "BMED 6042",
	description: "SYSTEMS PHYSIOLOGY",
	teachers: [],
	id: 962
},
{
	name: "BMED 6210",
	description: "MAGNETIC RESONANCE IMAG",
	teachers: [],
	id: 963
},
{
	name: "BMED 6501",
	description: "FUNDA BIOID PROCESS",
	teachers: [],
	id: 964
},
{
	name: "BMED 6502",
	description: "CLINICAL LITERACY EXPERI",
	teachers: [],
	id: 965
},
{
	name: "BMED 6503",
	description: "MED MKTS & CLINICAL SPEC",
	teachers: [],
	id: 966
},
{
	name: "BMED 6504",
	description: "FINA PLANNING FOR PROJS",
	teachers: [],
	id: 967
},
{
	name: "BMED 6505",
	description: "PROD PLAN & PROJECT MGT",
	teachers: [],
	id: 968
},
{
	name: "BMED 6506",
	description: "PROF COMMUNICATION BIOID",
	teachers: [],
	id: 969
},
{
	name: "BMED 6507",
	description: "MEDICAL DEVICE REG REQ",
	teachers: [],
	id: 970
},
{
	name: "BMED 6508",
	description: "BIOID MASTERS PROJECT I",
	teachers: [],
	id: 971
},
{
	name: "BMED 6509",
	description: "BIOID MASTERS PROJECT II",
	teachers: [],
	id: 972
},
{
	name: "BMED 6700",
	description: "BIOSTATISTICS",
	teachers: [],
	id: 973
},
{
	name: "BMED 6710",
	description: "RATIONAL DESIGN BIOMAT",
	teachers: [],
	id: 974
},
{
	name: "BMED 6711",
	description: "RATIONAL DESIGN BIOM LAB",
	teachers: [],
	id: 975
},
{
	name: "BMED 6720",
	description: "BIOTRANSPORT",
	teachers: [],
	id: 976
},
{
	name: "BMED 6730",
	description: "MAT SCI CELL COMPONENTS",
	teachers: [],
	id: 977
},
{
	name: "BMED 6740",
	description: "LIVING SYSTEM MODELING",
	teachers: [],
	id: 978
},
{
	name: "BMED 6743",
	description: "TISSUE MECHANICS",
	teachers: [],
	id: 979
},
{
	name: "BMED 6753",
	description: "PRIN-MGT FOR ENGINEERS",
	teachers: [],
	id: 980
},
{
	name: "BMED 6760",
	description: "INFO PROCESS MODEL NEURA",
	teachers: [],
	id: 981
},
{
	name: "BMED 6765",
	description: "DRUG DEVELOPMENT",
	teachers: [],
	id: 982
},
{
	name: "BMED 6774",
	description: "BIOMATERIAL:STRUCT&FUNCT",
	teachers: [],
	id: 983
},
{
	name: "BMED 6777",
	description: "ADVANCED BIOMATERIALS",
	teachers: [],
	id: 984
},
{
	name: "BMED 6779",
	description: "BIOPROCESS ENGINEERING",
	teachers: [],
	id: 985
},
{
	name: "BMED 6780",
	description: "MEDICAL IMAGE PROCESSING",
	teachers: [],
	id: 986
},
{
	name: "BMED 6782",
	description: "CELLULAR ENGINEERING",
	teachers: [],
	id: 987
},
{
	name: "BMED 6784",
	description: "CARDIOVASCULAR BIOMECH",
	teachers: [],
	id: 988
},
{
	name: "BMED 6786",
	description: "MEDICAL IMAGING SYSTEMS",
	teachers: [],
	id: 989
},
{
	name: "BMED 6787",
	description: "QUANTITATIVE ELECTROPHYS",
	teachers: [],
	id: 990
},
{
	name: "BMED 6789",
	description: "TECHNOLOGY VENTURES",
	teachers: [],
	id: 991
},
{
	name: "BMED 6790",
	description: "INFO PROC MODEL NEUR SYS",
	teachers: [],
	id: 992
},
{
	name: "BMED 6793",
	description: "SYSTEMS PATHOPHYSIOLOGY",
	teachers: [],
	id: 993
},
{
	name: "BMED 6794",
	description: "TISSUE ENGINEERING",
	teachers: [],
	id: 994
},
{
	name: "BMED 6799",
	description: "LEGAL ISSUES-TECH TRANSF",
	teachers: [],
	id: 995
},
{
	name: "BMED 6XXX",
	description: "BIOENGINEERING ELECTIVE",
	teachers: [],
	id: 996
},
{
	name: "BMED 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 997
},
{
	name: "BMED 7001",
	description: "BIOMED ENGINEER SEMINAR",
	teachers: [],
	id: 998
},
{
	name: "BMED 7002",
	description: "TEACHING PRACTICUM I",
	teachers: [],
	id: 999
},
{
	name: "BMED 7003",
	description: "TEACHING PRACTICUM II",
	teachers: [],
	id: 1000
},
{
	name: "BMED 7004",
	description: "TEACHING & RESEARCH I",
	teachers: [],
	id: 1001
},
{
	name: "BMED 7005",
	description: "TEACHING & RESEARCH II",
	teachers: [],
	id: 1002
},
{
	name: "BMED 7011",
	description: "INTEG CORE-INT EXP&MODEL",
	teachers: [],
	id: 1003
},
{
	name: "BMED 7012",
	description: "INTEG CORE-EXPERI DESIGN",
	teachers: [],
	id: 1004
},
{
	name: "BMED 7013",
	description: "INTEG CORE-PROB SOLV COM",
	teachers: [],
	id: 1005
},
{
	name: "BMED 7101",
	description: "ADV SEM-BIOMAT&REGEN MED",
	teachers: [],
	id: 1006
},
{
	name: "BMED 7201",
	description: "ADV SEM-CARDIO BIOL&BIOM",
	teachers: [],
	id: 1007
},
{
	name: "BMED 7301",
	description: "ADV SEM-CELLULAR&BIOMOLE",
	teachers: [],
	id: 1008
},
{
	name: "BMED 7310",
	description: "STEM CELL ENGINEERING",
	teachers: [],
	id: 1009
},
{
	name: "BMED 7410",
	description: "MULTISCALE ANALYSIS SYST",
	teachers: [],
	id: 1010
},
{
	name: "BMED 7411",
	description: "MATH MODELS BIOL & MEDIC",
	teachers: [],
	id: 1011
},
{
	name: "BMED 7413",
	description: "BIOCHEMICAL SYSTEMS ANAL",
	teachers: [],
	id: 1012
},
{
	name: "BMED 7601",
	description: "ADV SEM-NEUROENGINEERING",
	teachers: [],
	id: 1013
},
{
	name: "BMED 7610",
	description: "QUANTITATIVE NEUROSCIENC",
	teachers: [],
	id: 1014
},
{
	name: "BMED 7785",
	description: "INTRO ROBOTICS RESEARCH",
	teachers: [],
	id: 1015
},
{
	name: "BMED 8750",
	description: "ROBOTICS RESEARCH FND I",
	teachers: [],
	id: 1016
},
{
	name: "BMED 8751",
	description: "ROBOTICS RESEARCH FND II",
	teachers: [],
	id: 1017
},
{
	name: "BMED 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1018
},
{
	name: "BMED 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1019
},
{
	name: "BMED 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1020
},
{
	name: "BMED 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1021
},
{
	name: "BMED 8815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1022
},
{
	name: "BMED 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1023
},
{
	name: "BMED 8853",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1024
},
{
	name: "BMED 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1025
},
{
	name: "BMED 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1026
},
{
	name: "BMED 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1027
},
{
	name: "BMED 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1028
},
{
	name: "BMED 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1029
},
{
	name: "BMED 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 1030
},
{
	name: "BMEJ 9999",
	description: "GT-PKU",
	teachers: [],
	id: 1031
},
{
	name: "BMEM 6000",
	description: "BMED ENG-JOINT W/ EMORY",
	teachers: [],
	id: 1032
},
{
	name: "BMEM 6001",
	description: "BMED ENG-JOINT W/EMORY",
	teachers: [],
	id: 1033
},
{
	name: "CEE 1770",
	description: "INTRO TO ENGR GRAPHICS",
	teachers: [],
	id: 1034
},
{
	name: "CEE 1XXX",
	description: "CIVIL/ENV ENGR ELECTIVE",
	teachers: [],
	id: 1035
},
{
	name: "CEE 2040",
	description: "DYNAMICS",
	teachers: [],
	id: 1036
},
{
	name: "CEE 2300",
	description: "ENVIRONMENTAL ENGR PRIN",
	teachers: [],
	id: 1037
},
{
	name: "CEE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1038
},
{
	name: "CEE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1039
},
{
	name: "CEE 2XXX",
	description: "CIVIL/ENV ENGR ELECTIVE",
	teachers: [],
	id: 1040
},
{
	name: "CEE 3000",
	description: "CIVIL ENGR SYSTEMS",
	teachers: [],
	id: 1041
},
{
	name: "CEE 3010",
	description: "GEOMATICS",
	teachers: [],
	id: 1042
},
{
	name: "CEE 3020",
	description: "CIVIL ENGR MATERIALS",
	teachers: [],
	id: 1043
},
{
	name: "CEE 3040",
	description: "FLUID MECHANICS",
	teachers: [],
	id: 1044
},
{
	name: "CEE 3055",
	description: "STRUCTURAL ANALYSIS",
	teachers: [],
	id: 1045
},
{
	name: "CEE 3340",
	description: "ENVIRON ENGR LABORATORY",
	teachers: [],
	id: 1046
},
{
	name: "CEE 3770",
	description: "STATISTICS& APPLICATIONS",
	teachers: [],
	id: 1047
},
{
	name: "CEE 3XXX",
	description: "CIVIL/ENV ENGR ELECTIVE",
	teachers: [],
	id: 1048
},
{
	name: "CEE 4090",
	description: "CAPSTONE DESIGN",
	teachers: [],
	id: 1049
},
{
	name: "CEE 4100",
	description: "CONSTRUCTION ENGR & MGT",
	teachers: [],
	id: 1050
},
{
	name: "CEE 4101",
	description: "CONSTRUCTION SEMINAR",
	teachers: [],
	id: 1051
},
{
	name: "CEE 4110",
	description: "CONSTRUCTION PLAN & EST",
	teachers: [],
	id: 1052
},
{
	name: "CEE 4120",
	description: "CONSTRUCTION OPERATIONS",
	teachers: [],
	id: 1053
},
{
	name: "CEE 4130",
	description: "CONSTR. SAFETY & HEALTH",
	teachers: [],
	id: 1054
},
{
	name: "CEE 4140",
	description: "BLDG INFO MODEL CONSTR",
	teachers: [],
	id: 1055
},
{
	name: "CEE 4200",
	description: "HYDRAULIC ENGINEERING",
	teachers: [],
	id: 1056
},
{
	name: "CEE 4210",
	description: "HYDROLOGY",
	teachers: [],
	id: 1057
},
{
	name: "CEE 4225",
	description: "COASTAL ENGINEERING",
	teachers: [],
	id: 1058
},
{
	name: "CEE 4230",
	description: "ENVIRON TRANSPORT MODEL",
	teachers: [],
	id: 1059
},
{
	name: "CEE 4300",
	description: "ENVIRONMENTAL ENGR SYS",
	teachers: [],
	id: 1060
},
{
	name: "CEE 4310",
	description: "WATER QUALITY ENGR",
	teachers: [],
	id: 1061
},
{
	name: "CEE 4320",
	description: "HAZARDOUS SUBSTANCE ENGR",
	teachers: [],
	id: 1062
},
{
	name: "CEE 4330",
	description: "AIR POLLUTION ENGR",
	teachers: [],
	id: 1063
},
{
	name: "CEE 4340",
	description: "ENV MODELING & HEALTH",
	teachers: [],
	id: 1064
},
{
	name: "CEE 4395",
	description: "ENVIRONMENTAL SYS DESIGN",
	teachers: [],
	id: 1065
},
{
	name: "CEE 4405",
	description: "GEOTECHNICAL ENGINEERING",
	teachers: [],
	id: 1066
},
{
	name: "CEE 4406",
	description: "APPLIED GEOTECHNICS",
	teachers: [],
	id: 1067
},
{
	name: "CEE 4410",
	description: "GEOSYSTEMS ENGR DESIGN",
	teachers: [],
	id: 1068
},
{
	name: "CEE 4420",
	description: "SUBSURFACE CHARACTER",
	teachers: [],
	id: 1069
},
{
	name: "CEE 4430",
	description: "ENVIRONMENTAL GEOTECHNIC",
	teachers: [],
	id: 1070
},
{
	name: "CEE 4510",
	description: "STRUCTURAL STEEL DSGN",
	teachers: [],
	id: 1071
},
{
	name: "CEE 4520",
	description: "REINFORCED CONCRETE DSGN",
	teachers: [],
	id: 1072
},
{
	name: "CEE 4530",
	description: "TIMBER & MASONRY DESIGN",
	teachers: [],
	id: 1073
},
{
	name: "CEE 4540",
	description: "INFRASTRUCTURE REHAB",
	teachers: [],
	id: 1074
},
{
	name: "CEE 4550",
	description: "STRUCTURAL ANALYSIS II",
	teachers: [],
	id: 1075
},
{
	name: "CEE 4600",
	description: "TRANSPORTATION PLAN&DSGN",
	teachers: [],
	id: 1076
},
{
	name: "CEE 4610",
	description: "MULTIMODAL TRANSPORT",
	teachers: [],
	id: 1077
},
{
	name: "CEE 4620",
	description: "ENVIRON IMPACT ASSESS",
	teachers: [],
	id: 1078
},
{
	name: "CEE 4630",
	description: "COMPUTER-AIDED SITE DSGN",
	teachers: [],
	id: 1079
},
{
	name: "CEE 4640",
	description: "FREEWAY & INTERCH DESIGN",
	teachers: [],
	id: 1080
},
{
	name: "CEE 4650",
	description: "SITE DESIGN IN TRANSPORT",
	teachers: [],
	id: 1081
},
{
	name: "CEE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1082
},
{
	name: "CEE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1083
},
{
	name: "CEE 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 1084
},
{
	name: "CEE 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 1085
},
{
	name: "CEE 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 1086
},
{
	name: "CEE 4795",
	description: "GROUNDWATER HYDROLOGY",
	teachers: [],
	id: 1087
},
{
	name: "CEE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1088
},
{
	name: "CEE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1089
},
{
	name: "CEE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1090
},
{
	name: "CEE 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1091
},
{
	name: "CEE 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1092
},
{
	name: "CEE 4806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1093
},
{
	name: "CEE 4900",
	description: "CEE HONORS RESEARCH",
	teachers: [],
	id: 1094
},
{
	name: "CEE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1095
},
{
	name: "CEE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1096
},
{
	name: "CEE 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1097
},
{
	name: "CEE 4XXX",
	description: "CIVIL/ENV ENGR ELECTIVE`",
	teachers: [],
	id: 1098
},
{
	name: "CEE 6100",
	description: "CONSTRUCTION PROJECT PLN",
	teachers: [],
	id: 1099
},
{
	name: "CEE 6110",
	description: "COMPUTER APPS-CONSTRUCT",
	teachers: [],
	id: 1100
},
{
	name: "CEE 6120",
	description: "ENV CONSCIOUS-DGN&CONST",
	teachers: [],
	id: 1101
},
{
	name: "CEE 6130",
	description: "CONSTRUCTION PROJ CTRLS",
	teachers: [],
	id: 1102
},
{
	name: "CEE 6140",
	description: "ADV PLAN&ESTIMATING METH",
	teachers: [],
	id: 1103
},
{
	name: "CEE 6150",
	description: "CONSTRUCTION LAW",
	teachers: [],
	id: 1104
},
{
	name: "CEE 6170",
	description: "PROJ DELIVER&PROCUREMENT",
	teachers: [],
	id: 1105
},
{
	name: "CEE 6180",
	description: "CONSTRUCTION ORGS",
	teachers: [],
	id: 1106
},
{
	name: "CEE 6190",
	description: "CONSTRUCTION FIELD ENGR",
	teachers: [],
	id: 1107
},
{
	name: "CEE 6221",
	description: "PHYSICAL HYDROLOGY",
	teachers: [],
	id: 1108
},
{
	name: "CEE 6222",
	description: "HYDROMETEOROLOGY",
	teachers: [],
	id: 1109
},
{
	name: "CEE 6231",
	description: "PROBABILITY&STATISTICS",
	teachers: [],
	id: 1110
},
{
	name: "CEE 6232",
	description: "STOCHASTIC HYDROLOGY",
	teachers: [],
	id: 1111
},
{
	name: "CEE 6241",
	description: "WATER RESOURCES MGT I",
	teachers: [],
	id: 1112
},
{
	name: "CEE 6242",
	description: "WATER RESOURCES MGT II",
	teachers: [],
	id: 1113
},
{
	name: "CEE 6244",
	description: "RANDOM FIELDS&GEOSTATIST",
	teachers: [],
	id: 1114
},
{
	name: "CEE 6251",
	description: "FLUID MECHANICS",
	teachers: [],
	id: 1115
},
{
	name: "CEE 6252",
	description: "ADV FLUID MECHANICS",
	teachers: [],
	id: 1116
},
{
	name: "CEE 6261",
	description: "ENVIRON FLUID MECHANICS",
	teachers: [],
	id: 1117
},
{
	name: "CEE 6262",
	description: "ADV ENVIRON FLUID MECH",
	teachers: [],
	id: 1118
},
{
	name: "CEE 6263",
	description: "FLUID MECH OF ORGANISMS",
	teachers: [],
	id: 1119
},
{
	name: "CEE 6271",
	description: "FLOW-POROUS MEDIA I",
	teachers: [],
	id: 1120
},
{
	name: "CEE 6272",
	description: "FLOW-POROUS MEDIA II",
	teachers: [],
	id: 1121
},
{
	name: "CEE 6274",
	description: "FLOW-HETEROGENEOUS MEDIA",
	teachers: [],
	id: 1122
},
{
	name: "CEE 6281",
	description: "OPEN CHANNEL HYDRAULICS",
	teachers: [],
	id: 1123
},
{
	name: "CEE 6282",
	description: "SEDIMENT TRANSPORT",
	teachers: [],
	id: 1124
},
{
	name: "CEE 6284",
	description: "HYDRAULIC TRANSIENTS",
	teachers: [],
	id: 1125
},
{
	name: "CEE 6293",
	description: "HYDRODYNAMIC STAB&TURB",
	teachers: [],
	id: 1126
},
{
	name: "CEE 6310",
	description: "PROCESS PRINCIPLES-ENVE",
	teachers: [],
	id: 1127
},
{
	name: "CEE 6311",
	description: "MICROBIAL PRINCIPLES",
	teachers: [],
	id: 1128
},
{
	name: "CEE 6312",
	description: "CHEMICAL PRINCIPLES-ENVE",
	teachers: [],
	id: 1129
},
{
	name: "CEE 6313",
	description: "FATE OF CONTAMINANTS",
	teachers: [],
	id: 1130
},
{
	name: "CEE 6314",
	description: "ENVIRONMENTAL MODELING",
	teachers: [],
	id: 1131
},
{
	name: "CEE 6319",
	description: "ENVIRONMENTAL LABORATORY",
	teachers: [],
	id: 1132
},
{
	name: "CEE 6320",
	description: "LEGAL INST POLL FRAME",
	teachers: [],
	id: 1133
},
{
	name: "CEE 6321",
	description: "WATER QUALILTY & ECOLOGY",
	teachers: [],
	id: 1134
},
{
	name: "CEE 6322",
	description: "WATER RES SYS ANALY",
	teachers: [],
	id: 1135
},
{
	name: "CEE 6323",
	description: "NATRL RES ENVR ECON",
	teachers: [],
	id: 1136
},
{
	name: "CEE 6324",
	description: "WATER SUPPLY AND SANIT",
	teachers: [],
	id: 1137
},
{
	name: "CEE 6325",
	description: "RIVER HYDRAULICS",
	teachers: [],
	id: 1138
},
{
	name: "CEE 6326",
	description: "HYDR PRINC & PRACT",
	teachers: [],
	id: 1139
},
{
	name: "CEE 6327",
	description: "STAT METH ENVR DATA",
	teachers: [],
	id: 1140
},
{
	name: "CEE 6330",
	description: "PHYSICOCHEMICAL PROCESS",
	teachers: [],
	id: 1141
},
{
	name: "CEE 6331",
	description: "BIOLOGICAL PROCESSES",
	teachers: [],
	id: 1142
},
{
	name: "CEE 6332",
	description: "SEPARATION PROCESSES",
	teachers: [],
	id: 1143
},
{
	name: "CEE 6333",
	description: "HAZARD WASTE REMEDIATION",
	teachers: [],
	id: 1144
},
{
	name: "CEE 6340",
	description: "SOLID-LIQUID SEPARATIONS",
	teachers: [],
	id: 1145
},
{
	name: "CEE 6341",
	description: "INDUSTRIAL WASTES",
	teachers: [],
	id: 1146
},
{
	name: "CEE 6342",
	description: "SOLID WASTES",
	teachers: [],
	id: 1147
},
{
	name: "CEE 6343",
	description: "MEMBRANE PROCESSES",
	teachers: [],
	id: 1148
},
{
	name: "CEE 6345",
	description: "SUSTAINABLE ENGINEERING",
	teachers: [],
	id: 1149
},
{
	name: "CEE 6350",
	description: "ADV ENVIRONMENTAL CHEM",
	teachers: [],
	id: 1150
},
{
	name: "CEE 6351",
	description: "BIOTRANSFORMATIONS",
	teachers: [],
	id: 1151
},
{
	name: "CEE 6355",
	description: "INDUSTRIAL ECOLOGY-ENVE",
	teachers: [],
	id: 1152
},
{
	name: "CEE 6360",
	description: "DGN-TREATMENT FACILITIES",
	teachers: [],
	id: 1153
},
{
	name: "CEE 6361",
	description: "MODEL&SIM-BIOL TREAT SYS",
	teachers: [],
	id: 1154
},
{
	name: "CEE 6390",
	description: "AIR POLLUTANT:FORM&CTRL",
	teachers: [],
	id: 1155
},
{
	name: "CEE 6391",
	description: "ADV TOPICS-AIR POLLUTION",
	teachers: [],
	id: 1156
},
{
	name: "CEE 6402",
	description: "SOIL MECHANICS",
	teachers: [],
	id: 1157
},
{
	name: "CEE 6403",
	description: "ENVIRONMENTAL GEOTECHNIC",
	teachers: [],
	id: 1158
},
{
	name: "CEE 6421",
	description: "LAB CHARACT-GEOMATERIALS",
	teachers: [],
	id: 1159
},
{
	name: "CEE 6422",
	description: "SOILS& EXPERIMENTAL METH",
	teachers: [],
	id: 1160
},
{
	name: "CEE 6423",
	description: "IN-SITU TESTING",
	teachers: [],
	id: 1161
},
{
	name: "CEE 6424",
	description: "ENGINEERING GEOPHYSICS",
	teachers: [],
	id: 1162
},
{
	name: "CEE 6431",
	description: "PLASTICITY GEOMATERIALS",
	teachers: [],
	id: 1163
},
{
	name: "CEE 6441",
	description: "ANALYSIS-EARTH STRUCTURE",
	teachers: [],
	id: 1164
},
{
	name: "CEE 6442",
	description: "DYN ANALY-GEOTECH ENGR",
	teachers: [],
	id: 1165
},
{
	name: "CEE 6443",
	description: "FOUNDATION SYSTEMS",
	teachers: [],
	id: 1166
},
{
	name: "CEE 6444",
	description: "GEOSYNTHETICS IN CE",
	teachers: [],
	id: 1167
},
{
	name: "CEE 6445",
	description: "GEOTECH EARTHQUAKE ENGR",
	teachers: [],
	id: 1168
},
{
	name: "CEE 6446",
	description: "GEOTECH SEEPAGE ANALYSIS",
	teachers: [],
	id: 1169
},
{
	name: "CEE 6447",
	description: "GROUND MODIFICATION",
	teachers: [],
	id: 1170
},
{
	name: "CEE 6448",
	description: "LANDFILL DESIGN & MGT",
	teachers: [],
	id: 1171
},
{
	name: "CEE 6449",
	description: "REMEDIATION SYSTEMS",
	teachers: [],
	id: 1172
},
{
	name: "CEE 6450",
	description: "PAVEMENT DESIGN",
	teachers: [],
	id: 1173
},
{
	name: "CEE 6451",
	description: "ROCK MECHANICS",
	teachers: [],
	id: 1174
},
{
	name: "CEE 6460",
	description: "THEORETICAL GEOMECHANICS",
	teachers: [],
	id: 1175
},
{
	name: "CEE 6461",
	description: "MATH APPLICATIONS IN CEE",
	teachers: [],
	id: 1176
},
{
	name: "CEE 6462",
	description: "SIGNALS&INVERSE PROBLEMS",
	teachers: [],
	id: 1177
},
{
	name: "CEE 6463",
	description: "CONSTITUTIVE MODEL-SOILS",
	teachers: [],
	id: 1178
},
{
	name: "CEE 6481",
	description: "UNSATURATED SOIL MECH",
	teachers: [],
	id: 1179
},
{
	name: "CEE 6482",
	description: "APPLIED FRACTURE MECH",
	teachers: [],
	id: 1180
},
{
	name: "CEE 6483",
	description: "GEO SPATIAL IMAGE ANALY",
	teachers: [],
	id: 1181
},
{
	name: "CEE 6484",
	description: "INDUSTRIAL BYPRODUCT",
	teachers: [],
	id: 1182
},
{
	name: "CEE 6485",
	description: "WAVES&PARTICULATE MATER",
	teachers: [],
	id: 1183
},
{
	name: "CEE 6501",
	description: "MATRIX STRUCTURAL ANALY",
	teachers: [],
	id: 1184
},
{
	name: "CEE 6504",
	description: "FINITE ELEMENT METHODS",
	teachers: [],
	id: 1185
},
{
	name: "CEE 6507",
	description: "NONLINEAR FINITE ELEM",
	teachers: [],
	id: 1186
},
{
	name: "CEE 6510",
	description: "STRUCTURAL DYNAMICS",
	teachers: [],
	id: 1187
},
{
	name: "CEE 6511",
	description: "RANDOM VIBRATION",
	teachers: [],
	id: 1188
},
{
	name: "CEE 6512",
	description: "ADV DYNAMICS & SMART STR",
	teachers: [],
	id: 1189
},
{
	name: "CEE 6513",
	description: "COMPUT METHODS-MECHANICS",
	teachers: [],
	id: 1190
},
{
	name: "CEE 6521",
	description: "REINFOR CONCRETE MEMBERS",
	teachers: [],
	id: 1191
},
{
	name: "CEE 6522",
	description: "REINF CONCRETE SLAB SYS",
	teachers: [],
	id: 1192
},
{
	name: "CEE 6523",
	description: "PRESTRESSED CONCRETE",
	teachers: [],
	id: 1193
},
{
	name: "CEE 6527",
	description: "STRUCTURAL STEEL DESIGN",
	teachers: [],
	id: 1194
},
{
	name: "CEE 6528",
	description: "INTRO BRIDGE ENGINEERING",
	teachers: [],
	id: 1195
},
{
	name: "CEE 6530",
	description: "STRUCTURAL SYSTEMS",
	teachers: [],
	id: 1196
},
{
	name: "CEE 6533",
	description: "POLYMER COMPOSITE STRUCT",
	teachers: [],
	id: 1197
},
{
	name: "CEE 6536",
	description: "REHAB-EXISTING STRUCTURE",
	teachers: [],
	id: 1198
},
{
	name: "CEE 6541",
	description: "EARTHQUAKE ENGINEERING",
	teachers: [],
	id: 1199
},
{
	name: "CEE 6542",
	description: "CONSEQUENCE-BASED EQ ENG",
	teachers: [],
	id: 1200
},
{
	name: "CEE 6544",
	description: "STRUCTURAL MODELING",
	teachers: [],
	id: 1201
},
{
	name: "CEE 6548",
	description: "INELASTIC DESIGN",
	teachers: [],
	id: 1202
},
{
	name: "CEE 6549",
	description: "STRUCTURAL RELIABILITY",
	teachers: [],
	id: 1203
},
{
	name: "CEE 6551",
	description: "STRENGTH OF MATERIALS",
	teachers: [],
	id: 1204
},
{
	name: "CEE 6554",
	description: "THEORY-ELASTIC STABILITY",
	teachers: [],
	id: 1205
},
{
	name: "CEE 6557",
	description: "THEORY-PLATES AND SHELLS",
	teachers: [],
	id: 1206
},
{
	name: "CEE 6560",
	description: "APPLIED ELASTICITY",
	teachers: [],
	id: 1207
},
{
	name: "CEE 6563",
	description: "ENERGY METHODS-MECHANICS",
	teachers: [],
	id: 1208
},
{
	name: "CEE 6566",
	description: "PLASTICITY& VISCOELASTIC",
	teachers: [],
	id: 1209
},
{
	name: "CEE 6569",
	description: "WAVE PROPAGATION-SOLIDS",
	teachers: [],
	id: 1210
},
{
	name: "CEE 6571",
	description: "EXPERIMENT STRESS ANALY",
	teachers: [],
	id: 1211
},
{
	name: "CEE 6581",
	description: "ENGR PROGRAMMING METH",
	teachers: [],
	id: 1212
},
{
	name: "CEE 6582",
	description: "ENG KNOWLEDGE-BASED PROG",
	teachers: [],
	id: 1213
},
{
	name: "CEE 6583",
	description: "OBJECT-ORIENTED PROG-ENG",
	teachers: [],
	id: 1214
},
{
	name: "CEE 6590",
	description: "DURABILITY CEM MATERIALS",
	teachers: [],
	id: 1215
},
{
	name: "CEE 6601",
	description: "STATISTICS IN TRANSPORT",
	teachers: [],
	id: 1216
},
{
	name: "CEE 6602",
	description: "URBAN TRANSPORT PLANNING",
	teachers: [],
	id: 1217
},
{
	name: "CEE 6603",
	description: "TRAFFIC ENGINEERING",
	teachers: [],
	id: 1218
},
{
	name: "CEE 6604",
	description: "TRANSPORTATION DESIGN",
	teachers: [],
	id: 1219
},
{
	name: "CEE 6605",
	description: "TRANSPORT ADMIN & POLICY",
	teachers: [],
	id: 1220
},
{
	name: "CEE 6621",
	description: "GIS IN TRANSPORTATION",
	teachers: [],
	id: 1221
},
{
	name: "CEE 6622",
	description: "TRAVEL DEMAND ANALYSIS",
	teachers: [],
	id: 1222
},
{
	name: "CEE 6623",
	description: "SURVEY DESIGN AND ANALY",
	teachers: [],
	id: 1223
},
{
	name: "CEE 6624",
	description: "LAND USE& TRANSPORTATION",
	teachers: [],
	id: 1224
},
{
	name: "CEE 6625",
	description: "TRANSPOR,ENERGY&AIR QUAL",
	teachers: [],
	id: 1225
},
{
	name: "CEE 6631",
	description: "SIGNALIZED INTERSECTIONS",
	teachers: [],
	id: 1226
},
{
	name: "CEE 6632",
	description: "SIMULATION IN TRANSPORT",
	teachers: [],
	id: 1227
},
{
	name: "CEE 6633",
	description: "TRAFFIC CONTROL",
	teachers: [],
	id: 1228
},
{
	name: "CEE 6634",
	description: "TRANSPORTATION SAFETY",
	teachers: [],
	id: 1229
},
{
	name: "CEE 6635",
	description: "TECH INNOVATION-TRANSPOR",
	teachers: [],
	id: 1230
},
{
	name: "CEE 6636",
	description: "TRAFFIC FLOW THEORY",
	teachers: [],
	id: 1231
},
{
	name: "CEE 6641",
	description: "TRANSPORT INFRASTRUCTURE",
	teachers: [],
	id: 1232
},
{
	name: "CEE 6642",
	description: "TRANSIT SYS PLAN& DESIGN",
	teachers: [],
	id: 1233
},
{
	name: "CEE 6644",
	description: "AIRPORT PLANNING&DESIGN",
	teachers: [],
	id: 1234
},
{
	name: "CEE 6651",
	description: "INFRASTRUCTURE SYSTEMS",
	teachers: [],
	id: 1235
},
{
	name: "CEE 6652",
	description: "INFRASTRU MGMT IT APPLIC",
	teachers: [],
	id: 1236
},
{
	name: "CEE 6720",
	description: "ENV MICROBIAL GENOMICS",
	teachers: [],
	id: 1237
},
{
	name: "CEE 6751",
	description: "PHYS PROP&RHEOLOGY-ROCKS",
	teachers: [],
	id: 1238
},
{
	name: "CEE 6754",
	description: "ENGR COMMUNICATION",
	teachers: [],
	id: 1239
},
{
	name: "CEE 6756",
	description: "SIGNALING MOLECULES",
	teachers: [],
	id: 1240
},
{
	name: "CEE 6761",
	description: "CONTAMINATED SED GEOCHEM",
	teachers: [],
	id: 1241
},
{
	name: "CEE 6764",
	description: "BIOL-ENV FLUID MECH LAB",
	teachers: [],
	id: 1242
},
{
	name: "CEE 6790",
	description: "AIR POLLUTION:PHYS&CHEM",
	teachers: [],
	id: 1243
},
{
	name: "CEE 6792",
	description: "AIR POLLUT'N METEOROLOGY",
	teachers: [],
	id: 1244
},
{
	name: "CEE 6793",
	description: "ATMOS BOUNDARY LAYER",
	teachers: [],
	id: 1245
},
{
	name: "CEE 6794",
	description: "ATMOS CHEM MODELING",
	teachers: [],
	id: 1246
},
{
	name: "CEE 6795",
	description: "ATMOSPHERIC AEROSOLS",
	teachers: [],
	id: 1247
},
{
	name: "CEE 6810",
	description: "LINEAR WAVE MECHANICS",
	teachers: [],
	id: 1248
},
{
	name: "CEE 6811",
	description: "NONLINEAR WAVE MECH",
	teachers: [],
	id: 1249
},
{
	name: "CEE 6821",
	description: "NEARSHORE HYDRODYNAMICS",
	teachers: [],
	id: 1250
},
{
	name: "CEE 6840",
	description: "COASTAL SEDIMENT TRANS",
	teachers: [],
	id: 1251
},
{
	name: "CEE 6842",
	description: "COASTAL ENG MEASUREMENTS",
	teachers: [],
	id: 1252
},
{
	name: "CEE 6XXX",
	description: "CIVIL/ENV ENGR ELECTIVE",
	teachers: [],
	id: 1253
},
{
	name: "CEE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 1254
},
{
	name: "CEE 7310",
	description: "MASTER'S THESIS&RESEARCH",
	teachers: [],
	id: 1255
},
{
	name: "CEE 7751",
	description: "COMPUTATIONAL FLUID MECH",
	teachers: [],
	id: 1256
},
{
	name: "CEE 7772",
	description: "FUND-FRACTURE MECHANICS",
	teachers: [],
	id: 1257
},
{
	name: "CEE 7773",
	description: "ADV FRACTURE MECHANICS",
	teachers: [],
	id: 1258
},
{
	name: "CEE 7774",
	description: "FATIGUE-MATERIALS&STRUCT",
	teachers: [],
	id: 1259
},
{
	name: "CEE 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 1260
},
{
	name: "CEE 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 1261
},
{
	name: "CEE 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 1262
},
{
	name: "CEE 7999",
	description: "DOCTORAL COMP EXAM PREP",
	teachers: [],
	id: 1263
},
{
	name: "CEE 8091",
	description: "CONSTRUCTION SEMINAR",
	teachers: [],
	id: 1264
},
{
	name: "CEE 8094",
	description: "ENVIRONMENT ENGR SEMINAR",
	teachers: [],
	id: 1265
},
{
	name: "CEE 8095",
	description: "RESEARCH SEMINAR IN ENVE",
	teachers: [],
	id: 1266
},
{
	name: "CEE 8096",
	description: "EFMWR SEMINAR",
	teachers: [],
	id: 1267
},
{
	name: "CEE 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1268
},
{
	name: "CEE 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1269
},
{
	name: "CEE 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1270
},
{
	name: "CEE 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1271
},
{
	name: "CEE 8815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1272
},
{
	name: "CEE 8824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1273
},
{
	name: "CEE 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1274
},
{
	name: "CEE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1275
},
{
	name: "CEE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1276
},
{
	name: "CEE 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1277
},
{
	name: "CEE 8950",
	description: "MASTER'S RESEARCH PROJ",
	teachers: [],
	id: 1278
},
{
	name: "CEE 8956",
	description: "MASTER'S RESEARCH PROB",
	teachers: [],
	id: 1279
},
{
	name: "CEE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1280
},
{
	name: "CEE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1281
},
{
	name: "CEE 8999",
	description: "PREP-DOCTOR DISSERTATION",
	teachers: [],
	id: 1282
},
{
	name: "CEE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 1283
},
{
	name: "CETL 2000",
	description: "UNDERGRADUATE TA PREP",
	teachers: [],
	id: 1284
},
{
	name: "CETL 2001",
	description: "FUND OF PEER TUTORING",
	teachers: [],
	id: 1285
},
{
	name: "CETL 2002",
	description: "FUND OF K-12 TUTORING",
	teachers: [],
	id: 1286
},
{
	name: "CETL 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1287
},
{
	name: "CETL 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1288
},
{
	name: "CETL 3000",
	description: "RESIDENCE LIFE SEMINAR",
	teachers: [],
	id: 1289
},
{
	name: "CETL 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1290
},
{
	name: "CETL 4001",
	description: "PRIN OF LEARN & TEACH I",
	teachers: [],
	id: 1291
},
{
	name: "CETL 4002",
	description: "PRIN OF LEARN & TEACH II",
	teachers: [],
	id: 1292
},
{
	name: "CETL 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1293
},
{
	name: "CETL 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1294
},
{
	name: "CETL 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1295
},
{
	name: "CETL 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1296
},
{
	name: "CETL 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1297
},
{
	name: "CETL 6490",
	description: "ADV ENVIRON DATA ANALY",
	teachers: [],
	id: 1298
},
{
	name: "CETL 8000",
	description: "GTA PREPARATION",
	teachers: [],
	id: 1299
},
{
	name: "CETL 8701",
	description: "CLASSROOM MANAGEMENT",
	teachers: [],
	id: 1300
},
{
	name: "CETL 8711",
	description: "STEP SUMMER TRAINING",
	teachers: [],
	id: 1301
},
{
	name: "CETL 8712",
	description: "STEP SEMINAR",
	teachers: [],
	id: 1302
},
{
	name: "CETL 8713",
	description: "TEACH&LEARN-HIGHER EDU",
	teachers: [],
	id: 1303
},
{
	name: "CETL 8714",
	description: "TEACH PRACTICUM-HIGHERED",
	teachers: [],
	id: 1304
},
{
	name: "CETL 8715",
	description: "TEACH PRACTICUM-HIGHERED",
	teachers: [],
	id: 1305
},
{
	name: "CETL 8717",
	description: "COURSE DESIGN-HIGHER EDU",
	teachers: [],
	id: 1306
},
{
	name: "CETL 8719",
	description: "TEACH IMMERSION-HIGHERED",
	teachers: [],
	id: 1307
},
{
	name: "CETL 8721",
	description: "ACADEMIC WRITING",
	teachers: [],
	id: 1308
},
{
	name: "CETL 8722",
	description: "INT'L ACADEMIC WRITING",
	teachers: [],
	id: 1309
},
{
	name: "CETL 8723",
	description: "ACAD WRIT INTNL GRADS",
	teachers: [],
	id: 1310
},
{
	name: "CETL 8731",
	description: "ACADEMIC PROFESSIONAL",
	teachers: [],
	id: 1311
},
{
	name: "CETL 8741",
	description: "ACADEMIC PRESENTATIONS",
	teachers: [],
	id: 1312
},
{
	name: "CETL 8791",
	description: "INSTRUC PRACTICE-INTL TA",
	teachers: [],
	id: 1313
},
{
	name: "CETL 8792",
	description: "ENGL/PEDEGOGY-INTL TAS",
	teachers: [],
	id: 1314
},
{
	name: "CETL 8793",
	description: "ENGLISH FOR INTL GRADS",
	teachers: [],
	id: 1315
},
{
	name: "CETL 8794",
	description: "ACADEMIC ENGLISH",
	teachers: [],
	id: 1316
},
{
	name: "CETL 8795",
	description: "ADV ENGLISH - INT'L GRADS",
	teachers: [],
	id: 1317
},
{
	name: "CETL 8796",
	description: "PRES SKILLS INTL GRADS",
	teachers: [],
	id: 1318
},
{
	name: "CETL 8797",
	description: "ORAL COMM INTL GRADS",
	teachers: [],
	id: 1319
},
{
	name: "CETL 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1320
},
{
	name: "CETL 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1321
},
{
	name: "CETL 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1322
},
{
	name: "CETL 8997",
	description: "STEP ASSISTANTSHIP",
	teachers: [],
	id: 1323
},
{
	name: "CHBE 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 1324
},
{
	name: "CHBE 1XXX",
	description: "CHEM ENGR ELECTIVE",
	teachers: [],
	id: 1325
},
{
	name: "CHBE 2100",
	description: "CHEM PROCESS PRINCIPLES",
	teachers: [],
	id: 1326
},
{
	name: "CHBE 2110",
	description: "CHEM ENGR. THERMO I",
	teachers: [],
	id: 1327
},
{
	name: "CHBE 2120",
	description: "CHE NUMERICAL MTHODS",
	teachers: [],
	id: 1328
},
{
	name: "CHBE 2130",
	description: "CHEM ENG THERMO I",
	teachers: [],
	id: 1329
},
{
	name: "CHBE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1330
},
{
	name: "CHBE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1331
},
{
	name: "CHBE 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1332
},
{
	name: "CHBE 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1333
},
{
	name: "CHBE 2XXX",
	description: "CHEM ENGR ELECTIVE",
	teachers: [],
	id: 1334
},
{
	name: "CHBE 3110",
	description: "CHEM ENGR. THERMO II",
	teachers: [],
	id: 1335
},
{
	name: "CHBE 3130",
	description: "CHEM ENG THERMO II",
	teachers: [],
	id: 1336
},
{
	name: "CHBE 3200",
	description: "TRANSPORT PROCESSES I",
	teachers: [],
	id: 1337
},
{
	name: "CHBE 3210",
	description: "TRANSPORT PROCESSES II",
	teachers: [],
	id: 1338
},
{
	name: "CHBE 3225",
	description: "SEPARATIONS PROCESSES",
	teachers: [],
	id: 1339
},
{
	name: "CHBE 3600",
	description: "ENGINEERING ETHICS",
	teachers: [],
	id: 1340
},
{
	name: "CHBE 3XXX",
	description: "CHEM ENGR ELECTIVE",
	teachers: [],
	id: 1341
},
{
	name: "CHBE 4020",
	description: "CHEM ENG-NANOSCALE SYS",
	teachers: [],
	id: 1342
},
{
	name: "CHBE 4050",
	description: "MICROELEC FABRICATION",
	teachers: [],
	id: 1343
},
{
	name: "CHBE 4200",
	description: "UNIT OPERATIONS LAB",
	teachers: [],
	id: 1344
},
{
	name: "CHBE 4210",
	description: "BIOPROCESS UNIT OPS",
	teachers: [],
	id: 1345
},
{
	name: "CHBE 4300",
	description: "KINETICS&REACTOR DSGN",
	teachers: [],
	id: 1346
},
{
	name: "CHBE 4310",
	description: "BIOPROCESS ENGINEERING",
	teachers: [],
	id: 1347
},
{
	name: "CHBE 4400",
	description: "CHEMICAL PROCESS CONTROL",
	teachers: [],
	id: 1348
},
{
	name: "CHBE 4411",
	description: "PROCESS CONTROL",
	teachers: [],
	id: 1349
},
{
	name: "CHBE 4412",
	description: "PROCESS CONTROL LAB",
	teachers: [],
	id: 1350
},
{
	name: "CHBE 4505",
	description: "PROCESS DESIGN&ECONOMICS",
	teachers: [],
	id: 1351
},
{
	name: "CHBE 4510",
	description: "PROC& PROD DESIGN& ECON",
	teachers: [],
	id: 1352
},
{
	name: "CHBE 4515",
	description: "CHEMICAL PROCESS SAFETY",
	teachers: [],
	id: 1353
},
{
	name: "CHBE 4520",
	description: "CAPSTONE CHBE DESIGN",
	teachers: [],
	id: 1354
},
{
	name: "CHBE 4525",
	description: "BIOPROCESS DESIGN & ECON",
	teachers: [],
	id: 1355
},
{
	name: "CHBE 4530",
	description: "CAPSTONE CHBE BIO-DESIGN",
	teachers: [],
	id: 1356
},
{
	name: "CHBE 4535",
	description: "CHEMICAL PRODUCT DESIGN",
	teachers: [],
	id: 1357
},
{
	name: "CHBE 4573",
	description: "PULPING & BLEACHING LAB",
	teachers: [],
	id: 1358
},
{
	name: "CHBE 4574",
	description: "PAPERMAKING&PULP LAB",
	teachers: [],
	id: 1359
},
{
	name: "CHBE 4600",
	description: "ENGINEER COMMUNICATION",
	teachers: [],
	id: 1360
},
{
	name: "CHBE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1361
},
{
	name: "CHBE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1362
},
{
	name: "CHBE 4710",
	description: "MICROFLUIDICS & BIO APPL.",
	teachers: [],
	id: 1363
},
{
	name: "CHBE 4752",
	description: "IC FABRICATION",
	teachers: [],
	id: 1364
},
{
	name: "CHBE 4755",
	description: "PACKAGING SUBSTRATE FAB",
	teachers: [],
	id: 1365
},
{
	name: "CHBE 4757",
	description: "BIOFLUID MECHANICS",
	teachers: [],
	id: 1366
},
{
	name: "CHBE 4758",
	description: "BIOSOLID MECHANICS",
	teachers: [],
	id: 1367
},
{
	name: "CHBE 4760",
	description: "BIOCATALYSIS",
	teachers: [],
	id: 1368
},
{
	name: "CHBE 4763",
	description: "PULPING & CHEM RECOVERY",
	teachers: [],
	id: 1369
},
{
	name: "CHBE 4764",
	description: "BLEACHING & PAPERMAKING",
	teachers: [],
	id: 1370
},
{
	name: "CHBE 4765",
	description: "DRUG DESIGN,DEVLPMNT&DELIVERY",
	teachers: [],
	id: 1371
},
{
	name: "CHBE 4770",
	description: "NUCLEAR CHEMICAL ENGR",
	teachers: [],
	id: 1372
},
{
	name: "CHBE 4775",
	description: "POLYMER SCIENCE & ENGR I",
	teachers: [],
	id: 1373
},
{
	name: "CHBE 4776",
	description: "POLYMER SCIENCE& ENGR II",
	teachers: [],
	id: 1374
},
{
	name: "CHBE 4781",
	description: "BIOMED INSTRUMENTATION",
	teachers: [],
	id: 1375
},
{
	name: "CHBE 4782",
	description: "BIOSYSTEMS ANALYSIS",
	teachers: [],
	id: 1376
},
{
	name: "CHBE 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 1377
},
{
	name: "CHBE 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 1378
},
{
	name: "CHBE 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 1379
},
{
	name: "CHBE 4801",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1380
},
{
	name: "CHBE 4802",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1381
},
{
	name: "CHBE 4803",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1382
},
{
	name: "CHBE 4804",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1383
},
{
	name: "CHBE 4805",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1384
},
{
	name: "CHBE 4806",
	description: "SPEC TOPIC-CHEMICAL ENGR",
	teachers: [],
	id: 1385
},
{
	name: "CHBE 4853",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1386
},
{
	name: "CHBE 4901",
	description: "SPEC PROBS-CHEMICAL ENGR",
	teachers: [],
	id: 1387
},
{
	name: "CHBE 4902",
	description: "SPEC PROBS-CHEMICAL ENGR",
	teachers: [],
	id: 1388
},
{
	name: "CHBE 4903",
	description: "SPEC PROBS-CHEMICAL ENGR",
	teachers: [],
	id: 1389
},
{
	name: "CHBE 4XXX",
	description: "CHEM ENGR ELECTIVE",
	teachers: [],
	id: 1390
},
{
	name: "CHBE 6001",
	description: "INTRODUCTION TO RESEARCH",
	teachers: [],
	id: 1391
},
{
	name: "CHBE 6003",
	description: "CHEM PROCESS SAFETY",
	teachers: [],
	id: 1392
},
{
	name: "CHBE 6004",
	description: "COMMUNICATION SKILLS",
	teachers: [],
	id: 1393
},
{
	name: "CHBE 6020",
	description: "CHEM ENG IN NANOSYSTEMS",
	teachers: [],
	id: 1394
},
{
	name: "CHBE 6050",
	description: "MICROELEC FABRICATION",
	teachers: [],
	id: 1395
},
{
	name: "CHBE 6100",
	description: "ADV CHE THERMODYNAMICS",
	teachers: [],
	id: 1396
},
{
	name: "CHBE 6110",
	description: "THERMO-LARGE MOLECULES",
	teachers: [],
	id: 1397
},
{
	name: "CHBE 6120",
	description: "MOLECULAR MODELING",
	teachers: [],
	id: 1398
},
{
	name: "CHBE 6130",
	description: "ELECTROCHEMICAL ENGR",
	teachers: [],
	id: 1399
},
{
	name: "CHBE 6200",
	description: "TRANSPORT PHENOMENA",
	teachers: [],
	id: 1400
},
{
	name: "CHBE 6210",
	description: "FLUID MECH TWO-PHSE FLOW",
	teachers: [],
	id: 1401
},
{
	name: "CHBE 6220",
	description: "COMPUTATIONAL FLUID DYN",
	teachers: [],
	id: 1402
},
{
	name: "CHBE 6229",
	description: "INTRO TO MEMS",
	teachers: [],
	id: 1403
},
{
	name: "CHBE 6230",
	description: "INDUSTRIAL EMISSION CTRL",
	teachers: [],
	id: 1404
},
{
	name: "CHBE 6231",
	description: "ENV MODELING-FOREST IND",
	teachers: [],
	id: 1405
},
{
	name: "CHBE 6232",
	description: "CHEME PROCESS PULP PAPER",
	teachers: [],
	id: 1406
},
{
	name: "CHBE 6240",
	description: "SEPARATION PROCESSES",
	teachers: [],
	id: 1407
},
{
	name: "CHBE 6250",
	description: "MASS TRANSPORT",
	teachers: [],
	id: 1408
},
{
	name: "CHBE 6260",
	description: "MASS TRANSFER",
	teachers: [],
	id: 1409
},
{
	name: "CHBE 62X0",
	description: "XFER-SEPARATION PROCESS",
	teachers: [],
	id: 1410
},
{
	name: "CHBE 62X1",
	description: "XFER-ENV MOD FOREST IND",
	teachers: [],
	id: 1411
},
{
	name: "CHBE 6300",
	description: "KINETICS & REACTOR DSGN",
	teachers: [],
	id: 1412
},
{
	name: "CHBE 6310",
	description: "CHEMICAL KINETICS",
	teachers: [],
	id: 1413
},
{
	name: "CHBE 6320",
	description: "HETEROGENEOUS CATALYSIS",
	teachers: [],
	id: 1414
},
{
	name: "CHBE 6400",
	description: "ADV PROCESS CONTROL",
	teachers: [],
	id: 1415
},
{
	name: "CHBE 6410",
	description: "DYN BEHAVIOR-PROCESS SYS",
	teachers: [],
	id: 1416
},
{
	name: "CHBE 6460",
	description: "MEMS DEVICES",
	teachers: [],
	id: 1417
},
{
	name: "CHBE 6500",
	description: "MATH MODEL-CHEM PROCESS",
	teachers: [],
	id: 1418
},
{
	name: "CHBE 6600",
	description: "POLYMER REACTION ENGR",
	teachers: [],
	id: 1419
},
{
	name: "CHBE 6608",
	description: "MICROLITHOGRAPHY",
	teachers: [],
	id: 1420
},
{
	name: "CHBE 6609",
	description: "POLYM-MICORELECTRONICS",
	teachers: [],
	id: 1421
},
{
	name: "CHBE 6634",
	description: "WET END PROCESSING-PAPER",
	teachers: [],
	id: 1422
},
{
	name: "CHBE 66X0",
	description: "XFER-PULP-PAPER MFG I",
	teachers: [],
	id: 1423
},
{
	name: "CHBE 66X1",
	description: "XFER-PULP-PAPER MFG II",
	teachers: [],
	id: 1424
},
{
	name: "CHBE 66X4",
	description: "XFER-WET END PROC-PAPER",
	teachers: [],
	id: 1425
},
{
	name: "CHBE 66X7",
	description: "TRANSFER-BIOPROCESSING",
	teachers: [],
	id: 1426
},
{
	name: "CHBE 6701",
	description: "FOUND FOREST BIOPRODUCTS",
	teachers: [],
	id: 1427
},
{
	name: "CHBE 6710",
	description: "MICROFLUIDICS & APPL",
	teachers: [],
	id: 1428
},
{
	name: "CHBE 6741",
	description: "PULP & PAPER MFG I",
	teachers: [],
	id: 1429
},
{
	name: "CHBE 6742",
	description: "PULP & PAPER MFG II",
	teachers: [],
	id: 1430
},
{
	name: "CHBE 6750",
	description: "PREP&REACTIONS-POLYMERS",
	teachers: [],
	id: 1431
},
{
	name: "CHBE 6751",
	description: "PHYS CHEM-POLY SOLUTIONS",
	teachers: [],
	id: 1432
},
{
	name: "CHBE 6752",
	description: "POLYMER CHARACTERIZATION",
	teachers: [],
	id: 1433
},
{
	name: "CHBE 6759",
	description: "PLASMA PROCESSING",
	teachers: [],
	id: 1434
},
{
	name: "CHBE 6760",
	description: "BIOCATALYSIS",
	teachers: [],
	id: 1435
},
{
	name: "CHBE 6765",
	description: "DRUG DESIGN,DEVLPMNT&DELIVERY",
	teachers: [],
	id: 1436
},
{
	name: "CHBE 6768",
	description: "POLYMER STRUCTURE& PROPS",
	teachers: [],
	id: 1437
},
{
	name: "CHBE 6774",
	description: "BIOMATERIAL:STRUCT&FUNCT",
	teachers: [],
	id: 1438
},
{
	name: "CHBE 6777",
	description: "ADVANCED BIOMATERIALS",
	teachers: [],
	id: 1439
},
{
	name: "CHBE 6778",
	description: "INTRO TO BIOMATERIALS",
	teachers: [],
	id: 1440
},
{
	name: "CHBE 6779",
	description: "BIOPROCESS ENGINEERING",
	teachers: [],
	id: 1441
},
{
	name: "CHBE 6782",
	description: "CELLULAR ENGINEERING",
	teachers: [],
	id: 1442
},
{
	name: "CHBE 6784",
	description: "CARDIOVASCULAR BIOMECH",
	teachers: [],
	id: 1443
},
{
	name: "CHBE 6789",
	description: "TECHNOLOGY VENTURES",
	teachers: [],
	id: 1444
},
{
	name: "CHBE 6793",
	description: "SYSTEMS PATHOPHYSIOLOGY",
	teachers: [],
	id: 1445
},
{
	name: "CHBE 6794",
	description: "TISSUE ENGINEERING",
	teachers: [],
	id: 1446
},
{
	name: "CHBE 6799",
	description: "LEGAL ISSUES-TECH TRANSF",
	teachers: [],
	id: 1447
},
{
	name: "CHBE 6XXX",
	description: "CHEM ENGR ELECTIVE",
	teachers: [],
	id: 1448
},
{
	name: "CHBE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 1449
},
{
	name: "CHBE 7650",
	description: "CHEMISTRY OF POLYMERS",
	teachers: [],
	id: 1450
},
{
	name: "CHBE 7757",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 1451
},
{
	name: "CHBE 7771",
	description: "MECH-POLYMER SOLID&FLUID",
	teachers: [],
	id: 1452
},
{
	name: "CHBE 7772",
	description: "FUND-FRACTURE MECHANICS",
	teachers: [],
	id: 1453
},
{
	name: "CHBE 7773",
	description: "ADV FRACTURE MECHANICS",
	teachers: [],
	id: 1454
},
{
	name: "CHBE 7774",
	description: "FATIGUE-MATERIALS&STRUCT",
	teachers: [],
	id: 1455
},
{
	name: "CHBE 7775",
	description: "FRACT&FATIGUE-STRUCTURES",
	teachers: [],
	id: 1456
},
{
	name: "CHBE 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 1457
},
{
	name: "CHBE 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 1458
},
{
	name: "CHBE 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 1459
},
{
	name: "CHBE 8001",
	description: "SEMINAR - CHEMICAL ENGR",
	teachers: [],
	id: 1460
},
{
	name: "CHBE 8002",
	description: "SEMINAR - CHEMICAL ENGR",
	teachers: [],
	id: 1461
},
{
	name: "CHBE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1462
},
{
	name: "CHBE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1463
},
{
	name: "CHBE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1464
},
{
	name: "CHBE 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1465
},
{
	name: "CHBE 88X2",
	description: "XFER - SPECIAL TOPICS",
	teachers: [],
	id: 1466
},
{
	name: "CHBE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1467
},
{
	name: "CHBE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1468
},
{
	name: "CHBE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1469
},
{
	name: "CHBE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 1470
},
{
	name: "CHEM 1211K",
	description: "CHEMICAL PRINCIPLES I",
	teachers: [],
	id: 1471
},
{
	name: "CHEM 1212K",
	description: "CHEMICAL PRINCIPLES II",
	teachers: [],
	id: 1472
},
{
	name: "CHEM 12X1",
	description: "TRANSFER GENERAL CHEM",
	teachers: [],
	id: 1473
},
{
	name: "CHEM 1310",
	description: "GENERAL CHEMISTRY",
	teachers: [],
	id: 1474
},
{
	name: "CHEM 1315",
	description: "SURVEY OF ORGANIC CHEM",
	teachers: [],
	id: 1475
},
{
	name: "CHEM 1XXX",
	description: "CHEMISTRY ELECTIVE",
	teachers: [],
	id: 1476
},
{
	name: "CHEM 2211",
	description: "QUANTITATIVE ANALYSIS",
	teachers: [],
	id: 1477
},
{
	name: "CHEM 2311",
	description: "ORGANIC CHEMISTRY I",
	teachers: [],
	id: 1478
},
{
	name: "CHEM 2312",
	description: "ORGANIC CHEMISTRY II",
	teachers: [],
	id: 1479
},
{
	name: "CHEM 2313",
	description: "ORGANIC/BIOORGANIC CHEM",
	teachers: [],
	id: 1480
},
{
	name: "CHEM 2380",
	description: "SYNTHESIS LAB I",
	teachers: [],
	id: 1481
},
{
	name: "CHEM 2694",
	description: "INTERN ASSISTANTSHIP",
	teachers: [],
	id: 1482
},
{
	name: "CHEM 2695",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 1483
},
{
	name: "CHEM 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1484
},
{
	name: "CHEM 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1485
},
{
	name: "CHEM 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1486
},
{
	name: "CHEM 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1487
},
{
	name: "CHEM 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1488
},
{
	name: "CHEM 2901",
	description: "SPECIAL PROB - CHEMISTRY",
	teachers: [],
	id: 1489
},
{
	name: "CHEM 2902",
	description: "SPECIAL PROB - CHEMISTRY",
	teachers: [],
	id: 1490
},
{
	name: "CHEM 2903",
	description: "SPECIAL PROB - CHEMISTRY",
	teachers: [],
	id: 1491
},
{
	name: "CHEM 2XXX",
	description: "CHEMISTRY ELECTIVE",
	teachers: [],
	id: 1492
},
{
	name: "CHEM 3111",
	description: "INORGANIC CHEMISTRY",
	teachers: [],
	id: 1493
},
{
	name: "CHEM 3211",
	description: "ANALYTICAL CHEMISTRY",
	teachers: [],
	id: 1494
},
{
	name: "CHEM 3281",
	description: "INSTRUMENTAL ANALYSIS",
	teachers: [],
	id: 1495
},
{
	name: "CHEM 3371",
	description: "ORGANIC CHEM LAB",
	teachers: [],
	id: 1496
},
{
	name: "CHEM 3380",
	description: "SYNTHESIS LAB II",
	teachers: [],
	id: 1497
},
{
	name: "CHEM 3411",
	description: "PHYSICAL CHEMISTRY I",
	teachers: [],
	id: 1498
},
{
	name: "CHEM 3412",
	description: "PHYSICAL CHEMISTRY II",
	teachers: [],
	id: 1499
},
{
	name: "CHEM 3481",
	description: "PHYSICAL CHEM LAB I",
	teachers: [],
	id: 1500
},
{
	name: "CHEM 3482",
	description: "PHYSICAL CHEM LAB II",
	teachers: [],
	id: 1501
},
{
	name: "CHEM 3511",
	description: "SURVEY OF BIOCHEMISTRY",
	teachers: [],
	id: 1502
},
{
	name: "CHEM 3700",
	description: "ALTERNATIVE ENERGY",
	teachers: [],
	id: 1503
},
{
	name: "CHEM 3XXX",
	description: "CHEMISTRY ELECTIVE",
	teachers: [],
	id: 1504
},
{
	name: "CHEM 4113",
	description: "INORG ENERGY CONVERSION",
	teachers: [],
	id: 1505
},
{
	name: "CHEM 4311",
	description: "ADV ORGANIC CHEM",
	teachers: [],
	id: 1506
},
{
	name: "CHEM 4341",
	description: "APPLIED SPECTROSCOPY",
	teachers: [],
	id: 1507
},
{
	name: "CHEM 4401",
	description: "MOLECULAR SPECTROSCOPY",
	teachers: [],
	id: 1508
},
{
	name: "CHEM 4452",
	description: "SOLID STATE CHEMISTRY",
	teachers: [],
	id: 1509
},
{
	name: "CHEM 4511",
	description: "BIOCHEMISTRY I",
	teachers: [],
	id: 1510
},
{
	name: "CHEM 4512",
	description: "BIOCHEMISTRY II",
	teachers: [],
	id: 1511
},
{
	name: "CHEM 4521",
	description: "BIOPHYSICAL CHEMISTRY",
	teachers: [],
	id: 1512
},
{
	name: "CHEM 4581",
	description: "BIOCHEMISTRY LAB I",
	teachers: [],
	id: 1513
},
{
	name: "CHEM 4582",
	description: "BIOCHEMISTRY LAB II",
	teachers: [],
	id: 1514
},
{
	name: "CHEM 4601",
	description: "CHEMISTRY SEMINAR",
	teachers: [],
	id: 1515
},
{
	name: "CHEM 4684",
	description: "ADVANCED CHEMISTRY LAB",
	teachers: [],
	id: 1516
},
{
	name: "CHEM 4694",
	description: "INTERN ASSISTANTSHIP",
	teachers: [],
	id: 1517
},
{
	name: "CHEM 4695",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 1518
},
{
	name: "CHEM 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1519
},
{
	name: "CHEM 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1520
},
{
	name: "CHEM 4740",
	description: "ATMOSPHERIC CHEMISTRY",
	teachers: [],
	id: 1521
},
{
	name: "CHEM 4760",
	description: "BIOCATALYSIS",
	teachers: [],
	id: 1522
},
{
	name: "CHEM 4765",
	description: "DRUG DESIGN,DEVLPMNT&DELIVERY",
	teachers: [],
	id: 1523
},
{
	name: "CHEM 4775",
	description: "POLYMER SCIENCE & ENGR I",
	teachers: [],
	id: 1524
},
{
	name: "CHEM 4776",
	description: "POLYMER SCIENCE& ENGR II",
	teachers: [],
	id: 1525
},
{
	name: "CHEM 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1526
},
{
	name: "CHEM 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1527
},
{
	name: "CHEM 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1528
},
{
	name: "CHEM 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1529
},
{
	name: "CHEM 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1530
},
{
	name: "CHEM 4901",
	description: "SPECIAL PROBLEMS IN CHEM",
	teachers: [],
	id: 1531
},
{
	name: "CHEM 4902",
	description: "SPECIAL PROBLEMS IN CHEM",
	teachers: [],
	id: 1532
},
{
	name: "CHEM 4903",
	description: "SPECIAL PROBLEMS IN CHEM",
	teachers: [],
	id: 1533
},
{
	name: "CHEM 4XXX",
	description: "CHEMISTRY ELECTIVE",
	teachers: [],
	id: 1534
},
{
	name: "CHEM 6170",
	description: "INORGANIC CHEM I",
	teachers: [],
	id: 1535
},
{
	name: "CHEM 6171",
	description: "INORGANIC CHEM II",
	teachers: [],
	id: 1536
},
{
	name: "CHEM 6172",
	description: "PHYSICAL METH-INORG CHEM",
	teachers: [],
	id: 1537
},
{
	name: "CHEM 6181",
	description: "CHEMICAL CRYSTALLOGRAPHY",
	teachers: [],
	id: 1538
},
{
	name: "CHEM 6182",
	description: "CHEM OF THE SOLID STATE",
	teachers: [],
	id: 1539
},
{
	name: "CHEM 6183",
	description: "ORGANOMETALLIC CHEMISTRY",
	teachers: [],
	id: 1540
},
{
	name: "CHEM 6271",
	description: "ANALYTICAL CHEM I",
	teachers: [],
	id: 1541
},
{
	name: "CHEM 6272",
	description: "ANALYTICAL CHEM II",
	teachers: [],
	id: 1542
},
{
	name: "CHEM 6281",
	description: "MASS SPECTROMETRY",
	teachers: [],
	id: 1543
},
{
	name: "CHEM 6282",
	description: "CHEMICAL SENSORS",
	teachers: [],
	id: 1544
},
{
	name: "CHEM 6283",
	description: "ELECTROANALYTICAL CHEM",
	teachers: [],
	id: 1545
},
{
	name: "CHEM 6284",
	description: "ENVIRON ANALYTICAL CHEM",
	teachers: [],
	id: 1546
},
{
	name: "CHEM 6285",
	description: "ANALYTICAL SPECTROSCOPY",
	teachers: [],
	id: 1547
},
{
	name: "CHEM 6287",
	description: "SCANNED PROBE TECHNIQUES",
	teachers: [],
	id: 1548
},
{
	name: "CHEM 6371",
	description: "ORGANIC COMPOUNDS",
	teachers: [],
	id: 1549
},
{
	name: "CHEM 6372",
	description: "PHYSICAL ORGANIC CHEM",
	teachers: [],
	id: 1550
},
{
	name: "CHEM 6373",
	description: "ORGANIC SYNTHESIS",
	teachers: [],
	id: 1551
},
{
	name: "CHEM 6381",
	description: "ADV ORGANIC SYNTHESIS",
	teachers: [],
	id: 1552
},
{
	name: "CHEM 6382",
	description: "COMPUT METHODS-ORG CHEM",
	teachers: [],
	id: 1553
},
{
	name: "CHEM 6471",
	description: "CHEM THERMO & KINETICS",
	teachers: [],
	id: 1554
},
{
	name: "CHEM 6472",
	description: "QUANT CHEM & MOLEC SPEC",
	teachers: [],
	id: 1555
},
{
	name: "CHEM 6481",
	description: "STATISTICAL MECHANICS",
	teachers: [],
	id: 1556
},
{
	name: "CHEM 6482",
	description: "KINETICS&REACTION DYNAM",
	teachers: [],
	id: 1557
},
{
	name: "CHEM 6483",
	description: "CHEM-ELECTRONIC MATERIAL",
	teachers: [],
	id: 1558
},
{
	name: "CHEM 6484",
	description: "CHEM-OPTICAL ORG MAT",
	teachers: [],
	id: 1559
},
{
	name: "CHEM 6485",
	description: "COMPUTATIONAL CHEMISTRY",
	teachers: [],
	id: 1560
},
{
	name: "CHEM 6491",
	description: "QUANTUM MECHANICS",
	teachers: [],
	id: 1561
},
{
	name: "CHEM 6492",
	description: "MOLECULAR SPECTROSCOPY",
	teachers: [],
	id: 1562
},
{
	name: "CHEM 6501",
	description: "BIOCHEMISTRY I",
	teachers: [],
	id: 1563
},
{
	name: "CHEM 6502",
	description: "BIOCHEMISTRY II",
	teachers: [],
	id: 1564
},
{
	name: "CHEM 6571",
	description: "ENZYMOLOGY AND METABOLISM",
	teachers: [],
	id: 1565
},
{
	name: "CHEM 6572",
	description: "MACROMOLECULAR STRUCTURE",
	teachers: [],
	id: 1566
},
{
	name: "CHEM 6573",
	description: "MOLECULAR BIOCHEMISTRY",
	teachers: [],
	id: 1567
},
{
	name: "CHEM 6581",
	description: "PROTEIN CRYSTALLOGRAPHY",
	teachers: [],
	id: 1568
},
{
	name: "CHEM 6582",
	description: "BIOPHYSICAL CHEMISTRY",
	teachers: [],
	id: 1569
},
{
	name: "CHEM 6583",
	description: "DRUG DESIGN & DISCOVERY",
	teachers: [],
	id: 1570
},
{
	name: "CHEM 6584",
	description: "CONTEMPORARY BIOCHEM",
	teachers: [],
	id: 1571
},
{
	name: "CHEM 6750",
	description: "PREP&REACTIONS-POLYMERS",
	teachers: [],
	id: 1572
},
{
	name: "CHEM 6751",
	description: "PHYS CHEM-POLY SOLUTIONS",
	teachers: [],
	id: 1573
},
{
	name: "CHEM 6752",
	description: "POLYMER CHARACTERIZATION",
	teachers: [],
	id: 1574
},
{
	name: "CHEM 6755",
	description: "THEORETICAL CHEM-POLYMER",
	teachers: [],
	id: 1575
},
{
	name: "CHEM 6756",
	description: "SIGNALING MOLECULES",
	teachers: [],
	id: 1576
},
{
	name: "CHEM 6760",
	description: "BIOCATALYSIS",
	teachers: [],
	id: 1577
},
{
	name: "CHEM 6765",
	description: "DRUG DEVELOPMENT",
	teachers: [],
	id: 1578
},
{
	name: "CHEM 6XXX",
	description: "CHEMISTRY ELECTIVE",
	teachers: [],
	id: 1579
},
{
	name: "CHEM 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 1580
},
{
	name: "CHEM 7001",
	description: "INTRO TO RESEARCH",
	teachers: [],
	id: 1581
},
{
	name: "CHEM 8000",
	description: "SEMINAR - CHEMISTRY",
	teachers: [],
	id: 1582
},
{
	name: "CHEM 8001",
	description: "FACULTY SEMINAR",
	teachers: [],
	id: 1583
},
{
	name: "CHEM 8002",
	description: "INFO RESOUR-CHEM&BIOCHEM",
	teachers: [],
	id: 1584
},
{
	name: "CHEM 8003",
	description: "STUDENT SEMINAR",
	teachers: [],
	id: 1585
},
{
	name: "CHEM 8813",
	description: "SPEC TOP-INORGANIC CHEM",
	teachers: [],
	id: 1586
},
{
	name: "CHEM 8823",
	description: "SPEC TOP-ANALYTICAL CHEM",
	teachers: [],
	id: 1587
},
{
	name: "CHEM 8833",
	description: "SPEC TOP-ORGANIC CHEM",
	teachers: [],
	id: 1588
},
{
	name: "CHEM 8843",
	description: "SPEC TOP-PHYSICAL CHEM",
	teachers: [],
	id: 1589
},
{
	name: "CHEM 8853",
	description: "SPEC TOPICS-BIOCHEMISTRY",
	teachers: [],
	id: 1590
},
{
	name: "CHEM 8873",
	description: "SPEC TOP-POLYMER CHEM",
	teachers: [],
	id: 1591
},
{
	name: "CHEM 88X2",
	description: "XFER-SPEC TOP-ORG CHEM",
	teachers: [],
	id: 1592
},
{
	name: "CHEM 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1593
},
{
	name: "CHEM 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1594
},
{
	name: "CHEM 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1595
},
{
	name: "CHEM 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1596
},
{
	name: "CHEM 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1597
},
{
	name: "CHEM 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 1598
},
{
	name: "CHIN 1001",
	description: "ELEMENTARY CHINESE I",
	teachers: [],
	id: 1599
},
{
	name: "CHIN 1002",
	description: "ELEMENTARY CHINESE II",
	teachers: [],
	id: 1600
},
{
	name: "CHIN 1011",
	description: "ACCELERATED ELEM CHIN I",
	teachers: [],
	id: 1601
},
{
	name: "CHIN 1012",
	description: "ACCELERATED ELEM CHIN II",
	teachers: [],
	id: 1602
},
{
	name: "CHIN 10X1",
	description: "TRANS ELEMENTARY CHINESE I",
	teachers: [],
	id: 1603
},
{
	name: "CHIN 10X2",
	description: "TRANS ELEMENTARY CHINESE II",
	teachers: [],
	id: 1604
},
{
	name: "CHIN 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1605
},
{
	name: "CHIN 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1606
},
{
	name: "CHIN 1XXX",
	description: "CHINESE ELECTIVE",
	teachers: [],
	id: 1607
},
{
	name: "CHIN 2001",
	description: "INTERMEDIATE CHINESE I",
	teachers: [],
	id: 1608
},
{
	name: "CHIN 2002",
	description: "INTERMEDIATE CHINESE II",
	teachers: [],
	id: 1609
},
{
	name: "CHIN 2011",
	description: "ACCELERATED INTER CHIN I",
	teachers: [],
	id: 1610
},
{
	name: "CHIN 2012",
	description: "ACCELERATED INTM CHIN II",
	teachers: [],
	id: 1611
},
{
	name: "CHIN 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1612
},
{
	name: "CHIN 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1613
},
{
	name: "CHIN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1614
},
{
	name: "CHIN 2XXX",
	description: "CHINESE ELECTIVE",
	teachers: [],
	id: 1615
},
{
	name: "CHIN 3003",
	description: "INTERMEDIATE CHINESE III",
	teachers: [],
	id: 1616
},
{
	name: "CHIN 3004",
	description: "ADVANCED CHINESE I",
	teachers: [],
	id: 1617
},
{
	name: "CHIN 3021",
	description: "CHIN SOCIETY & CULTURE I",
	teachers: [],
	id: 1618
},
{
	name: "CHIN 3022",
	description: "CHIN SOCIETY& CULTURE II",
	teachers: [],
	id: 1619
},
{
	name: "CHIN 3691",
	description: "CHINESE CURRENT EVENTS",
	teachers: [],
	id: 1620
},
{
	name: "CHIN 3692",
	description: "BUSINESS CHINESE",
	teachers: [],
	id: 1621
},
{
	name: "CHIN 3693",
	description: "CONVERSATION PRACTICUM",
	teachers: [],
	id: 1622
},
{
	name: "CHIN 3696",
	description: "ECO DEV & SUSTAINABILITY",
	teachers: [],
	id: 1623
},
{
	name: "CHIN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1624
},
{
	name: "CHIN 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1625
},
{
	name: "CHIN 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1626
},
{
	name: "CHIN 3XXX",
	description: "CHINESE ELECTIVE",
	teachers: [],
	id: 1627
},
{
	name: "CHIN 4003",
	description: "ADVANCED CHINESE II",
	teachers: [],
	id: 1628
},
{
	name: "CHIN 4004",
	description: "ADVANCED CHINESE III",
	teachers: [],
	id: 1629
},
{
	name: "CHIN 4006",
	description: "INTERCULTURAL COMMUNICTN",
	teachers: [],
	id: 1630
},
{
	name: "CHIN 4021",
	description: "ADV LANG MUSIC & CULTURE",
	teachers: [],
	id: 1631
},
{
	name: "CHIN 4022",
	description: "KUNGFU FICTION/POP CULT",
	teachers: [],
	id: 1632
},
{
	name: "CHIN 4023",
	description: "STRATEGY & ART OF WAR",
	teachers: [],
	id: 1633
},
{
	name: "CHIN 4031",
	description: "CHIN-LANGUAGE CINEMA",
	teachers: [],
	id: 1634
},
{
	name: "CHIN 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 1635
},
{
	name: "CHIN 4695",
	description: "CHINESE INTERNSHIP",
	teachers: [],
	id: 1636
},
{
	name: "CHIN 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1637
},
{
	name: "CHIN 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1638
},
{
	name: "CHIN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1639
},
{
	name: "CHIN 4823",
	description: "SPECIAL TOICS",
	teachers: [],
	id: 1640
},
{
	name: "CHIN 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1641
},
{
	name: "CHIN 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1642
},
{
	name: "CHIN 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1643
},
{
	name: "CHIN 4XXX",
	description: "CHINESE ELECTIVE",
	teachers: [],
	id: 1644
},
{
	name: "COA 1011",
	description: "FUND DESIGN&BUILT ENV I",
	teachers: [],
	id: 1645
},
{
	name: "COA 1012",
	description: "FUND DESIGN&BUILT ENV II",
	teachers: [],
	id: 1646
},
{
	name: "COA 1060",
	description: "INTRO-DESIGN&BUILT ENV",
	teachers: [],
	id: 1647
},
{
	name: "COA 2241",
	description: "HISTORY OF ART I",
	teachers: [],
	id: 1648
},
{
	name: "COA 2242",
	description: "HISTORY OF ART II",
	teachers: [],
	id: 1649
},
{
	name: "COA 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1650
},
{
	name: "COA 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1651
},
{
	name: "COA 3114",
	description: "ARCHITECTURE IN GREECE",
	teachers: [],
	id: 1652
},
{
	name: "COA 3115",
	description: "ART & ARCH IN ITALY I",
	teachers: [],
	id: 1653
},
{
	name: "COA 3116",
	description: "ART & ARCH IN ITALY II",
	teachers: [],
	id: 1654
},
{
	name: "COA 4000",
	description: "FURNITURE WORKSHOP",
	teachers: [],
	id: 1655
},
{
	name: "COA 4010",
	description: "CONSTRUCTION IND HISTORY",
	teachers: [],
	id: 1656
},
{
	name: "COA 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1657
},
{
	name: "COA 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1658
},
{
	name: "COA 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1659
},
{
	name: "COA 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1660
},
{
	name: "COA 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1661
},
{
	name: "COA 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1662
},
{
	name: "COA 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1663
},
{
	name: "COA 6010",
	description: "CONSTRUCTION IND HISTORY",
	teachers: [],
	id: 1664
},
{
	name: "COA 6011",
	description: "URBAN DESIGN LABORATORY",
	teachers: [],
	id: 1665
},
{
	name: "COA 6114",
	description: "ARCHITECTURE IN GREECE",
	teachers: [],
	id: 1666
},
{
	name: "COA 6115",
	description: "ART & ARCH IN ITALY I",
	teachers: [],
	id: 1667
},
{
	name: "COA 6116",
	description: "ART AND ARCH IN ITALY II",
	teachers: [],
	id: 1668
},
{
	name: "COA 6120",
	description: "RETROFITTING SUBURBIA",
	teachers: [],
	id: 1669
},
{
	name: "COA 6151",
	description: "HISTORY OF URBAN FORM",
	teachers: [],
	id: 1670
},
{
	name: "COA 6763",
	description: "DESIGN OF ENVIRONMENTS",
	teachers: [],
	id: 1671
},
{
	name: "COA 6764",
	description: "GEOMETRIC MODELING",
	teachers: [],
	id: 1672
},
{
	name: "COA 7011",
	description: "URBAN DESIGN STUDIO I",
	teachers: [],
	id: 1673
},
{
	name: "COA 7012",
	description: "URBAN DESIGN STUDIO II",
	teachers: [],
	id: 1674
},
{
	name: "COA 8000",
	description: "DOCTORAL SEMINAR",
	teachers: [],
	id: 1675
},
{
	name: "COA 8530",
	description: "PHD PLANNING SEMINAR",
	teachers: [],
	id: 1676
},
{
	name: "COA 8600",
	description: "GENESIS OF ARCHITECTURE",
	teachers: [],
	id: 1677
},
{
	name: "COA 8610",
	description: "THOUGHT HELLENIC-1830'S",
	teachers: [],
	id: 1678
},
{
	name: "COA 8612",
	description: "THOUGHT 1830'S-20TH CENT",
	teachers: [],
	id: 1679
},
{
	name: "COA 8620",
	description: "DESIGN-AMERICAN SPACE",
	teachers: [],
	id: 1680
},
{
	name: "COA 8625",
	description: "THEORIES OF INQUIRY",
	teachers: [],
	id: 1681
},
{
	name: "COA 8630",
	description: "ARCH, SPACE & CULTURE",
	teachers: [],
	id: 1682
},
{
	name: "COA 8635",
	description: "ARCHITECTURE AND POLICY",
	teachers: [],
	id: 1683
},
{
	name: "COA 8640",
	description: "PSY FOR ARCHITECTURE",
	teachers: [],
	id: 1684
},
{
	name: "COA 8645",
	description: "ANALYTICAL MODELS",
	teachers: [],
	id: 1685
},
{
	name: "COA 8650",
	description: "DESCRIPTIONS OF DESIGN",
	teachers: [],
	id: 1686
},
{
	name: "COA 8672",
	description: "DESIGN COMPUTATION",
	teachers: [],
	id: 1687
},
{
	name: "COA 8674",
	description: "MULTIMEDIA DESIGN",
	teachers: [],
	id: 1688
},
{
	name: "COA 8676",
	description: "DESIGN & ENGR DATABASES",
	teachers: [],
	id: 1689
},
{
	name: "COA 8680",
	description: "PERFORMANCE ASPECTS",
	teachers: [],
	id: 1690
},
{
	name: "COA 8685",
	description: "BUILDING SIMULATION",
	teachers: [],
	id: 1691
},
{
	name: "COA 8690",
	description: "BUILDING MODELS",
	teachers: [],
	id: 1692
},
{
	name: "COA 8811",
	description: "SPEC TOPIC-ARCH/PLANNING",
	teachers: [],
	id: 1693
},
{
	name: "COA 8812",
	description: "SPEC TOPIC-ARCH/PLANNING",
	teachers: [],
	id: 1694
},
{
	name: "COA 8813",
	description: "SPEC TOPIC-ARCH/PLANNING",
	teachers: [],
	id: 1695
},
{
	name: "COA 8821",
	description: "SPEC TOP-ARCH & BEHAVIOR",
	teachers: [],
	id: 1696
},
{
	name: "COA 8822",
	description: "SPEC TOP-ARCH & BEHAVIOR",
	teachers: [],
	id: 1697
},
{
	name: "COA 8823",
	description: "SPEC TOP-ARCH & BEHAVIOR",
	teachers: [],
	id: 1698
},
{
	name: "COA 8831",
	description: "SPEC TOPIC-DESIGN & TECH",
	teachers: [],
	id: 1699
},
{
	name: "COA 8832",
	description: "SPEC TOPIC-DESIGN & TECH",
	teachers: [],
	id: 1700
},
{
	name: "COA 8833",
	description: "SPEC TOPIC-DESIGN & TECH",
	teachers: [],
	id: 1701
},
{
	name: "COA 8841",
	description: "SPEC TOP-DSGN COMPUTING",
	teachers: [],
	id: 1702
},
{
	name: "COA 8842",
	description: "SPEC TOP-DSGN COMPUTING",
	teachers: [],
	id: 1703
},
{
	name: "COA 8843",
	description: "SPEC TOP-DSGN COMPUTING",
	teachers: [],
	id: 1704
},
{
	name: "COA 8851",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1705
},
{
	name: "COA 8852",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1706
},
{
	name: "COA 8853",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1707
},
{
	name: "COA 8861",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1708
},
{
	name: "COA 8862",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1709
},
{
	name: "COA 8863",
	description: "SPEC TOPIC-HIST & THEORY",
	teachers: [],
	id: 1710
},
{
	name: "COA 8871",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1711
},
{
	name: "COA 8872",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1712
},
{
	name: "COA 8873",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1713
},
{
	name: "COA 8874",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1714
},
{
	name: "COA 8875",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1715
},
{
	name: "COA 8876",
	description: "SPEC TOPICS - URB DESIGN",
	teachers: [],
	id: 1716
},
{
	name: "COA 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1717
},
{
	name: "COA 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1718
},
{
	name: "COA 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1719
},
{
	name: "COA 8904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1720
},
{
	name: "COA 8996",
	description: "QUALIFYING PAPER",
	teachers: [],
	id: 1721
},
{
	name: "COA 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1722
},
{
	name: "COA 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1723
},
{
	name: "COA 8999",
	description: "PREP-DOCTOR DISSERTATION",
	teachers: [],
	id: 1724
},
{
	name: "COA 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 1725
},
{
	name: "COE 1000",
	description: "FRESHMAN ENGR SEMINAR",
	teachers: [],
	id: 1726
},
{
	name: "COE 2001",
	description: "STATICS",
	teachers: [],
	id: 1727
},
{
	name: "COE 3001",
	description: "DEFORMABLE BODIES",
	teachers: [],
	id: 1728
},
{
	name: "COE 3002",
	description: "MICRO/NANO REVOLUTION",
	teachers: [],
	id: 1729
},
{
	name: "COE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1730
},
{
	name: "COOP 2000",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1731
},
{
	name: "COOP 2001",
	description: "SPRING CO-OP ASSIGNMENT",
	teachers: [],
	id: 1732
},
{
	name: "COOP 2005",
	description: "SUMMER CO-OP ASSIGNMENT",
	teachers: [],
	id: 1733
},
{
	name: "COOP 2008",
	description: "FALL CO-OP ASSIGNMENT",
	teachers: [],
	id: 1734
},
{
	name: "COOP 3011",
	description: "INT'L CO-OP",
	teachers: [],
	id: 1735
},
{
	name: "COOP 3015",
	description: "MOD LANGUAGE INT'L CO-OP",
	teachers: [],
	id: 1736
},
{
	name: "COOP 3018",
	description: "MOD LANGUAGE INT'L CO-OP",
	teachers: [],
	id: 1737
},
{
	name: "COOP 3020",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1738
},
{
	name: "COOP 3021",
	description: "SPRING TERM BC CO-OP",
	teachers: [],
	id: 1739
},
{
	name: "COOP 3028",
	description: "FALL TERM BC CO-OP",
	teachers: [],
	id: 1740
},
{
	name: "COOP 4000",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1741
},
{
	name: "COOP 4001",
	description: "SPRING CO-OP ASSIGNMENT",
	teachers: [],
	id: 1742
},
{
	name: "COOP 4005",
	description: "SUMMER CO-OP ASSIGNMENT",
	teachers: [],
	id: 1743
},
{
	name: "COOP 4008",
	description: "FALL CO-OP ASSIGNMENT",
	teachers: [],
	id: 1744
},
{
	name: "COOP 6003",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1745
},
{
	name: "COOP 6006",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1746
},
{
	name: "COOP 6009",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1747
},
{
	name: "COOP 6012",
	description: "CO-OP WORK ASSIGNMENT",
	teachers: [],
	id: 1748
},
{
	name: "COS 2000",
	description: "INTRO TO RESEARCH",
	teachers: [],
	id: 1749
},
{
	name: "CP 4010",
	description: "FOUND-URBAN&REGION DEVEL",
	teachers: [],
	id: 1750
},
{
	name: "CP 4020",
	description: "INTRO-URBAN&REGION PLAN",
	teachers: [],
	id: 1751
},
{
	name: "CP 4030",
	description: "CITY AND TECHNOLOGY",
	teachers: [],
	id: 1752
},
{
	name: "CP 4040",
	description: "CITY IN FICTION & FILM",
	teachers: [],
	id: 1753
},
{
	name: "CP 4050",
	description: "CONFLICT MANAGEMENT",
	teachers: [],
	id: 1754
},
{
	name: "CP 4105",
	description: "LAND CONSERVATION",
	teachers: [],
	id: 1755
},
{
	name: "CP 4190",
	description: "INTRO CLIMATE CHNG PLAN",
	teachers: [],
	id: 1756
},
{
	name: "CP 4210",
	description: "ENVIR PLAN&IMPACT ASSESS",
	teachers: [],
	id: 1757
},
{
	name: "CP 4310",
	description: "URBAN TRANSPORTATION",
	teachers: [],
	id: 1758
},
{
	name: "CP 4510",
	description: "GEOGRAPHIC INFO SYS",
	teachers: [],
	id: 1759
},
{
	name: "CP 4610",
	description: "INTRO-REAL ESTATE INVEST",
	teachers: [],
	id: 1760
},
{
	name: "CP 4620",
	description: "HOUSING&REAL ESTATE ECON",
	teachers: [],
	id: 1761
},
{
	name: "CP 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1762
},
{
	name: "CP 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1763
},
{
	name: "CP 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1764
},
{
	name: "CP 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1765
},
{
	name: "CP 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1766
},
{
	name: "CP 6002",
	description: "INTRO TO PLANNING",
	teachers: [],
	id: 1767
},
{
	name: "CP 6005",
	description: "DRAWING FOR PLANNERS",
	teachers: [],
	id: 1768
},
{
	name: "CP 6012",
	description: "PLANNING THEORY",
	teachers: [],
	id: 1769
},
{
	name: "CP 6016",
	description: "GROWTH MANAGEMENT LAW",
	teachers: [],
	id: 1770
},
{
	name: "CP 6024",
	description: "QUANT & COMPUTER METHODS",
	teachers: [],
	id: 1771
},
{
	name: "CP 6025",
	description: "ADV PLANNING METHODS",
	teachers: [],
	id: 1772
},
{
	name: "CP 6031",
	description: "ECON ANALYSIS-PLANNING",
	teachers: [],
	id: 1773
},
{
	name: "CP 6032",
	description: "URBAN REGIONAL DEVELOP",
	teachers: [],
	id: 1774
},
{
	name: "CP 6034",
	description: "DEMOGRAPHIC&ECON ANALY",
	teachers: [],
	id: 1775
},
{
	name: "CP 6052",
	description: "PLANNING STUDIO",
	teachers: [],
	id: 1776
},
{
	name: "CP 6105",
	description: "LAND CONSERVATION",
	teachers: [],
	id: 1777
},
{
	name: "CP 6112",
	description: "INTRO TO LAND USE",
	teachers: [],
	id: 1778
},
{
	name: "CP 6122",
	description: "LAND USE PLANNING METHOD",
	teachers: [],
	id: 1779
},
{
	name: "CP 6190",
	description: "INTRO CLIMATE CHNG PLAN",
	teachers: [],
	id: 1780
},
{
	name: "CP 6213",
	description: "URB ENV PLAN & DESIGN",
	teachers: [],
	id: 1781
},
{
	name: "CP 6214",
	description: "ENVIRONMENTAL PLANNING",
	teachers: [],
	id: 1782
},
{
	name: "CP 6223",
	description: "POLICY TOOLS-ENVIRON MGT",
	teachers: [],
	id: 1783
},
{
	name: "CP 6233",
	description: "SUSTAINABLE URBAN DEV",
	teachers: [],
	id: 1784
},
{
	name: "CP 6241",
	description: "WATER RESOURCE PLAN",
	teachers: [],
	id: 1785
},
{
	name: "CP 6250",
	description: "HAZARDOUS WASTE PLAN&MGT",
	teachers: [],
	id: 1786
},
{
	name: "CP 6261",
	description: "ENVIRONMENTAL LAW",
	teachers: [],
	id: 1787
},
{
	name: "CP 6311",
	description: "INTRO TO TRANSPORT PLAN",
	teachers: [],
	id: 1788
},
{
	name: "CP 6321",
	description: "TRANSPORT PLAN&INVEST",
	teachers: [],
	id: 1789
},
{
	name: "CP 6331",
	description: "LAND USE& TRANSPORTATION",
	teachers: [],
	id: 1790
},
{
	name: "CP 6341",
	description: "NON-MOTORIZED ACCESS",
	teachers: [],
	id: 1791
},
{
	name: "CP 6351",
	description: "TRANSPORTATION&ECON DEV",
	teachers: [],
	id: 1792
},
{
	name: "CP 6361",
	description: "REGION TRANS PLAN&ADMIN",
	teachers: [],
	id: 1793
},
{
	name: "CP 6412",
	description: "ECON DEVELOPMENT PLAN",
	teachers: [],
	id: 1794
},
{
	name: "CP 6422",
	description: "ECON DEVELOP ANALYSIS",
	teachers: [],
	id: 1795
},
{
	name: "CP 6432",
	description: "INDUSTRIAL RESTRUCTURING",
	teachers: [],
	id: 1796
},
{
	name: "CP 6442",
	description: "EQUITY,JUSTICE& ECON DEV",
	teachers: [],
	id: 1797
},
{
	name: "CP 6452",
	description: "URBAN DEVELOPMENT POLCY",
	teachers: [],
	id: 1798
},
{
	name: "CP 6514",
	description: "INTRO TO GIS",
	teachers: [],
	id: 1799
},
{
	name: "CP 6521",
	description: "ADVANCED GIS",
	teachers: [],
	id: 1800
},
{
	name: "CP 6531",
	description: "INTRO TO REMOTE SENSING",
	teachers: [],
	id: 1801
},
{
	name: "CP 6541",
	description: "ENVIRONMENTAL GIS",
	teachers: [],
	id: 1802
},
{
	name: "CP 6542",
	description: "TRANSPORT & GIS",
	teachers: [],
	id: 1803
},
{
	name: "CP 6551",
	description: "SPATIAL ANALY-SOCIOECON",
	teachers: [],
	id: 1804
},
{
	name: "CP 6561",
	description: "GEODEMOGRAPHICS",
	teachers: [],
	id: 1805
},
{
	name: "CP 6570",
	description: "SOCIOECONOMIC GIS",
	teachers: [],
	id: 1806
},
{
	name: "CP 6611",
	description: "REAL ESTATE FIN & DEV",
	teachers: [],
	id: 1807
},
{
	name: "CP 6612",
	description: "COMMUNITY DEVELOPMENT",
	teachers: [],
	id: 1808
},
{
	name: "CP 6621",
	description: "REAL ESTATE MKT RESEARCH",
	teachers: [],
	id: 1809
},
{
	name: "CP 6630",
	description: "GOVT & HOUSING MARKETS",
	teachers: [],
	id: 1810
},
{
	name: "CP 6640",
	description: "REAL ESTATE DEV METH",
	teachers: [],
	id: 1811
},
{
	name: "CP 6680",
	description: "CITIZEN PARTICIPATION",
	teachers: [],
	id: 1812
},
{
	name: "CP 6760",
	description: "NEGOTIATION&CONFLICT MGT",
	teachers: [],
	id: 1813
},
{
	name: "CP 6811",
	description: "NEGOTIATION&CONFLICT MGT",
	teachers: [],
	id: 1814
},
{
	name: "CP 6815",
	description: "CINEMA CITY",
	teachers: [],
	id: 1815
},
{
	name: "CP 6821",
	description: "POLICY ANALYSIS & PLAN",
	teachers: [],
	id: 1816
},
{
	name: "CP 6825",
	description: "PUBLIC SECTOR FIN&BUDGET",
	teachers: [],
	id: 1817
},
{
	name: "CP 6831",
	description: "URBAN INFRASTRUCTURE",
	teachers: [],
	id: 1818
},
{
	name: "CP 6832",
	description: "INTRO TO URBAN DESIGN",
	teachers: [],
	id: 1819
},
{
	name: "CP 6834",
	description: "URBAN DESIGN POLICY",
	teachers: [],
	id: 1820
},
{
	name: "CP 6836",
	description: "URBAN ECOLOGICAL DESIGN",
	teachers: [],
	id: 1821
},
{
	name: "CP 6850",
	description: "PUBL HEALTH & BUILT ENV",
	teachers: [],
	id: 1822
},
{
	name: "CP 6950",
	description: "GIS CAPSTONE PROJECT",
	teachers: [],
	id: 1823
},
{
	name: "CP 6XXX",
	description: "CITY PLANNING ELECTIVE",
	teachers: [],
	id: 1824
},
{
	name: "CP 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 1825
},
{
	name: "CP 7999",
	description: "PREP-DOCTORAL QUAL EXAM",
	teachers: [],
	id: 1826
},
{
	name: "CP 8000",
	description: "DOCTORAL PLANNING SEM",
	teachers: [],
	id: 1827
},
{
	name: "CP 8012",
	description: "PHD FOUNDATIONS SEMINAR",
	teachers: [],
	id: 1828
},
{
	name: "CP 8022",
	description: "PHD SEM RSRCH & PEDAGOGY",
	teachers: [],
	id: 1829
},
{
	name: "CP 8200",
	description: "ADV PLANNING THEORY",
	teachers: [],
	id: 1830
},
{
	name: "CP 8300",
	description: "ADV URBAN&REGIONAL THRY",
	teachers: [],
	id: 1831
},
{
	name: "CP 8400",
	description: "RSRCH DESIGN & QUAL MTHD",
	teachers: [],
	id: 1832
},
{
	name: "CP 8505",
	description: "ADV QUANT RESRCH METHODS",
	teachers: [],
	id: 1833
},
{
	name: "CP 8813",
	description: "SPEC TOPIC-LAND USE PLAN",
	teachers: [],
	id: 1834
},
{
	name: "CP 8823",
	description: "SPEC TOPIC-ENVIRON PLAN",
	teachers: [],
	id: 1835
},
{
	name: "CP 8833",
	description: "SPEC TOP-TRANSPORT PLAN",
	teachers: [],
	id: 1836
},
{
	name: "CP 8843",
	description: "SPEC TOPIC-ECONOMIC DEV",
	teachers: [],
	id: 1837
},
{
	name: "CP 8851",
	description: "SPECIAL TOPICS IN GIS",
	teachers: [],
	id: 1838
},
{
	name: "CP 8852",
	description: "SPECIAL TOPICS IN GIS",
	teachers: [],
	id: 1839
},
{
	name: "CP 8853",
	description: "SPEC TOPICS IN GIS",
	teachers: [],
	id: 1840
},
{
	name: "CP 8863",
	description: "SPEC TOPICS-LAND DEVELOP",
	teachers: [],
	id: 1841
},
{
	name: "CP 8873",
	description: "SPEC TOPICS-URBAN DSGN",
	teachers: [],
	id: 1842
},
{
	name: "CP 8876",
	description: "SPEC TOPICS:URBAN DSGN",
	teachers: [],
	id: 1843
},
{
	name: "CP 8881",
	description: "SPEC TOP-CTY&REGION PLAN",
	teachers: [],
	id: 1844
},
{
	name: "CP 8882",
	description: "SPEC TOP-CTY&REGION PLAN",
	teachers: [],
	id: 1845
},
{
	name: "CP 8883",
	description: "SPEC TOP-CTY&REGION PLAN",
	teachers: [],
	id: 1846
},
{
	name: "CP 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1847
},
{
	name: "CP 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1848
},
{
	name: "CP 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 1849
},
{
	name: "CP 8990",
	description: "APPLIED RESEARCH PAPER",
	teachers: [],
	id: 1850
},
{
	name: "CP 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 1851
},
{
	name: "CP 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1852
},
{
	name: "CP 8999",
	description: "PREP-PHD DISSERTATION",
	teachers: [],
	id: 1853
},
{
	name: "CP 9000",
	description: "DOCTORAL DISSERTATION",
	teachers: [],
	id: 1854
},
{
	name: "CS 1100",
	description: "FRESHMAN LEAP SEMINAR",
	teachers: [],
	id: 1855
},
{
	name: "CS 1171",
	description: "COMPUTING IN MATLAB",
	teachers: [],
	id: 1856
},
{
	name: "CS 1301",
	description: "INTRO TO COMPUTING",
	teachers: [],
	id: 1857
},
{
	name: "CS 1315",
	description: "INTRO MEDIA COMPUTATION",
	teachers: [],
	id: 1858
},
{
	name: "CS 1316",
	description: "REP STRUCTURE & BEHAVIOR",
	teachers: [],
	id: 1859
},
{
	name: "CS 1331",
	description: "INTRO-OBJECT ORIENT PROG",
	teachers: [],
	id: 1860
},
{
	name: "CS 1332",
	description: "DATA STRUCT & ALGORITHMS",
	teachers: [],
	id: 1861
},
{
	name: "CS 1371",
	description: "COMPUTING FOR ENGINEERS",
	teachers: [],
	id: 1862
},
{
	name: "CS 1372",
	description: "PROGRAM DESIGN FOR ENGRS",
	teachers: [],
	id: 1863
},
{
	name: "CS 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1864
},
{
	name: "CS 1802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1865
},
{
	name: "CS 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1866
},
{
	name: "CS 1804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1867
},
{
	name: "CS 1805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1868
},
{
	name: "CS 1XXX",
	description: "COMPUTER SCI ELECTIVE",
	teachers: [],
	id: 1869
},
{
	name: "CS 2050",
	description: "INTRO DISCRETE MATH CS",
	teachers: [],
	id: 1870
},
{
	name: "CS 2051",
	description: "HONORS DISCRETE MATH CS",
	teachers: [],
	id: 1871
},
{
	name: "CS 2110",
	description: "COMPUTER ORGANIZ&PROGRAM",
	teachers: [],
	id: 1872
},
{
	name: "CS 2200",
	description: "SYSTEMS AND NETWORKS",
	teachers: [],
	id: 1873
},
{
	name: "CS 2261",
	description: "MEDIA DEVICE ARCHITECTUR",
	teachers: [],
	id: 1874
},
{
	name: "CS 2316",
	description: "DATA INPUT/MANIPULATION",
	teachers: [],
	id: 1875
},
{
	name: "CS 2335",
	description: "SOFTWARE PRACTICUM",
	teachers: [],
	id: 1876
},
{
	name: "CS 2340",
	description: "OBJECTS AND DESIGN",
	teachers: [],
	id: 1877
},
{
	name: "CS 2345",
	description: "ADV PRACTICAL O-O PROG",
	teachers: [],
	id: 1878
},
{
	name: "CS 2600",
	description: "KNOWLEDGE REP & PROCESS",
	teachers: [],
	id: 1879
},
{
	name: "CS 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1880
},
{
	name: "CS 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1881
},
{
	name: "CS 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1882
},
{
	name: "CS 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1883
},
{
	name: "CS 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1884
},
{
	name: "CS 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1885
},
{
	name: "CS 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1886
},
{
	name: "CS 2XXX",
	description: "COMPUTER SCI ELECTIVE",
	teachers: [],
	id: 1887
},
{
	name: "CS 3101",
	description: "COMP SCI VENTURES",
	teachers: [],
	id: 1888
},
{
	name: "CS 3210",
	description: "DESIGN-OPERATING SYSTEMS",
	teachers: [],
	id: 1889
},
{
	name: "CS 3220",
	description: "PROCESSOR DESIGN",
	teachers: [],
	id: 1890
},
{
	name: "CS 3240",
	description: "LANGUAGES AND COMPUTATION",
	teachers: [],
	id: 1891
},
{
	name: "CS 3251",
	description: "COMPUTER NETWORKING I",
	teachers: [],
	id: 1892
},
{
	name: "CS 3300",
	description: "INTRO TO SOFTWARE ENGR",
	teachers: [],
	id: 1893
},
{
	name: "CS 3311",
	description: "PROJECT DESIGN",
	teachers: [],
	id: 1894
},
{
	name: "CS 3312",
	description: "PROJECT IMPLEMENTATION",
	teachers: [],
	id: 1895
},
{
	name: "CS 3451",
	description: "COMPUTER GRAPHICS",
	teachers: [],
	id: 1896
},
{
	name: "CS 3510",
	description: "DSGN&ANALYSIS-ALGORITHMS",
	teachers: [],
	id: 1897
},
{
	name: "CS 3511",
	description: "ALGORITHMS HONORS",
	teachers: [],
	id: 1898
},
{
	name: "CS 3600",
	description: "INTRO-ARTIFICIAL INTELL",
	teachers: [],
	id: 1899
},
{
	name: "CS 3630",
	description: "INTRO-PERCEPTION&ROBOTIC",
	teachers: [],
	id: 1900
},
{
	name: "CS 3651",
	description: "PROTOTYPING INTELL APPL",
	teachers: [],
	id: 1901
},
{
	name: "CS 3743",
	description: "EMERGING TECHNOLOGIES",
	teachers: [],
	id: 1902
},
{
	name: "CS 3750",
	description: "USER INTERFACE DESIGN",
	teachers: [],
	id: 1903
},
{
	name: "CS 3790",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 1904
},
{
	name: "CS 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1905
},
{
	name: "CS 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1906
},
{
	name: "CS 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1907
},
{
	name: "CS 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1908
},
{
	name: "CS 3805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1909
},
{
	name: "CS 3XXX",
	description: "COMPUTER SCI",
	teachers: [],
	id: 1910
},
{
	name: "CS 4001",
	description: "COMPUTING & SOCIETY",
	teachers: [],
	id: 1911
},
{
	name: "CS 4002",
	description: "ROBOTS AND SOCIETY",
	teachers: [],
	id: 1912
},
{
	name: "CS 4005",
	description: "NEXT GEN COMPUTING TECH",
	teachers: [],
	id: 1913
},
{
	name: "CS 4010",
	description: "INTRO TO COMPUTER LAW",
	teachers: [],
	id: 1914
},
{
	name: "CS 4052",
	description: "SYSTEMS ANALYSIS& DESIGN",
	teachers: [],
	id: 1915
},
{
	name: "CS 4057",
	description: "BUS PROCESS ANALY&DESIGN",
	teachers: [],
	id: 1916
},
{
	name: "CS 4210",
	description: "ADV OPERATING SYSTEMS",
	teachers: [],
	id: 1917
},
{
	name: "CS 4220",
	description: "EMBEDDED SYSTEMS",
	teachers: [],
	id: 1918
},
{
	name: "CS 4233",
	description: "PARALLEL COMP ARCH",
	teachers: [],
	id: 1919
},
{
	name: "CS 4235",
	description: "INTRO TO INFO SECURITY",
	teachers: [],
	id: 1920
},
{
	name: "CS 4237",
	description: "COMP & NETWORK SECURITY",
	teachers: [],
	id: 1921
},
{
	name: "CS 4240",
	description: "COMPILERS & INTERPRETERS",
	teachers: [],
	id: 1922
},
{
	name: "CS 4245",
	description: "INTRO DATA MINING & ANAL",
	teachers: [],
	id: 1923
},
{
	name: "CS 4251",
	description: "COMPUTER NETWORKING II",
	teachers: [],
	id: 1924
},
{
	name: "CS 4255",
	description: "INTRO-NETWORK MANAGEMENT",
	teachers: [],
	id: 1925
},
{
	name: "CS 4260",
	description: "TELECOMMUNICATIONS SYS",
	teachers: [],
	id: 1926
},
{
	name: "CS 4261",
	description: "MOBILE APPS & SVCS",
	teachers: [],
	id: 1927
},
{
	name: "CS 4270",
	description: "DATA COMMUNICATIONS LAB",
	teachers: [],
	id: 1928
},
{
	name: "CS 4280",
	description: "SURVEY-TELECOM & THE LAW",
	teachers: [],
	id: 1929
},
{
	name: "CS 4290",
	description: "ADVANCED COMPUTER ORG",
	teachers: [],
	id: 1930
},
{
	name: "CS 4320",
	description: "SOFTWARE PROCESSES",
	teachers: [],
	id: 1931
},
{
	name: "CS 4330",
	description: "SOFTWARE APPLICATIONS",
	teachers: [],
	id: 1932
},
{
	name: "CS 4342",
	description: "SOFTWARE GENERATION",
	teachers: [],
	id: 1933
},
{
	name: "CS 4365",
	description: "INTRO ENTERPRISE COMP",
	teachers: [],
	id: 1934
},
{
	name: "CS 4392",
	description: "PROGRAMMING LANGUAGES",
	teachers: [],
	id: 1935
},
{
	name: "CS 4400",
	description: "INTR TO DATABASE SYSTEMS",
	teachers: [],
	id: 1936
},
{
	name: "CS 4420",
	description: "DATABASE SYS IMPLEMENT",
	teachers: [],
	id: 1937
},
{
	name: "CS 4432",
	description: "INFORMATION SYSTEMS DSGN",
	teachers: [],
	id: 1938
},
{
	name: "CS 4440",
	description: "DATABASE TECHNOLOGIES",
	teachers: [],
	id: 1939
},
{
	name: "CS 4452",
	description: "HUMAN-CENTERED COMPUTING",
	teachers: [],
	id: 1940
},
{
	name: "CS 4455",
	description: "VIDEO GAME DESIGN",
	teachers: [],
	id: 1941
},
{
	name: "CS 4460",
	description: "INTRO INFO VISUALIZATION",
	teachers: [],
	id: 1942
},
{
	name: "CS 4464",
	description: "COMPUTATIONAL JOURNALISM",
	teachers: [],
	id: 1943
},
{
	name: "CS 4470",
	description: "USER INTERFACE SOFTWARE",
	teachers: [],
	id: 1944
},
{
	name: "CS 4472",
	description: "DESIGN OF ONLINE COMM",
	teachers: [],
	id: 1945
},
{
	name: "CS 4475",
	description: "COMP PHOTOGRAPHY",
	teachers: [],
	id: 1946
},
{
	name: "CS 4480",
	description: "DIGITAL VIDEO SPECIAL FX",
	teachers: [],
	id: 1947
},
{
	name: "CS 4495",
	description: "COMPUTER VISION",
	teachers: [],
	id: 1948
},
{
	name: "CS 4496",
	description: "COMPUTER ANIMATION",
	teachers: [],
	id: 1949
},
{
	name: "CS 4510",
	description: "AUTOMATA AND COMPLEXITY",
	teachers: [],
	id: 1950
},
{
	name: "CS 4520",
	description: "APPROXIMATION ALGS",
	teachers: [],
	id: 1951
},
{
	name: "CS 4530",
	description: "RANDOMIZED ALGS",
	teachers: [],
	id: 1952
},
{
	name: "CS 4540",
	description: "ADVANCED ALGS",
	teachers: [],
	id: 1953
},
{
	name: "CS 4550",
	description: "SCIENTIFIC VISUALIZATION",
	teachers: [],
	id: 1954
},
{
	name: "CS 4560",
	description: "VERIFICATION OF SYSTEMS",
	teachers: [],
	id: 1955
},
{
	name: "CS 4590",
	description: "COMPUTER AUDIO",
	teachers: [],
	id: 1956
},
{
	name: "CS 4605",
	description: "MOBILE&UBIQUITOUS COMP",
	teachers: [],
	id: 1957
},
{
	name: "CS 4611",
	description: "AI PROBLEM SOLVING",
	teachers: [],
	id: 1958
},
{
	name: "CS 4613",
	description: "KNOWLEDGE SYSTEMS ENGR",
	teachers: [],
	id: 1959
},
{
	name: "CS 4615",
	description: "KNOWLEDGE-BASED MODL&DGN",
	teachers: [],
	id: 1960
},
{
	name: "CS 4616",
	description: "PATTERN RECOGNITION",
	teachers: [],
	id: 1961
},
{
	name: "CS 4622",
	description: "CASE-BASED REASONING",
	teachers: [],
	id: 1962
},
{
	name: "CS 4625",
	description: "INTEL & INTERACTIVE SYS",
	teachers: [],
	id: 1963
},
{
	name: "CS 4632",
	description: "ADV INTELLIGENT ROBOTICS",
	teachers: [],
	id: 1964
},
{
	name: "CS 4635",
	description: "KNOWLEDGE-BASED AI",
	teachers: [],
	id: 1965
},
{
	name: "CS 4641",
	description: "MACHINE LEARNING",
	teachers: [],
	id: 1966
},
{
	name: "CS 4649",
	description: "ROBOT INTELLI PLANNING",
	teachers: [],
	id: 1967
},
{
	name: "CS 4650",
	description: "NATURAL LANGUAGE",
	teachers: [],
	id: 1968
},
{
	name: "CS 4660",
	description: "EDUCATIONAL TECHNOLOGY",
	teachers: [],
	id: 1969
},
{
	name: "CS 4665",
	description: "EDUC TECH: DSGN & EVAL",
	teachers: [],
	id: 1970
},
{
	name: "CS 4670",
	description: "CSCL",
	teachers: [],
	id: 1971
},
{
	name: "CS 4675",
	description: "INTERNET SYS & SERVICES",
	teachers: [],
	id: 1972
},
{
	name: "CS 4685",
	description: "PERVASIVE SYS NETWORKING",
	teachers: [],
	id: 1973
},
{
	name: "CS 4690",
	description: "EMPIRICAL METHODS IN HCI",
	teachers: [],
	id: 1974
},
{
	name: "CS 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 1975
},
{
	name: "CS 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 1976
},
{
	name: "CS 4710",
	description: "CS FOR BIOINFORMATICS",
	teachers: [],
	id: 1977
},
{
	name: "CS 4725",
	description: "INFO SECURITY POLICIES",
	teachers: [],
	id: 1978
},
{
	name: "CS 4726",
	description: "PRIVACY TECH POLICY LAW",
	teachers: [],
	id: 1979
},
{
	name: "CS 4731",
	description: "GAME AI",
	teachers: [],
	id: 1980
},
{
	name: "CS 4741",
	description: "INT MGT DEV - PROJ PREP",
	teachers: [],
	id: 1981
},
{
	name: "CS 4742",
	description: "COMP & MGT CAP PROJ",
	teachers: [],
	id: 1982
},
{
	name: "CS 4752",
	description: "PHIL ISSUES-COMPUTATION",
	teachers: [],
	id: 1983
},
{
	name: "CS 4770",
	description: "MIXED REALITY DESIGN",
	teachers: [],
	id: 1984
},
{
	name: "CS 4791",
	description: "INTEGRATIVE PROJ-COG SCI",
	teachers: [],
	id: 1985
},
{
	name: "CS 4792",
	description: "DSGN PROJ-COGNITIVE SCI",
	teachers: [],
	id: 1986
},
{
	name: "CS 4793",
	description: "PERSPECTIVES-COG SCIENCE",
	teachers: [],
	id: 1987
},
{
	name: "CS 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1988
},
{
	name: "CS 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1989
},
{
	name: "CS 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1990
},
{
	name: "CS 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1991
},
{
	name: "CS 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 1992
},
{
	name: "CS 4901",
	description: "SPEC PROB-COMPUTER SCI",
	teachers: [],
	id: 1993
},
{
	name: "CS 4902",
	description: "SPEC PROB-COMPUTER SCI",
	teachers: [],
	id: 1994
},
{
	name: "CS 4903",
	description: "SPEC PROB-COMPUTER SCI",
	teachers: [],
	id: 1995
},
{
	name: "CS 4911",
	description: "DESIGN CAPSTONE PROJECT",
	teachers: [],
	id: 1996
},
{
	name: "CS 4912",
	description: "DESIGN CAPSTONE PROJECT",
	teachers: [],
	id: 1997
},
{
	name: "CS 4980",
	description: "RESEARCH CAPSTONE PROJ",
	teachers: [],
	id: 1998
},
{
	name: "CS 4XXX",
	description: "COMPUTER SCI ELECTIVE",
	teachers: [],
	id: 1999
},
{
	name: "CS 6010",
	description: "PRINCIPLES OF DESIGN",
	teachers: [],
	id: 2000
},
{
	name: "CS 6035",
	description: "INTRO TO INFO SECURITY",
	teachers: [],
	id: 2001
},
{
	name: "CS 6150",
	description: "COMPUTING FOR GOOD",
	teachers: [],
	id: 2002
},
{
	name: "CS 6210",
	description: "ADV OPERATING SYSTEMS",
	teachers: [],
	id: 2003
},
{
	name: "CS 6230",
	description: "HIGH PERF PARALLEL COMP",
	teachers: [],
	id: 2004
},
{
	name: "CS 6235",
	description: "REAL-TIME SYSTEMS",
	teachers: [],
	id: 2005
},
{
	name: "CS 6238",
	description: "SECURE COMPUTER SYSTEMS",
	teachers: [],
	id: 2006
},
{
	name: "CS 6241",
	description: "COMPILER DESIGN",
	teachers: [],
	id: 2007
},
{
	name: "CS 6245",
	description: "PARALLELIZING COMPILERS",
	teachers: [],
	id: 2008
},
{
	name: "CS 6246",
	description: "OBJECT-ORIENTED SYSTEMS",
	teachers: [],
	id: 2009
},
{
	name: "CS 6250",
	description: "COMPUTER NETWORKS",
	teachers: [],
	id: 2010
},
{
	name: "CS 6255",
	description: "NETWORK MANAGEMENT",
	teachers: [],
	id: 2011
},
{
	name: "CS 6260",
	description: "APPLIED CRYPTOGRAPHY",
	teachers: [],
	id: 2012
},
{
	name: "CS 6262",
	description: "NETWORK SECURITY",
	teachers: [],
	id: 2013
},
{
	name: "CS 6265",
	description: "INFORMATION SECURITY LAB",
	teachers: [],
	id: 2014
},
{
	name: "CS 6266",
	description: "INFO SECURITY PRACTICUM",
	teachers: [],
	id: 2015
},
{
	name: "CS 6269",
	description: "FORMAL INFO ASSUR MODEL",
	teachers: [],
	id: 2016
},
{
	name: "CS 6280",
	description: "EVAL COMMUNICATION NETS",
	teachers: [],
	id: 2017
},
{
	name: "CS 6290",
	description: "HIGH PERFORM COMPUT ARCH",
	teachers: [],
	id: 2018
},
{
	name: "CS 6300",
	description: "SOFTWARE DEV PROCESS",
	teachers: [],
	id: 2019
},
{
	name: "CS 6310",
	description: "SOFTWARE ARCH & DESIGN",
	teachers: [],
	id: 2020
},
{
	name: "CS 6320",
	description: "REQUIREMENTS ANALYSIS",
	teachers: [],
	id: 2021
},
{
	name: "CS 6330",
	description: "SOFTWARE GENERATION&TEST",
	teachers: [],
	id: 2022
},
{
	name: "CS 6340",
	description: "SOFTWARE ANALYSIS & TEST",
	teachers: [],
	id: 2023
},
{
	name: "CS 6365",
	description: "INTRO ENTERPRISE COMPUT.",
	teachers: [],
	id: 2024
},
{
	name: "CS 6390",
	description: "PROGRAMMING LANGUAGES",
	teachers: [],
	id: 2025
},
{
	name: "CS 6400",
	description: "DB SYS CONCEPTS& DESIGN",
	teachers: [],
	id: 2026
},
{
	name: "CS 6402",
	description: "DATABASES AND INFOSEC",
	teachers: [],
	id: 2027
},
{
	name: "CS 6411",
	description: "O-O DATABASE MODEL & SYS",
	teachers: [],
	id: 2028
},
{
	name: "CS 6421",
	description: "TEMPOR,SPATIAL&ACTIVE DB",
	teachers: [],
	id: 2029
},
{
	name: "CS 6422",
	description: "DATABASE SYSTEM IMPLEMNT",
	teachers: [],
	id: 2030
},
{
	name: "CS 6430",
	description: "PARALLEL&DISTRIBUTED DB",
	teachers: [],
	id: 2031
},
{
	name: "CS 6440",
	description: "INTRO HEALTH INFORMATICS",
	teachers: [],
	id: 2032
},
{
	name: "CS 6451",
	description: "HUMAN-CENTERED COMPUTING",
	teachers: [],
	id: 2033
},
{
	name: "CS 6452",
	description: "PROTOTYPING INTERACT SYS",
	teachers: [],
	id: 2034
},
{
	name: "CS 6455",
	description: "USER INTERFACE DSGN&EVAL",
	teachers: [],
	id: 2035
},
{
	name: "CS 6456",
	description: "PRINCIPLES-UI SOFTWARE",
	teachers: [],
	id: 2036
},
{
	name: "CS 6457",
	description: "VIDEO GAME DESIGN",
	teachers: [],
	id: 2037
},
{
	name: "CS 6460",
	description: "EDUC TECH-FOUNDATIONS",
	teachers: [],
	id: 2038
},
{
	name: "CS 6465",
	description: "COMPUTATIONAL JOURNALISM",
	teachers: [],
	id: 2039
},
{
	name: "CS 6470",
	description: "ONLINE COMMUNITIES",
	teachers: [],
	id: 2040
},
{
	name: "CS 6474",
	description: "SOCIAL COMPUTING",
	teachers: [],
	id: 2041
},
{
	name: "CS 6475",
	description: "COMP. PHOTOGRAPHY",
	teachers: [],
	id: 2042
},
{
	name: "CS 6476",
	description: "COMPUTER VISION",
	teachers: [],
	id: 2043
},
{
	name: "CS 6480",
	description: "COMP VISUALIZ TECHNIQUES",
	teachers: [],
	id: 2044
},
{
	name: "CS 6485",
	description: "VISUAL METH-SCI & ENGR",
	teachers: [],
	id: 2045
},
{
	name: "CS 6491",
	description: "COMPUTER GRAPHICS",
	teachers: [],
	id: 2046
},
{
	name: "CS 6505",
	description: "COMPUTABILITY&ALGORITHMS",
	teachers: [],
	id: 2047
},
{
	name: "CS 6520",
	description: "COMPUTATIONAL COMPLEXITY",
	teachers: [],
	id: 2048
},
{
	name: "CS 6550",
	description: "DESIGN& ANALY-ALGORITHMS",
	teachers: [],
	id: 2049
},
{
	name: "CS 6601",
	description: "ARTIFICIAL INTELLIGENCE",
	teachers: [],
	id: 2050
},
{
	name: "CS 6670",
	description: "DISTRIB CNTRL ALGORITHMS",
	teachers: [],
	id: 2051
},
{
	name: "CS 6675",
	description: "ADVANCE INTERNET COMPUT",
	teachers: [],
	id: 2052
},
{
	name: "CS 6705",
	description: "APPLICATIONS OF AI",
	teachers: [],
	id: 2053
},
{
	name: "CS 6725",
	description: "INFO SECURITY POLICIES",
	teachers: [],
	id: 2054
},
{
	name: "CS 6726",
	description: "PRIVACY TECH POLICY LAW",
	teachers: [],
	id: 2055
},
{
	name: "CS 6750",
	description: "HUMAN-COMPUTER INTERACT",
	teachers: [],
	id: 2056
},
{
	name: "CS 6753",
	description: "HCI PROF PREP & PRACTICE",
	teachers: [],
	id: 2057
},
{
	name: "CS 6754",
	description: "ENGR DATABASE MGT SYSTEM",
	teachers: [],
	id: 2058
},
{
	name: "CS 6763",
	description: "DESIGN OF ENVIRONMENTS",
	teachers: [],
	id: 2059
},
{
	name: "CS 6764",
	description: "GEOMETRIC MODELING",
	teachers: [],
	id: 2060
},
{
	name: "CS 6770",
	description: "MIXED REALITY DESIGN",
	teachers: [],
	id: 2061
},
{
	name: "CS 6780",
	description: "MEDICAL IMAGE PROCESSING",
	teachers: [],
	id: 2062
},
{
	name: "CS 6795",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 2063
},
{
	name: "CS 6998",
	description: "HCI MASTER'S PROJECT",
	teachers: [],
	id: 2064
},
{
	name: "CS 6999",
	description: "MASTER'S PROJECT",
	teachers: [],
	id: 2065
},
{
	name: "CS 6XXX",
	description: "COMPUTER SCI ELECTIVE",
	teachers: [],
	id: 2066
},
{
	name: "CS 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 2067
},
{
	name: "CS 7001",
	description: "GRAD STUDIES-COMPUTING",
	teachers: [],
	id: 2068
},
{
	name: "CS 7110",
	description: "PARALLEL COMPUTER ARCH",
	teachers: [],
	id: 2069
},
{
	name: "CS 7210",
	description: "DISTRIBUTED COMPUTING",
	teachers: [],
	id: 2070
},
{
	name: "CS 7230",
	description: "SOFTWARE DSGN,IMPL& EVAL",
	teachers: [],
	id: 2071
},
{
	name: "CS 7250",
	description: "BROADBAND NETWORKING SYS",
	teachers: [],
	id: 2072
},
{
	name: "CS 7260",
	description: "INTERNET ARCH& PROTOCOLS",
	teachers: [],
	id: 2073
},
{
	name: "CS 7270",
	description: "NETWORKED APPS&SERVICES",
	teachers: [],
	id: 2074
},
{
	name: "CS 7290",
	description: "ADV. MICROARCHITECTURE",
	teachers: [],
	id: 2075
},
{
	name: "CS 7292",
	description: "RELIABLE SECURE COMPARCH",
	teachers: [],
	id: 2076
},
{
	name: "CS 7450",
	description: "INFORM VISUALIZATION",
	teachers: [],
	id: 2077
},
{
	name: "CS 7455",
	description: "ISSUES/HUMAN-CENTER COMP",
	teachers: [],
	id: 2078
},
{
	name: "CS 7460",
	description: "COLLABORATIVE COMPUTING",
	teachers: [],
	id: 2079
},
{
	name: "CS 7465",
	description: "EDU TECH-DESIGN AND EVAL",
	teachers: [],
	id: 2080
},
{
	name: "CS 7467",
	description: "COMP COLLABORATIVE LEARN",
	teachers: [],
	id: 2081
},
{
	name: "CS 7470",
	description: "UBIQUITOUS COMPUTING",
	teachers: [],
	id: 2082
},
{
	name: "CS 7476",
	description: "ADVANCED COMPUTER VISION",
	teachers: [],
	id: 2083
},
{
	name: "CS 7490",
	description: "ADV IMAGE SYNTHESIS",
	teachers: [],
	id: 2084
},
{
	name: "CS 7491",
	description: "3D COMPLEXITY",
	teachers: [],
	id: 2085
},
{
	name: "CS 7492",
	description: "SIMULATION OF BIOLOGY",
	teachers: [],
	id: 2086
},
{
	name: "CS 7495",
	description: "COMPUTER VISION",
	teachers: [],
	id: 2087
},
{
	name: "CS 7496",
	description: "COMPUTER ANIMATION",
	teachers: [],
	id: 2088
},
{
	name: "CS 7497",
	description: "VIRTUAL ENVIRONMENTS",
	teachers: [],
	id: 2089
},
{
	name: "CS 7499",
	description: "3D RECONSTRUCTION",
	teachers: [],
	id: 2090
},
{
	name: "CS 7510",
	description: "GRAPH ALGORITHM",
	teachers: [],
	id: 2091
},
{
	name: "CS 7520",
	description: "APPROXIMATION ALGORITHMS",
	teachers: [],
	id: 2092
},
{
	name: "CS 7525",
	description: "ALGORITHMIC GAME THEORY",
	teachers: [],
	id: 2093
},
{
	name: "CS 7530",
	description: "RANDOMIZED ALGORITHMS",
	teachers: [],
	id: 2094
},
{
	name: "CS 7535",
	description: "MARKOV CHAIN MONTE CARLO",
	teachers: [],
	id: 2095
},
{
	name: "CS 7540",
	description: "SPECTRAL ALGORITHMS",
	teachers: [],
	id: 2096
},
{
	name: "CS 7545",
	description: "MACHINE LEARNING THEORY",
	teachers: [],
	id: 2097
},
{
	name: "CS 7560",
	description: "THEORY OF CRYPTOGRAPHY",
	teachers: [],
	id: 2098
},
{
	name: "CS 7610",
	description: "MODELING AND DESIGN",
	teachers: [],
	id: 2099
},
{
	name: "CS 7611",
	description: "AI PROBLEM SOLVING",
	teachers: [],
	id: 2100
},
{
	name: "CS 7612",
	description: "AI PLANNING",
	teachers: [],
	id: 2101
},
{
	name: "CS 7613",
	description: "KNOWLEDGE SYSTEMS ENGR",
	teachers: [],
	id: 2102
},
{
	name: "CS 7615",
	description: "KNOWLEDGE AGENTS",
	teachers: [],
	id: 2103
},
{
	name: "CS 7616",
	description: "PATTERN RECOGNITION",
	teachers: [],
	id: 2104
},
{
	name: "CS 7620",
	description: "CASE-BASED REASONING",
	teachers: [],
	id: 2105
},
{
	name: "CS 7630",
	description: "AUTONOMOUS ROBOTICS",
	teachers: [],
	id: 2106
},
{
	name: "CS 7631",
	description: "MULTI-ROBOT SYSTEMS",
	teachers: [],
	id: 2107
},
{
	name: "CS 7632",
	description: "GAME AI",
	teachers: [],
	id: 2108
},
{
	name: "CS 7633",
	description: "HUMAN-ROBOT INTERACTION",
	teachers: [],
	id: 2109
},
{
	name: "CS 7634",
	description: "AI STORYTELL IN VIR WRLD",
	teachers: [],
	id: 2110
},
{
	name: "CS 7636",
	description: "COMPUTATIONAL PERCEPTION",
	teachers: [],
	id: 2111
},
{
	name: "CS 7637",
	description: "KNOWLEDGE-BASED AI",
	teachers: [],
	id: 2112
},
{
	name: "CS 7640",
	description: "LEARNING IN AUTON AGENTS",
	teachers: [],
	id: 2113
},
{
	name: "CS 7641",
	description: "MACHINE LEARNING",
	teachers: [],
	id: 2114
},
{
	name: "CS 7645",
	description: "NUM MACHINE LEARNING",
	teachers: [],
	id: 2115
},
{
	name: "CS 7646",
	description: "MACH LEARN FOR TRADING",
	teachers: [],
	id: 2116
},
{
	name: "CS 7649",
	description: "ROBOT INTELLI: PLANNING",
	teachers: [],
	id: 2117
},
{
	name: "CS 7650",
	description: "NATURAL LANGUAGE",
	teachers: [],
	id: 2118
},
{
	name: "CS 7695",
	description: "PHIL OF COGNITION",
	teachers: [],
	id: 2119
},
{
	name: "CS 7697",
	description: "COGNITIVE MODEL SCI&TECH",
	teachers: [],
	id: 2120
},
{
	name: "CS 7785",
	description: "INTRO ROBOTICS RESEARCH",
	teachers: [],
	id: 2121
},
{
	name: "CS 7790",
	description: "COGNITIVE MODELING",
	teachers: [],
	id: 2122
},
{
	name: "CS 7999",
	description: "PREP-DOCTORAL QUAL EXAMS",
	teachers: [],
	id: 2123
},
{
	name: "CS 8001",
	description: "SEMINAR",
	teachers: [],
	id: 2124
},
{
	name: "CS 8002",
	description: "SEMINAR",
	teachers: [],
	id: 2125
},
{
	name: "CS 8003",
	description: "SEMINAR",
	teachers: [],
	id: 2126
},
{
	name: "CS 8004",
	description: "SEMINAR",
	teachers: [],
	id: 2127
},
{
	name: "CS 8005",
	description: "SEMINAR",
	teachers: [],
	id: 2128
},
{
	name: "CS 8006",
	description: "SEMINAR",
	teachers: [],
	id: 2129
},
{
	name: "CS 8030",
	description: "SOFTWARE ENGR SEMINAR",
	teachers: [],
	id: 2130
},
{
	name: "CS 8750",
	description: "ROBOTICS RESEARCH FND I",
	teachers: [],
	id: 2131
},
{
	name: "CS 8751",
	description: "ROBOTICS RESEARCH FND II",
	teachers: [],
	id: 2132
},
{
	name: "CS 8795",
	description: "COLLOQUIUM-COGNITIVE SCI",
	teachers: [],
	id: 2133
},
{
	name: "CS 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2134
},
{
	name: "CS 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2135
},
{
	name: "CS 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2136
},
{
	name: "CS 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2137
},
{
	name: "CS 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2138
},
{
	name: "CS 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2139
},
{
	name: "CS 8893",
	description: "SPEC TOP-COGNITIVE SCI",
	teachers: [],
	id: 2140
},
{
	name: "CS 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2141
},
{
	name: "CS 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2142
},
{
	name: "CS 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2143
},
{
	name: "CS 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 2144
},
{
	name: "CS 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2145
},
{
	name: "CS 8999",
	description: "DOCTORAL THESIS PREP",
	teachers: [],
	id: 2146
},
{
	name: "CS 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 2147
},
{
	name: "CSE 6001",
	description: "INTRO-COMP SCI & ENGR",
	teachers: [],
	id: 2148
},
{
	name: "CSE 6010",
	description: "COMPUTATIONAL PROB SOLV",
	teachers: [],
	id: 2149
},
{
	name: "CSE 6040",
	description: "COMPUTING FOR DATA ANALY",
	teachers: [],
	id: 2150
},
{
	name: "CSE 6140",
	description: "COMP SCI&ENGR ALGORITHMS",
	teachers: [],
	id: 2151
},
{
	name: "CSE 6141",
	description: "MASSIVE GRAPH ANALYSIS",
	teachers: [],
	id: 2152
},
{
	name: "CSE 6220",
	description: "HIGH PERFORM COMPUTING",
	teachers: [],
	id: 2153
},
{
	name: "CSE 6221",
	description: "MULTICORE COMPUTING",
	teachers: [],
	id: 2154
},
{
	name: "CSE 6230",
	description: "HIGH PERF PARALLEL COMP",
	teachers: [],
	id: 2155
},
{
	name: "CSE 6236",
	description: "PARALLEL&DISTRIBUTED SIM",
	teachers: [],
	id: 2156
},
{
	name: "CSE 6240",
	description: "WEB SEARCH & TEXT MINING",
	teachers: [],
	id: 2157
},
{
	name: "CSE 6241",
	description: "PATTERN MATCHING",
	teachers: [],
	id: 2158
},
{
	name: "CSE 6242",
	description: "DATA & VISUAL ANALYTICS",
	teachers: [],
	id: 2159
},
{
	name: "CSE 6243",
	description: "ADV TOP MACHINE LEARNING",
	teachers: [],
	id: 2160
},
{
	name: "CSE 6301",
	description: "ALGOR-BIOINFOR&COMP BIOL",
	teachers: [],
	id: 2161
},
{
	name: "CSE 6643",
	description: "NUMERICAL LINEAR ALGEBRA",
	teachers: [],
	id: 2162
},
{
	name: "CSE 6644",
	description: "ITERATIVE METH-SYS EQNS",
	teachers: [],
	id: 2163
},
{
	name: "CSE 6710",
	description: "NUMERICAL METHODS-CSE I",
	teachers: [],
	id: 2164
},
{
	name: "CSE 6711",
	description: "NUMERICAL METHODS-CSE II",
	teachers: [],
	id: 2165
},
{
	name: "CSE 6730",
	description: "MODEL&SIM:FOUND&IMPLEMEN",
	teachers: [],
	id: 2166
},
{
	name: "CSE 6740",
	description: "COMPUTATIONAL DATA ANALY",
	teachers: [],
	id: 2167
},
{
	name: "CSE 6742",
	description: "MOD, SIM&MILITARY GAMING",
	teachers: [],
	id: 2168
},
{
	name: "CSE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 2169
},
{
	name: "CSE 7999",
	description: "PREP-DOCTORAL QUAL EXAMS",
	teachers: [],
	id: 2170
},
{
	name: "CSE 8001",
	description: "COMP, SCI & ENGR SEMINAR",
	teachers: [],
	id: 2171
},
{
	name: "CSE 8002",
	description: "COMP, SCI & ENGR SEMINAR",
	teachers: [],
	id: 2172
},
{
	name: "CSE 8003",
	description: "COMP, SCI & ENGR SEMINAR",
	teachers: [],
	id: 2173
},
{
	name: "CSE 8004",
	description: "COMP, SCI & ENGR SEMINAR",
	teachers: [],
	id: 2174
},
{
	name: "CSE 8005",
	description: "COMP, SCI & ENGR SEMINAR",
	teachers: [],
	id: 2175
},
{
	name: "CSE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2176
},
{
	name: "CSE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2177
},
{
	name: "CSE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2178
},
{
	name: "CSE 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2179
},
{
	name: "CSE 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2180
},
{
	name: "CSE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2181
},
{
	name: "CSE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2182
},
{
	name: "CSE 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2183
},
{
	name: "CSE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 2184
},
{
	name: "CSE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2185
},
{
	name: "CSE 8999",
	description: "DOCTORAL THESIS PREP",
	teachers: [],
	id: 2186
},
{
	name: "CSE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 2187
},
{
	name: "CX 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2188
},
{
	name: "CX 1802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2189
},
{
	name: "CX 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2190
},
{
	name: "CX 1804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2191
},
{
	name: "CX 1805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2192
},
{
	name: "CX 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2193
},
{
	name: "CX 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2194
},
{
	name: "CX 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2195
},
{
	name: "CX 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2196
},
{
	name: "CX 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2197
},
{
	name: "CX 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2198
},
{
	name: "CX 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2199
},
{
	name: "CX 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2200
},
{
	name: "CX 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2201
},
{
	name: "CX 3805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2202
},
{
	name: "CX 4010",
	description: "COMPUTATIONAL PROB SOLV",
	teachers: [],
	id: 2203
},
{
	name: "CX 4140",
	description: "COMP MODEL ALGORITHMS",
	teachers: [],
	id: 2204
},
{
	name: "CX 4220",
	description: "INTRO HIGH PERF COMP",
	teachers: [],
	id: 2205
},
{
	name: "CX 4230",
	description: "COMPUTER SIMULATION",
	teachers: [],
	id: 2206
},
{
	name: "CX 4232",
	description: "SIM & MILITARY GAMING",
	teachers: [],
	id: 2207
},
{
	name: "CX 4236",
	description: "DISTRIBUTED SIMULATION",
	teachers: [],
	id: 2208
},
{
	name: "CX 4240",
	description: "COMPUTING FOR DATA ANALY",
	teachers: [],
	id: 2209
},
{
	name: "CX 4242",
	description: "DATA & VISUAL ANALYTICS",
	teachers: [],
	id: 2210
},
{
	name: "CX 4640",
	description: "NUMERICAL ANALYSIS I",
	teachers: [],
	id: 2211
},
{
	name: "CX 4641",
	description: "NUMERICAL ANALYSIS II",
	teachers: [],
	id: 2212
},
{
	name: "CX 4777",
	description: "VECTOR&PARALLEL SCI COMP",
	teachers: [],
	id: 2213
},
{
	name: "CX 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2214
},
{
	name: "CX 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2215
},
{
	name: "CX 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2216
},
{
	name: "CX 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2217
},
{
	name: "CX 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2218
},
{
	name: "CX 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2219
},
{
	name: "DOPP 2001",
	description: "PREP FOR WORK IN GLO EC",
	teachers: [],
	id: 2220
},
{
	name: "EAS 1600",
	description: "INTRO-ENVIRONMENTAL SCI",
	teachers: [],
	id: 2221
},
{
	name: "EAS 1601",
	description: "HABITABLE PLANET",
	teachers: [],
	id: 2222
},
{
	name: "EAS 1XXX",
	description: "EARTH&ATMOS SCI ELECTIVE",
	teachers: [],
	id: 2223
},
{
	name: "EAS 2420",
	description: "ENVIRONMENTAL MEASURES",
	teachers: [],
	id: 2224
},
{
	name: "EAS 2551",
	description: "INTRO MET ANALYSIS",
	teachers: [],
	id: 2225
},
{
	name: "EAS 2600",
	description: "EARTH PROCESSES",
	teachers: [],
	id: 2226
},
{
	name: "EAS 2602",
	description: "EARTH THROUGH TIME",
	teachers: [],
	id: 2227
},
{
	name: "EAS 2655",
	description: "QUANTITATIVE TECHNIQUES",
	teachers: [],
	id: 2228
},
{
	name: "EAS 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2229
},
{
	name: "EAS 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2230
},
{
	name: "EAS 2750",
	description: "PHYSICS OF THE WEATHER",
	teachers: [],
	id: 2231
},
{
	name: "EAS 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2232
},
{
	name: "EAS 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2233
},
{
	name: "EAS 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2234
},
{
	name: "EAS 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2235
},
{
	name: "EAS 2900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2236
},
{
	name: "EAS 2XXX",
	description: "EARTH&ATMOS SCI ELECTIVE",
	teachers: [],
	id: 2237
},
{
	name: "EAS 3110",
	description: "ENERGY, ENVIRON, SOCIETY",
	teachers: [],
	id: 2238
},
{
	name: "EAS 3603",
	description: "THERMODYNAMICS-EARTH SYS",
	teachers: [],
	id: 2239
},
{
	name: "EAS 3610",
	description: "INTRO GEOPHYSICS",
	teachers: [],
	id: 2240
},
{
	name: "EAS 3620",
	description: "GEOCHEMISTRY",
	teachers: [],
	id: 2241
},
{
	name: "EAS 3XXX",
	description: "EARTH&ATMOS SCI ELECTIVE",
	teachers: [],
	id: 2242
},
{
	name: "EAS 4110",
	description: "RESOURCES, ENERGY&ENVIRON",
	teachers: [],
	id: 2243
},
{
	name: "EAS 4200",
	description: "STRUCTURAL GEOLOGY",
	teachers: [],
	id: 2244
},
{
	name: "EAS 4220",
	description: "ENVIRON GEOCHEMISTRY",
	teachers: [],
	id: 2245
},
{
	name: "EAS 4221",
	description: "ENVIRON GEOCHEMISTRY LAB",
	teachers: [],
	id: 2246
},
{
	name: "EAS 4300",
	description: "OCEANOGRAPHY",
	teachers: [],
	id: 2247
},
{
	name: "EAS 4305",
	description: "PHYS & CHEM OCEANOGRAPHY",
	teachers: [],
	id: 2248
},
{
	name: "EAS 4312",
	description: "GEODYNAMICS",
	teachers: [],
	id: 2249
},
{
	name: "EAS 4313",
	description: "TECT,CLIMATE,&LANDSCAPE",
	teachers: [],
	id: 2250
},
{
	name: "EAS 4314",
	description: "SEISMOLOGY",
	teachers: [],
	id: 2251
},
{
	name: "EAS 4331",
	description: "PHYSICAL VOLCANOLOGY",
	teachers: [],
	id: 2252
},
{
	name: "EAS 4350",
	description: "PALEOCLIM & PALEOCEAN",
	teachers: [],
	id: 2253
},
{
	name: "EAS 4360",
	description: "SPACE PHYSICS & INSTRUM.",
	teachers: [],
	id: 2254
},
{
	name: "EAS 4370",
	description: "PHYSICS OF PLANETS",
	teachers: [],
	id: 2255
},
{
	name: "EAS 4410",
	description: "CLIMATE & GLOBAL CHANGE",
	teachers: [],
	id: 2256
},
{
	name: "EAS 4420",
	description: "ENVIRONMENTAL FIELD METH",
	teachers: [],
	id: 2257
},
{
	name: "EAS 4430",
	description: "REMOTE SENSING&DATA ANLY",
	teachers: [],
	id: 2258
},
{
	name: "EAS 4450",
	description: "SYNOPTIC METEOROLOGY",
	teachers: [],
	id: 2259
},
{
	name: "EAS 4460",
	description: "SATELLITE & RADAR MET",
	teachers: [],
	id: 2260
},
{
	name: "EAS 4470",
	description: "LARGE-SCALE ATMOS CIRC",
	teachers: [],
	id: 2261
},
{
	name: "EAS 4480",
	description: "ENVIRON DATA ANALYSIS",
	teachers: [],
	id: 2262
},
{
	name: "EAS 4510",
	description: "EXPLORATION GEOPHYSICS",
	teachers: [],
	id: 2263
},
{
	name: "EAS 4515",
	description: "FLUIDS-EARTH'S CRUST I",
	teachers: [],
	id: 2264
},
{
	name: "EAS 4520",
	description: "EXPLORATION SEISMOLOGY",
	teachers: [],
	id: 2265
},
{
	name: "EAS 4602",
	description: "BIOGEOCHEMICAL CYCLES",
	teachers: [],
	id: 2266
},
{
	name: "EAS 4610",
	description: "EARTH SYSTEM MODELING",
	teachers: [],
	id: 2267
},
{
	name: "EAS 4625",
	description: "WATER QUALITY MODELING",
	teachers: [],
	id: 2268
},
{
	name: "EAS 4630",
	description: "PHYSICS OF THE EARTH",
	teachers: [],
	id: 2269
},
{
	name: "EAS 4641",
	description: "ATMOSPHERIC CHEM LAB",
	teachers: [],
	id: 2270
},
{
	name: "EAS 4651",
	description: "PRACTICAL INTERNSHIP",
	teachers: [],
	id: 2271
},
{
	name: "EAS 4655",
	description: "ATMOSPHERIC DYNAMICS",
	teachers: [],
	id: 2272
},
{
	name: "EAS 4656",
	description: "ATMOS DYNAMICS PRACTICUM",
	teachers: [],
	id: 2273
},
{
	name: "EAS 4670",
	description: "ATMOSPHERIC DYNAMICS II",
	teachers: [],
	id: 2274
},
{
	name: "EAS 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2275
},
{
	name: "EAS 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2276
},
{
	name: "EAS 4740",
	description: "ATMOSPHERIC CHEMISTRY",
	teachers: [],
	id: 2277
},
{
	name: "EAS 4795",
	description: "GROUNDWATER HYDROLOGY",
	teachers: [],
	id: 2278
},
{
	name: "EAS 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2279
},
{
	name: "EAS 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2280
},
{
	name: "EAS 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2281
},
{
	name: "EAS 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2282
},
{
	name: "EAS 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2283
},
{
	name: "EAS 4XXX",
	description: "EARTH&ATMOS SCI ELECTIVE",
	teachers: [],
	id: 2284
},
{
	name: "EAS 6000",
	description: "INTRO RESEARCH & ETHICS",
	teachers: [],
	id: 2285
},
{
	name: "EAS 6111",
	description: "THE EARTH SYSTEM",
	teachers: [],
	id: 2286
},
{
	name: "EAS 6120",
	description: "ENVIRONMENT FIELD METHOD",
	teachers: [],
	id: 2287
},
{
	name: "EAS 6121",
	description: "MODEL & COMP PROG GEOSCI",
	teachers: [],
	id: 2288
},
{
	name: "EAS 6122",
	description: "BIOGEOCHEMICAL CYCLES",
	teachers: [],
	id: 2289
},
{
	name: "EAS 6124",
	description: "OCEANOGRAPHY",
	teachers: [],
	id: 2290
},
{
	name: "EAS 6125",
	description: "WATER QUALITY MODELING",
	teachers: [],
	id: 2291
},
{
	name: "EAS 6128",
	description: "FLUIDS IN EARTH'S CRUST",
	teachers: [],
	id: 2292
},
{
	name: "EAS 6130",
	description: "EARTH SYSTEM MODELING",
	teachers: [],
	id: 2293
},
{
	name: "EAS 6132",
	description: "INTRO TO CLIMATE CHANGE",
	teachers: [],
	id: 2294
},
{
	name: "EAS 6134",
	description: "INVERSE METHODS IN EAS",
	teachers: [],
	id: 2295
},
{
	name: "EAS 6135",
	description: "INTRO COMPLEX ENVIRON SYS",
	teachers: [],
	id: 2296
},
{
	name: "EAS 6136",
	description: "PALEOCLIM & PALEOCEAN",
	teachers: [],
	id: 2297
},
{
	name: "EAS 6140",
	description: "THERMO OF ATMOS & OCEANS",
	teachers: [],
	id: 2298
},
{
	name: "EAS 6145",
	description: "REMOTE SENS ATMOS&OCEANS",
	teachers: [],
	id: 2299
},
{
	name: "EAS 6211",
	description: "GEOCHEM THERMODYNAMICS",
	teachers: [],
	id: 2300
},
{
	name: "EAS 6212",
	description: "GEOCHEMICAL KINETICS",
	teachers: [],
	id: 2301
},
{
	name: "EAS 6214",
	description: "AQUEOUS GEOCHEMISTRY",
	teachers: [],
	id: 2302
},
{
	name: "EAS 6216",
	description: "ISOTOPE GEOCHEMISTRY",
	teachers: [],
	id: 2303
},
{
	name: "EAS 6240",
	description: "ORGANIC GEOCHEMISTRY",
	teachers: [],
	id: 2304
},
{
	name: "EAS 6305",
	description: "PHYS & CHEM OCEANOGRAPHY",
	teachers: [],
	id: 2305
},
{
	name: "EAS 6311",
	description: "PHYSICS OF THE EARTH",
	teachers: [],
	id: 2306
},
{
	name: "EAS 6312",
	description: "GEODYNAMICS",
	teachers: [],
	id: 2307
},
{
	name: "EAS 6313",
	description: "TECT,CLIMATE,&LANDSCAPE",
	teachers: [],
	id: 2308
},
{
	name: "EAS 6314",
	description: "SEISMOLOGY",
	teachers: [],
	id: 2309
},
{
	name: "EAS 6320",
	description: "STRUCTURAL GEOLOGY",
	teachers: [],
	id: 2310
},
{
	name: "EAS 6331",
	description: "PHYSICAL VOLCANOLOGY",
	teachers: [],
	id: 2311
},
{
	name: "EAS 6360",
	description: "SPACE PHYSICS & INSTRUM.",
	teachers: [],
	id: 2312
},
{
	name: "EAS 6370",
	description: "PHYSICS OF PLANETS",
	teachers: [],
	id: 2313
},
{
	name: "EAS 6401",
	description: "INTRO-ATMOSPHERIC CHEM",
	teachers: [],
	id: 2314
},
{
	name: "EAS 6405",
	description: "INTRO ATMOS&AQUEOUS CHEM",
	teachers: [],
	id: 2315
},
{
	name: "EAS 6410",
	description: "ATMOSPHERIC CHEMISTRY",
	teachers: [],
	id: 2316
},
{
	name: "EAS 6412",
	description: "PHYSICAL METEROLOGY",
	teachers: [],
	id: 2317
},
{
	name: "EAS 6420",
	description: "ATMOS CHEM INSTRUMENT",
	teachers: [],
	id: 2318
},
{
	name: "EAS 6430",
	description: "EXP METHODS AIR QUALITY",
	teachers: [],
	id: 2319
},
{
	name: "EAS 6490",
	description: "ADV ENVIRON DATA ANALY",
	teachers: [],
	id: 2320
},
{
	name: "EAS 6501",
	description: "INTRO-ATMOS DYNAMICS",
	teachers: [],
	id: 2321
},
{
	name: "EAS 6502",
	description: "FLUID DYNAM&SYNOP METEOR",
	teachers: [],
	id: 2322
},
{
	name: "EAS 6512",
	description: "DYNAMIC METEOROLOGY",
	teachers: [],
	id: 2323
},
{
	name: "EAS 6522",
	description: "DYNAMICS OF THE TROPICS",
	teachers: [],
	id: 2324
},
{
	name: "EAS 6532",
	description: "LARGE-SCALE ATMOS CIRC",
	teachers: [],
	id: 2325
},
{
	name: "EAS 6670",
	description: "ATMOSPHERIC DYNAMICS II",
	teachers: [],
	id: 2326
},
{
	name: "EAS 6751",
	description: "PHYS PROP&RHEOLOGY-ROCKS",
	teachers: [],
	id: 2327
},
{
	name: "EAS 6761",
	description: "CONTAMINATED SED GEOCHEM",
	teachers: [],
	id: 2328
},
{
	name: "EAS 6765",
	description: "GEOMICROBIOLOGY",
	teachers: [],
	id: 2329
},
{
	name: "EAS 6790",
	description: "AIR POLLUTION:PHYS&CHEM",
	teachers: [],
	id: 2330
},
{
	name: "EAS 6792",
	description: "AIR POLLUT'N METEOROLOGY",
	teachers: [],
	id: 2331
},
{
	name: "EAS 6793",
	description: "ATMOS BOUNDARY LAYER",
	teachers: [],
	id: 2332
},
{
	name: "EAS 6794",
	description: "ATMOS CHEM MODELING",
	teachers: [],
	id: 2333
},
{
	name: "EAS 6795",
	description: "ATMOSPHERIC AEROSOLS",
	teachers: [],
	id: 2334
},
{
	name: "EAS 6XXX",
	description: "EARTH&ATMOS SCI ELECTIVE",
	teachers: [],
	id: 2335
},
{
	name: "EAS 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 2336
},
{
	name: "EAS 7999",
	description: "PREP-DOCTORL COMP EXAMS",
	teachers: [],
	id: 2337
},
{
	name: "EAS 8001",
	description: "SEMINAR",
	teachers: [],
	id: 2338
},
{
	name: "EAS 8011",
	description: "SEMINAR",
	teachers: [],
	id: 2339
},
{
	name: "EAS 8012",
	description: "SEMINAR",
	teachers: [],
	id: 2340
},
{
	name: "EAS 8013",
	description: "SEMINAR",
	teachers: [],
	id: 2341
},
{
	name: "EAS 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2342
},
{
	name: "EAS 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2343
},
{
	name: "EAS 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2344
},
{
	name: "EAS 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2345
},
{
	name: "EAS 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2346
},
{
	name: "EAS 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2347
},
{
	name: "EAS 8823",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2348
},
{
	name: "EAS 8824",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2349
},
{
	name: "EAS 8825",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2350
},
{
	name: "EAS 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2351
},
{
	name: "EAS 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2352
},
{
	name: "EAS 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2353
},
{
	name: "EAS 8904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2354
},
{
	name: "EAS 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 2355
},
{
	name: "EAS 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2356
},
{
	name: "EAS 8999",
	description: "PREP-DOCTORAL DISSERTA'N",
	teachers: [],
	id: 2357
},
{
	name: "EAS 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 2358
},
{
	name: "ECE 1010",
	description: "INTRO ECE DESIGN",
	teachers: [],
	id: 2359
},
{
	name: "ECE 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 2360
},
{
	name: "ECE 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2361
},
{
	name: "ECE 1802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2362
},
{
	name: "ECE 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2363
},
{
	name: "ECE 1804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2364
},
{
	name: "ECE 1805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2365
},
{
	name: "ECE 1811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2366
},
{
	name: "ECE 1812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2367
},
{
	name: "ECE 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2368
},
{
	name: "ECE 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2369
},
{
	name: "ECE 1815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2370
},
{
	name: "ECE 1881",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2371
},
{
	name: "ECE 1882",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2372
},
{
	name: "ECE 1883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2373
},
{
	name: "ECE 1884",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2374
},
{
	name: "ECE 1891",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2375
},
{
	name: "ECE 1892",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2376
},
{
	name: "ECE 1893",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2377
},
{
	name: "ECE 1894",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2378
},
{
	name: "ECE 1900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2379
},
{
	name: "ECE 1901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2380
},
{
	name: "ECE 1902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2381
},
{
	name: "ECE 1903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2382
},
{
	name: "ECE 1XXX",
	description: "ELEC/COMP ENGR ELECTIVE",
	teachers: [],
	id: 2383
},
{
	name: "ECE 2001",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2384
},
{
	name: "ECE 2002",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2385
},
{
	name: "ECE 2003",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2386
},
{
	name: "ECE 2020",
	description: "DIGITAL SYSTEM DESIGN",
	teachers: [],
	id: 2387
},
{
	name: "ECE 2025",
	description: "INTRO-SIGNAL PROCESSING",
	teachers: [],
	id: 2388
},
{
	name: "ECE 2026",
	description: "INTRO SIGNAL PROCESSING",
	teachers: [],
	id: 2389
},
{
	name: "ECE 2030",
	description: "INTRO TO COMPUTER ENGR",
	teachers: [],
	id: 2390
},
{
	name: "ECE 2031",
	description: "DIGITAL DESIGN LAB",
	teachers: [],
	id: 2391
},
{
	name: "ECE 2035",
	description: "PROGRAMMING HW/SW SYSTEM",
	teachers: [],
	id: 2392
},
{
	name: "ECE 2036",
	description: "ENGR SOFTWARE DESIGN",
	teachers: [],
	id: 2393
},
{
	name: "ECE 2040",
	description: "CIRCUIT ANALYSIS",
	teachers: [],
	id: 2394
},
{
	name: "ECE 20X2",
	description: "TRANSFER-DIGITAL DES LAB",
	teachers: [],
	id: 2395
},
{
	name: "ECE 20X3",
	description: "TRANSFER-DIGITAL SYSTEMS",
	teachers: [],
	id: 2396
},
{
	name: "ECE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2397
},
{
	name: "ECE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2398
},
{
	name: "ECE 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2399
},
{
	name: "ECE 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2400
},
{
	name: "ECE 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2401
},
{
	name: "ECE 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2402
},
{
	name: "ECE 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2403
},
{
	name: "ECE 2811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2404
},
{
	name: "ECE 2812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2405
},
{
	name: "ECE 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2406
},
{
	name: "ECE 2814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2407
},
{
	name: "ECE 2815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2408
},
{
	name: "ECE 2881",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2409
},
{
	name: "ECE 2882",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2410
},
{
	name: "ECE 2883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2411
},
{
	name: "ECE 2884",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2412
},
{
	name: "ECE 2891",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2413
},
{
	name: "ECE 2892",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2414
},
{
	name: "ECE 2893",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2415
},
{
	name: "ECE 2894",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2416
},
{
	name: "ECE 2900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2417
},
{
	name: "ECE 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2418
},
{
	name: "ECE 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2419
},
{
	name: "ECE 2903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2420
},
{
	name: "ECE 2XXX",
	description: "ELEC/COMP ENGR ELECTIVE",
	teachers: [],
	id: 2421
},
{
	name: "ECE 3005",
	description: "ECE PROF/TECH COMM",
	teachers: [],
	id: 2422
},
{
	name: "ECE 3006",
	description: "ECE CO-CURRIC PROF COMM",
	teachers: [],
	id: 2423
},
{
	name: "ECE 3020",
	description: "MATH FOUNDATIONS OF CMPE",
	teachers: [],
	id: 2424
},
{
	name: "ECE 3025",
	description: "ELECTROMAGNETICS",
	teachers: [],
	id: 2425
},
{
	name: "ECE 3030",
	description: "PHYSICAL FOUNDATIONS CMPE",
	teachers: [],
	id: 2426
},
{
	name: "ECE 3035",
	description: "MECHANISMS-COMPUTING SYS",
	teachers: [],
	id: 2427
},
{
	name: "ECE 3040",
	description: "MICROELECTRONIC CIRCUITS",
	teachers: [],
	id: 2428
},
{
	name: "ECE 3041",
	description: "INSTRUMENT& CIRCUITS LAB",
	teachers: [],
	id: 2429
},
{
	name: "ECE 3042",
	description: "MICROELECTRO CIRCUIT LAB",
	teachers: [],
	id: 2430
},
{
	name: "ECE 3043",
	description: "CIRCUITS&ELECTRONICS LAB",
	teachers: [],
	id: 2431
},
{
	name: "ECE 3050",
	description: "ANALOG ELECTRONICS",
	teachers: [],
	id: 2432
},
{
	name: "ECE 3055",
	description: "COMPUTER ARCH & OPER SYS",
	teachers: [],
	id: 2433
},
{
	name: "ECE 3056",
	description: "COMP ARCH, CONCURR, ENERGY",
	teachers: [],
	id: 2434
},
{
	name: "ECE 3060",
	description: "VLSI & ADV DIGITAL DSGN",
	teachers: [],
	id: 2435
},
{
	name: "ECE 3065",
	description: "ELECTROMAGNETIC APPS",
	teachers: [],
	id: 2436
},
{
	name: "ECE 3070",
	description: "ELEC ENERGY CONVERSION",
	teachers: [],
	id: 2437
},
{
	name: "ECE 3071",
	description: "ELECTRIC ENERGY SYSTEMS",
	teachers: [],
	id: 2438
},
{
	name: "ECE 3072",
	description: "ELEC ENERGY SYSTEMS",
	teachers: [],
	id: 2439
},
{
	name: "ECE 3075",
	description: "RANDOM SIGNALS",
	teachers: [],
	id: 2440
},
{
	name: "ECE 3076",
	description: "COMPUTER COMMUNICATIONS",
	teachers: [],
	id: 2441
},
{
	name: "ECE 3077",
	description: "PROB/STATS FOR ECE",
	teachers: [],
	id: 2442
},
{
	name: "ECE 3080",
	description: "SEMICONDUCTOR DEVICES",
	teachers: [],
	id: 2443
},
{
	name: "ECE 3084",
	description: "SIGNALS AND SYSTEMS",
	teachers: [],
	id: 2444
},
{
	name: "ECE 3085",
	description: "INTRO SYSTEMS & CONTROL",
	teachers: [],
	id: 2445
},
{
	name: "ECE 3090",
	description: "SOFTWARE FOR ENGR SYSTEM",
	teachers: [],
	id: 2446
},
{
	name: "ECE 3150",
	description: "VLSI & ADV DIGITAL DSGN",
	teachers: [],
	id: 2447
},
{
	name: "ECE 3300",
	description: "ELEC ENERGY CONVERSION",
	teachers: [],
	id: 2448
},
{
	name: "ECE 3400",
	description: "ANALOG ELECTRONICS",
	teachers: [],
	id: 2449
},
{
	name: "ECE 3431",
	description: "ANALOG ELECTRONICS LAB",
	teachers: [],
	id: 2450
},
{
	name: "ECE 3450",
	description: "SEMICONDUCTOR DEVICES",
	teachers: [],
	id: 2451
},
{
	name: "ECE 3550",
	description: "FEEDBACK CONTROL SYSTEMS",
	teachers: [],
	id: 2452
},
{
	name: "ECE 3600",
	description: "COMPUTER COMMUNICATIONS",
	teachers: [],
	id: 2453
},
{
	name: "ECE 3710",
	description: "CIRCUITS & ELECTRONICS",
	teachers: [],
	id: 2454
},
{
	name: "ECE 3741",
	description: "INSTRUM & ELECTRONIC LAB",
	teachers: [],
	id: 2455
},
{
	name: "ECE 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2456
},
{
	name: "ECE 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2457
},
{
	name: "ECE 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2458
},
{
	name: "ECE 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2459
},
{
	name: "ECE 3805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2460
},
{
	name: "ECE 3811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2461
},
{
	name: "ECE 3812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2462
},
{
	name: "ECE 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2463
},
{
	name: "ECE 3814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2464
},
{
	name: "ECE 3815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2465
},
{
	name: "ECE 3881",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2466
},
{
	name: "ECE 3882",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2467
},
{
	name: "ECE 3883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2468
},
{
	name: "ECE 3884",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2469
},
{
	name: "ECE 3891",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2470
},
{
	name: "ECE 3892",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2471
},
{
	name: "ECE 3893",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2472
},
{
	name: "ECE 3894",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2473
},
{
	name: "ECE 3900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2474
},
{
	name: "ECE 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2475
},
{
	name: "ECE 3902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2476
},
{
	name: "ECE 3903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2477
},
{
	name: "ECE 3951",
	description: "UNDERGRAD RESEARCH I",
	teachers: [],
	id: 2478
},
{
	name: "ECE 3952",
	description: "UNDERGRAD RESEARCH II",
	teachers: [],
	id: 2479
},
{
	name: "ECE 3XXX",
	description: "ELEC/COMP ENGR ELECTIVE",
	teachers: [],
	id: 2480
},
{
	name: "ECE 4001",
	description: "ENGR PRACTICE & PROFESS",
	teachers: [],
	id: 2481
},
{
	name: "ECE 4007",
	description: "ECE DESIGN PROJECT",
	teachers: [],
	id: 2482
},
{
	name: "ECE 4011",
	description: "ECE CULMINATING DESIGN 1",
	teachers: [],
	id: 2483
},
{
	name: "ECE 4012",
	description: "ECE CULMINATING DESIGN 2",
	teachers: [],
	id: 2484
},
{
	name: "ECE 4043",
	description: "ANALOG ELECTRONICS LAB",
	teachers: [],
	id: 2485
},
{
	name: "ECE 4100",
	description: "ADV COMPUTER ARCHITECURE",
	teachers: [],
	id: 2486
},
{
	name: "ECE 4110",
	description: "INTERNETWORK PROGRAMMING",
	teachers: [],
	id: 2487
},
{
	name: "ECE 4112",
	description: "INTERNETWORK SECURITY",
	teachers: [],
	id: 2488
},
{
	name: "ECE 4122",
	description: "ADV PROG TECHNIQUES",
	teachers: [],
	id: 2489
},
{
	name: "ECE 4130",
	description: "ADV VLSI SYSTEMS",
	teachers: [],
	id: 2490
},
{
	name: "ECE 4170",
	description: "HDL BASED DESIGN",
	teachers: [],
	id: 2491
},
{
	name: "ECE 4175",
	description: "EMB MICROCONTROLLER DSGN",
	teachers: [],
	id: 2492
},
{
	name: "ECE 4180",
	description: "EMBEDDED SYSTEMS DESIGN",
	teachers: [],
	id: 2493
},
{
	name: "ECE 4181",
	description: "EMBEDDED COMP SYSTEMS",
	teachers: [],
	id: 2494
},
{
	name: "ECE 4185",
	description: "EMB MICROCONTROLLER DES",
	teachers: [],
	id: 2495
},
{
	name: "ECE 4260",
	description: "RANDOM SIGNALS & APPL",
	teachers: [],
	id: 2496
},
{
	name: "ECE 4270",
	description: "FUND-DIGITAL SIGNAL PROC",
	teachers: [],
	id: 2497
},
{
	name: "ECE 4271",
	description: "APPLICATIONS OF DSP",
	teachers: [],
	id: 2498
},
{
	name: "ECE 4273",
	description: "DSP CHIP DESIGN",
	teachers: [],
	id: 2499
},
{
	name: "ECE 4320",
	description: "POWER SYS ANALY& CONTROL",
	teachers: [],
	id: 2500
},
{
	name: "ECE 4321",
	description: "POWER SYSTEM ENGINEERING",
	teachers: [],
	id: 2501
},
{
	name: "ECE 4325",
	description: "ELECTRIC POWER QUALITY",
	teachers: [],
	id: 2502
},
{
	name: "ECE 4330",
	description: "POWER ELECTRONICS",
	teachers: [],
	id: 2503
},
{
	name: "ECE 4335",
	description: "ELEC MACHINERY ANALYSIS",
	teachers: [],
	id: 2504
},
{
	name: "ECE 4350",
	description: "ELECTROMAG APPLICATIONS",
	teachers: [],
	id: 2505
},
{
	name: "ECE 4360",
	description: "RF-MICROWAVE LAB",
	teachers: [],
	id: 2506
},
{
	name: "ECE 4370",
	description: "ANTENNA ENGINEERING",
	teachers: [],
	id: 2507
},
{
	name: "ECE 4390",
	description: "RADAR AND EM SENSING",
	teachers: [],
	id: 2508
},
{
	name: "ECE 4391",
	description: "ELECTROMAG COMPATIBILITY",
	teachers: [],
	id: 2509
},
{
	name: "ECE 4410",
	description: "ANALOG FILTERS",
	teachers: [],
	id: 2510
},
{
	name: "ECE 4415",
	description: "RF ENGINEERING I",
	teachers: [],
	id: 2511
},
{
	name: "ECE 4418",
	description: "RF ENGINEERING II",
	teachers: [],
	id: 2512
},
{
	name: "ECE 4420",
	description: "DIGITAL INTEG CIRCUITS",
	teachers: [],
	id: 2513
},
{
	name: "ECE 4430",
	description: "ANALOG INTEGRA CIRCUITS",
	teachers: [],
	id: 2514
},
{
	name: "ECE 4435",
	description: "OPERATIONAL AMP DESIGN",
	teachers: [],
	id: 2515
},
{
	name: "ECE 4445",
	description: "AUDIO ENGINEERING",
	teachers: [],
	id: 2516
},
{
	name: "ECE 4446",
	description: "AUDIO ENGINEERING LAB",
	teachers: [],
	id: 2517
},
{
	name: "ECE 4451",
	description: "SEMICONDUCTOR DEV-COMMUN",
	teachers: [],
	id: 2518
},
{
	name: "ECE 4452",
	description: "IC FABRICATION",
	teachers: [],
	id: 2519
},
{
	name: "ECE 4460",
	description: "ELECTRONIC PACKAGING",
	teachers: [],
	id: 2520
},
{
	name: "ECE 4500",
	description: "OPTICAL ENGINEERING",
	teachers: [],
	id: 2521
},
{
	name: "ECE 4501",
	description: "FIBER OPTICS",
	teachers: [],
	id: 2522
},
{
	name: "ECE 4502",
	description: "OPTICAL FIBER COMM",
	teachers: [],
	id: 2523
},
{
	name: "ECE 4550",
	description: "CONTROL SYSTEM DESIGN",
	teachers: [],
	id: 2524
},
{
	name: "ECE 4551",
	description: "SYSTEMS & CONTROLS I",
	teachers: [],
	id: 2525
},
{
	name: "ECE 4555",
	description: "EMBEDDED&HYBRID CONTROL",
	teachers: [],
	id: 2526
},
{
	name: "ECE 4560",
	description: "INTRO-AUTOMATION&ROBOTIC",
	teachers: [],
	id: 2527
},
{
	name: "ECE 4562",
	description: "NEURAL NETS & FUZZY CTRL",
	teachers: [],
	id: 2528
},
{
	name: "ECE 4563",
	description: "GAME THEORY",
	teachers: [],
	id: 2529
},
{
	name: "ECE 4570",
	description: "MODERN SYSTEM THEORY",
	teachers: [],
	id: 2530
},
{
	name: "ECE 4580",
	description: "COMPUTER VISION",
	teachers: [],
	id: 2531
},
{
	name: "ECE 4601",
	description: "COMMUNICATION SYSTEMS",
	teachers: [],
	id: 2532
},
{
	name: "ECE 4602",
	description: "COMMUNICATION SYSTEM LAB",
	teachers: [],
	id: 2533
},
{
	name: "ECE 4604",
	description: "NETWORK DSGN&SIMULATION",
	teachers: [],
	id: 2534
},
{
	name: "ECE 4605",
	description: "ADVANCED INTERNETWORKING",
	teachers: [],
	id: 2535
},
{
	name: "ECE 4606",
	description: "WIRELESS COMMUNICATIONS",
	teachers: [],
	id: 2536
},
{
	name: "ECE 4607",
	description: "MOBILE&WIRELESS NETWORKS",
	teachers: [],
	id: 2537
},
{
	name: "ECE 4612",
	description: "TELECOM SYSTEMS LAB",
	teachers: [],
	id: 2538
},
{
	name: "ECE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2539
},
{
	name: "ECE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2540
},
{
	name: "ECE 4751",
	description: "LASER THEORY&APPLICATION",
	teachers: [],
	id: 2541
},
{
	name: "ECE 4752",
	description: "IC FABRICATION",
	teachers: [],
	id: 2542
},
{
	name: "ECE 4753",
	description: "TOPICS IN ENGR PRACTICE",
	teachers: [],
	id: 2543
},
{
	name: "ECE 4754",
	description: "ELEC PACKAGING ASSEMBLY",
	teachers: [],
	id: 2544
},
{
	name: "ECE 4755",
	description: "PACKAGING SUBSTRATE FAB",
	teachers: [],
	id: 2545
},
{
	name: "ECE 4761",
	description: "INDUSTRIAL CTRLS & MFG",
	teachers: [],
	id: 2546
},
{
	name: "ECE 4781",
	description: "BIOMED INSTRUMENTATION",
	teachers: [],
	id: 2547
},
{
	name: "ECE 4782",
	description: "BIOSYSTEMS ANALYSIS",
	teachers: [],
	id: 2548
},
{
	name: "ECE 4783",
	description: "INTRO-MEDICAL IMAGE PROC",
	teachers: [],
	id: 2549
},
{
	name: "ECE 4784",
	description: "ENGR ELECTROPHYSIOLOGY",
	teachers: [],
	id: 2550
},
{
	name: "ECE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2551
},
{
	name: "ECE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2552
},
{
	name: "ECE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2553
},
{
	name: "ECE 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2554
},
{
	name: "ECE 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2555
},
{
	name: "ECE 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2556
},
{
	name: "ECE 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2557
},
{
	name: "ECE 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2558
},
{
	name: "ECE 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2559
},
{
	name: "ECE 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2560
},
{
	name: "ECE 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2561
},
{
	name: "ECE 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2562
},
{
	name: "ECE 4881",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2563
},
{
	name: "ECE 4882",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2564
},
{
	name: "ECE 4883",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2565
},
{
	name: "ECE 4884",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2566
},
{
	name: "ECE 4891",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2567
},
{
	name: "ECE 4892",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2568
},
{
	name: "ECE 4893",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2569
},
{
	name: "ECE 4894",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2570
},
{
	name: "ECE 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2571
},
{
	name: "ECE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2572
},
{
	name: "ECE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2573
},
{
	name: "ECE 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2574
},
{
	name: "ECE 4951",
	description: "UNDERGRAD RESEARCH I",
	teachers: [],
	id: 2575
},
{
	name: "ECE 4952",
	description: "UNDERGRAD RESEARCH II",
	teachers: [],
	id: 2576
},
{
	name: "ECE 4XXX",
	description: "ELEC/COMP ENGR ELECTIVE",
	teachers: [],
	id: 2577
},
{
	name: "ECE 6100",
	description: "ADV COMPUT ARCHITECTURE",
	teachers: [],
	id: 2578
},
{
	name: "ECE 6101",
	description: "PARALLEL& DIST COMP ARCH",
	teachers: [],
	id: 2579
},
{
	name: "ECE 6102",
	description: "DEPENDABLE DISTRIBUT SYS",
	teachers: [],
	id: 2580
},
{
	name: "ECE 6110",
	description: "CAD-COMMUNICATION NETWKS",
	teachers: [],
	id: 2581
},
{
	name: "ECE 6120",
	description: "AUTOMATA THEORY",
	teachers: [],
	id: 2582
},
{
	name: "ECE 6121",
	description: "COMBINATORIAL STRATEGIES",
	teachers: [],
	id: 2583
},
{
	name: "ECE 6122",
	description: "ADV PROG TECHNIQUES",
	teachers: [],
	id: 2584
},
{
	name: "ECE 6130",
	description: "ADV VLSI SYSTEMS",
	teachers: [],
	id: 2585
},
{
	name: "ECE 6132",
	description: "COMP-AIDED VLSI SYS DSGN",
	teachers: [],
	id: 2586
},
{
	name: "ECE 6133",
	description: "PHYS DESIGN AUTOMAT-VLSI",
	teachers: [],
	id: 2587
},
{
	name: "ECE 6140",
	description: "DIGITAL SYSTEMS TEST",
	teachers: [],
	id: 2588
},
{
	name: "ECE 6200",
	description: "BIOMEDICAL APPLIC MEMS",
	teachers: [],
	id: 2589
},
{
	name: "ECE 6229",
	description: "INTRODUCTION TO MEMS",
	teachers: [],
	id: 2590
},
{
	name: "ECE 6250",
	description: "ADV DIGITAL SIGNAL PROC",
	teachers: [],
	id: 2591
},
{
	name: "ECE 6254",
	description: "STAT DIGIT SIG PROC&MOD",
	teachers: [],
	id: 2592
},
{
	name: "ECE 6255",
	description: "DIGIT PROC-SPEECH SIGNAL",
	teachers: [],
	id: 2593
},
{
	name: "ECE 6258",
	description: "DIGITAL IMAGE PROCESSING",
	teachers: [],
	id: 2594
},
{
	name: "ECE 6260",
	description: "DATA COMPRESSION & MODEL",
	teachers: [],
	id: 2595
},
{
	name: "ECE 6271",
	description: "ADAPTIVE FILTERING",
	teachers: [],
	id: 2596
},
{
	name: "ECE 6272",
	description: "FUND-RADAR SIGNAL PROCES",
	teachers: [],
	id: 2597
},
{
	name: "ECE 6273",
	description: "PATTERN RECOGNIT-SPEECH",
	teachers: [],
	id: 2598
},
{
	name: "ECE 6274",
	description: "STAT NATURAL LANG PROC",
	teachers: [],
	id: 2599
},
{
	name: "ECE 6276",
	description: "DSP HARDWARE SYS DESGIN",
	teachers: [],
	id: 2600
},
{
	name: "ECE 6277",
	description: "DSP SOFTWARE SYS DESIGN",
	teachers: [],
	id: 2601
},
{
	name: "ECE 6279",
	description: "SPATIAL ARRAY PROCESSING",
	teachers: [],
	id: 2602
},
{
	name: "ECE 6280",
	description: "CRYPTOGRAPHY & SECURITY",
	teachers: [],
	id: 2603
},
{
	name: "ECE 6282",
	description: "RADAR IMAGING",
	teachers: [],
	id: 2604
},
{
	name: "ECE 6283",
	description: "HARM ANALYSIS SIG PROC",
	teachers: [],
	id: 2605
},
{
	name: "ECE 6320",
	description: "POWER SYS CTRL&OPERATION",
	teachers: [],
	id: 2606
},
{
	name: "ECE 6321",
	description: "POWER SYSTEM STABILITY",
	teachers: [],
	id: 2607
},
{
	name: "ECE 6322",
	description: "PWR SYS PLAN&RELIABILITY",
	teachers: [],
	id: 2608
},
{
	name: "ECE 6323",
	description: "POWER SYSTEM PROTECTION",
	teachers: [],
	id: 2609
},
{
	name: "ECE 6330",
	description: "POWER ELECTRONIC DEVICES",
	teachers: [],
	id: 2610
},
{
	name: "ECE 6331",
	description: "POWER ELECTRONIC CICUITS",
	teachers: [],
	id: 2611
},
{
	name: "ECE 6332",
	description: "POWER ELECTRONIC CAD LAB",
	teachers: [],
	id: 2612
},
{
	name: "ECE 6335",
	description: "ELECTRIC MACHINERY ANALY",
	teachers: [],
	id: 2613
},
{
	name: "ECE 6336",
	description: "ELECTRIC MACHINE DRIVES",
	teachers: [],
	id: 2614
},
{
	name: "ECE 6350",
	description: "APPLIED ELECTROMAGNETICS",
	teachers: [],
	id: 2615
},
{
	name: "ECE 6360",
	description: "MICROWAVE DESIGN",
	teachers: [],
	id: 2616
},
{
	name: "ECE 6361",
	description: "MICROWAVE DESIGN LAB",
	teachers: [],
	id: 2617
},
{
	name: "ECE 6370",
	description: "EM RADIATION & ANTENNAS",
	teachers: [],
	id: 2618
},
{
	name: "ECE 6380",
	description: "INTRO COMPUTATIONAL EM",
	teachers: [],
	id: 2619
},
{
	name: "ECE 6390",
	description: "SATELLITE COMM&NAVIG SYS",
	teachers: [],
	id: 2620
},
{
	name: "ECE 6412",
	description: "ANALOG INTEG CIRCUIT DGN",
	teachers: [],
	id: 2621
},
{
	name: "ECE 6414",
	description: "ANALOG INTEGRATE SYS DGN",
	teachers: [],
	id: 2622
},
{
	name: "ECE 6416",
	description: "LOW NOISE ELEC SYS DSGN",
	teachers: [],
	id: 2623
},
{
	name: "ECE 6420",
	description: "WIRELESS IC DESIGN",
	teachers: [],
	id: 2624
},
{
	name: "ECE 6422",
	description: "INTERFACE IC DESIGN",
	teachers: [],
	id: 2625
},
{
	name: "ECE 6430",
	description: "DIGITAL MOS ICS",
	teachers: [],
	id: 2626
},
{
	name: "ECE 6435",
	description: "NEURO ANALOG VLSI CKTS",
	teachers: [],
	id: 2627
},
{
	name: "ECE 6440",
	description: "FREQUENCY SYNTHESIZERS",
	teachers: [],
	id: 2628
},
{
	name: "ECE 6442",
	description: "ELECTRONIC OSCILLATORS",
	teachers: [],
	id: 2629
},
{
	name: "ECE 6444",
	description: "SI-BASED HETERO DEV & CKTS",
	teachers: [],
	id: 2630
},
{
	name: "ECE 6450",
	description: "MICROELECTRONICS TECH",
	teachers: [],
	id: 2631
},
{
	name: "ECE 6451",
	description: "INTRO MICROELEC THEORY",
	teachers: [],
	id: 2632
},
{
	name: "ECE 6453",
	description: "THEORY ELECTRONIC DEVICE",
	teachers: [],
	id: 2633
},
{
	name: "ECE 6455",
	description: "SEMICONDUCTOR PROC CTRL",
	teachers: [],
	id: 2634
},
{
	name: "ECE 6456",
	description: "SOLAR CELLS",
	teachers: [],
	id: 2635
},
{
	name: "ECE 6458",
	description: "GIGASCALE INTEGRATION",
	teachers: [],
	id: 2636
},
{
	name: "ECE 6460",
	description: "MICROELECTROMECH DEVICES",
	teachers: [],
	id: 2637
},
{
	name: "ECE 6461",
	description: "NANOELECTRONICS",
	teachers: [],
	id: 2638
},
{
	name: "ECE 6500",
	description: "FOURIER TECH&SIGNAL ANALY",
	teachers: [],
	id: 2639
},
{
	name: "ECE 6501",
	description: "FOURIER OPTIC&HOLOGRAPHY",
	teachers: [],
	id: 2640
},
{
	name: "ECE 6510",
	description: "ELECTRO-OPTICS",
	teachers: [],
	id: 2641
},
{
	name: "ECE 6515",
	description: "NANOPHOTONICS",
	teachers: [],
	id: 2642
},
{
	name: "ECE 6520",
	description: "INTEGRATED OPTICS",
	teachers: [],
	id: 2643
},
{
	name: "ECE 6521",
	description: "OPTICAL FIBERS",
	teachers: [],
	id: 2644
},
{
	name: "ECE 6522",
	description: "NONLINEAR OPTICS",
	teachers: [],
	id: 2645
},
{
	name: "ECE 6530",
	description: "MOD, DIFFRACT&CRYST OPT",
	teachers: [],
	id: 2646
},
{
	name: "ECE 6540",
	description: "ORGANIC OPTOELECTRONICS",
	teachers: [],
	id: 2647
},
{
	name: "ECE 6542",
	description: "OPTOELECTRONIC SYSTEMS",
	teachers: [],
	id: 2648
},
{
	name: "ECE 6543",
	description: "FIBER OPTIC NETWORKS",
	teachers: [],
	id: 2649
},
{
	name: "ECE 6550",
	description: "LINEAR SYS AND CONTROLS",
	teachers: [],
	id: 2650
},
{
	name: "ECE 6551",
	description: "DIGITAL CONTROL",
	teachers: [],
	id: 2651
},
{
	name: "ECE 6552",
	description: "NONLINEAR SYSTEMS",
	teachers: [],
	id: 2652
},
{
	name: "ECE 6553",
	description: "OPTIMAL CONTROL",
	teachers: [],
	id: 2653
},
{
	name: "ECE 6554",
	description: "ADAPTIVE CONTROL",
	teachers: [],
	id: 2654
},
{
	name: "ECE 6555",
	description: "OPTIMAL ESTIMATION",
	teachers: [],
	id: 2655
},
{
	name: "ECE 6556",
	description: "INTELLIGENT CONTROL",
	teachers: [],
	id: 2656
},
{
	name: "ECE 6557",
	description: "MANUFACTURING SYS DESIGN",
	teachers: [],
	id: 2657
},
{
	name: "ECE 6558",
	description: "STOCHASTIC SYSTEMS",
	teachers: [],
	id: 2658
},
{
	name: "ECE 6559",
	description: "ADV LINEAR SYSTEMS",
	teachers: [],
	id: 2659
},
{
	name: "ECE 6560",
	description: "PDES IMAGE PROC & VISION",
	teachers: [],
	id: 2660
},
{
	name: "ECE 6561",
	description: "COMPUTING FOR CONTROLS",
	teachers: [],
	id: 2661
},
{
	name: "ECE 6562",
	description: "CONTROL ROBOTIC SYSTEMS",
	teachers: [],
	id: 2662
},
{
	name: "ECE 6563",
	description: "NETWORKED CONTROL",
	teachers: [],
	id: 2663
},
{
	name: "ECE 6601",
	description: "RANDOM PROCESSES",
	teachers: [],
	id: 2664
},
{
	name: "ECE 6602",
	description: "DIGITAL COMMUNICATIONS",
	teachers: [],
	id: 2665
},
{
	name: "ECE 6603",
	description: "ADV DIGIT COMMUNICATIONS",
	teachers: [],
	id: 2666
},
{
	name: "ECE 6604",
	description: "PERSONAL & MOBILE COMMUN",
	teachers: [],
	id: 2667
},
{
	name: "ECE 6605",
	description: "INFORMATION THEORY",
	teachers: [],
	id: 2668
},
{
	name: "ECE 6606",
	description: "CODING THEORY & APPL",
	teachers: [],
	id: 2669
},
{
	name: "ECE 6607",
	description: "COMPUTER COMM NETWORKS",
	teachers: [],
	id: 2670
},
{
	name: "ECE 6608",
	description: "PERFORMANCE ANALYSIS",
	teachers: [],
	id: 2671
},
{
	name: "ECE 6610",
	description: "WIRELESS NETWORKS",
	teachers: [],
	id: 2672
},
{
	name: "ECE 6611",
	description: "BROADBAND NETWORKING",
	teachers: [],
	id: 2673
},
{
	name: "ECE 6612",
	description: "COMP NETWORK SECURITY",
	teachers: [],
	id: 2674
},
{
	name: "ECE 6613",
	description: "BROADBAND ACCESS NEWWORK",
	teachers: [],
	id: 2675
},
{
	name: "ECE 6614",
	description: "MULTIMEDIA COMMUNICATION",
	teachers: [],
	id: 2676
},
{
	name: "ECE 6615",
	description: "SENSOR NETWORKS",
	teachers: [],
	id: 2677
},
{
	name: "ECE 6616",
	description: "COGNITIVE RADIO NETWORKS",
	teachers: [],
	id: 2678
},
{
	name: "ECE 6730",
	description: "MODEL&SIM:FOUND&IMPLEMEN",
	teachers: [],
	id: 2679
},
{
	name: "ECE 6744",
	description: "TOPICS IN ENGR PRACTICE",
	teachers: [],
	id: 2680
},
{
	name: "ECE 6759",
	description: "PLASMA PROCESSING",
	teachers: [],
	id: 2681
},
{
	name: "ECE 6771",
	description: "OPTOELECTRONICS",
	teachers: [],
	id: 2682
},
{
	name: "ECE 6776",
	description: "MICROELEC SYS PACKAGING",
	teachers: [],
	id: 2683
},
{
	name: "ECE 6779",
	description: "THERM PKG-MICRO/NANO SYS",
	teachers: [],
	id: 2684
},
{
	name: "ECE 6780",
	description: "MEDICAL IMAGE PROCESSING",
	teachers: [],
	id: 2685
},
{
	name: "ECE 6786",
	description: "MEDICAL IMAGING SYSTEMS",
	teachers: [],
	id: 2686
},
{
	name: "ECE 6787",
	description: "QUANTITATIVE ELECTROPHYS",
	teachers: [],
	id: 2687
},
{
	name: "ECE 6790",
	description: "INFO PROC MODEL NEUR SYS",
	teachers: [],
	id: 2688
},
{
	name: "ECE 6792",
	description: "MANUFACTURING SEMINAR",
	teachers: [],
	id: 2689
},
{
	name: "ECE 6XXX",
	description: "ELEC/COMP ENGR ELECTIVE",
	teachers: [],
	id: 2690
},
{
	name: "ECE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 2691
},
{
	name: "ECE 7055",
	description: "GT-SJTU",
	teachers: [],
	id: 2692
},
{
	name: "ECE 7056",
	description: "GT-TU",
	teachers: [],
	id: 2693
},
{
	name: "ECE 7102",
	description: "RISC ARCHITECTURES",
	teachers: [],
	id: 2694
},
{
	name: "ECE 7103",
	description: "ADVANCED MEMORY SYSTEMS",
	teachers: [],
	id: 2695
},
{
	name: "ECE 7131",
	description: "ASYNCH & SELF TIMED SYS",
	teachers: [],
	id: 2696
},
{
	name: "ECE 7141",
	description: "ADV DIGITAL SYS TEST",
	teachers: [],
	id: 2697
},
{
	name: "ECE 7142",
	description: "FAULT TOLERANT COMPUTING",
	teachers: [],
	id: 2698
},
{
	name: "ECE 7251",
	description: "SIGNAL DETECTION&ESTIMAT",
	teachers: [],
	id: 2699
},
{
	name: "ECE 7252",
	description: "ADV SIGNAL PROC THEORY",
	teachers: [],
	id: 2700
},
{
	name: "ECE 7370",
	description: "ANTENNAS/WAVES IN MATTER",
	teachers: [],
	id: 2701
},
{
	name: "ECE 7380",
	description: "TOPICS-COMPUTATIONAL EM",
	teachers: [],
	id: 2702
},
{
	name: "ECE 7611",
	description: "ADV COMMUNICATION THEORY",
	teachers: [],
	id: 2703
},
{
	name: "ECE 7785",
	description: "INTRO ROBOTICS RESEARCH",
	teachers: [],
	id: 2704
},
{
	name: "ECE 7999",
	description: "PREP-DOCTORAL QUAL EXAM",
	teachers: [],
	id: 2705
},
{
	name: "ECE 8001",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2706
},
{
	name: "ECE 8002",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2707
},
{
	name: "ECE 8003",
	description: "ECE SEMINAR",
	teachers: [],
	id: 2708
},
{
	name: "ECE 8010",
	description: "RESEARCH SEMINAR",
	teachers: [],
	id: 2709
},
{
	name: "ECE 8020",
	description: "PRO COMMUNICATION SKILLS",
	teachers: [],
	id: 2710
},
{
	name: "ECE 8022",
	description: "PROF COMMUNICATION SEM",
	teachers: [],
	id: 2711
},
{
	name: "ECE 8750",
	description: "ROBOTICS RESEARCH FND I",
	teachers: [],
	id: 2712
},
{
	name: "ECE 8751",
	description: "ROBOTICS RESEARCH FND II",
	teachers: [],
	id: 2713
},
{
	name: "ECE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2714
},
{
	name: "ECE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2715
},
{
	name: "ECE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2716
},
{
	name: "ECE 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2717
},
{
	name: "ECE 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2718
},
{
	name: "ECE 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2719
},
{
	name: "ECE 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2720
},
{
	name: "ECE 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2721
},
{
	name: "ECE 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2722
},
{
	name: "ECE 8815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2723
},
{
	name: "ECE 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2724
},
{
	name: "ECE 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2725
},
{
	name: "ECE 8843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2726
},
{
	name: "ECE 8853",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2727
},
{
	name: "ECE 8863",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2728
},
{
	name: "ECE 8873",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2729
},
{
	name: "ECE 8881",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2730
},
{
	name: "ECE 8882",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2731
},
{
	name: "ECE 8883",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2732
},
{
	name: "ECE 8884",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2733
},
{
	name: "ECE 8891",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2734
},
{
	name: "ECE 8892",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2735
},
{
	name: "ECE 8893",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2736
},
{
	name: "ECE 8894",
	description: "SPECIAL TOPICS-LAB",
	teachers: [],
	id: 2737
},
{
	name: "ECE 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2738
},
{
	name: "ECE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2739
},
{
	name: "ECE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2740
},
{
	name: "ECE 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2741
},
{
	name: "ECE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 2742
},
{
	name: "ECE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2743
},
{
	name: "ECE 8999",
	description: "PREP-DOCTORAL DISSERTA'N",
	teachers: [],
	id: 2744
},
{
	name: "ECE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 2745
},
{
	name: "ECEP 6301",
	description: "POWER SYS CTRL&OPERATION",
	teachers: [],
	id: 2746
},
{
	name: "ECEP 6304",
	description: "POWER SYSTEM ECONOMICS",
	teachers: [],
	id: 2747
},
{
	name: "ECEP 6305",
	description: "PWR SYS PLAN&RELIABILITY",
	teachers: [],
	id: 2748
},
{
	name: "ECEP 6310",
	description: "CAPSTONE PROJECT",
	teachers: [],
	id: 2749
},
{
	name: "ECEP 6351",
	description: "POWER SYSTEM PROTECTION",
	teachers: [],
	id: 2750
},
{
	name: "ECON 1001",
	description: "ECONOMICS AT WORK",
	teachers: [],
	id: 2751
},
{
	name: "ECON 1XXX",
	description: "ECONOMICS ELECTIVE",
	teachers: [],
	id: 2752
},
{
	name: "ECON 2100",
	description: "ECONOMICS AND POLICY",
	teachers: [],
	id: 2753
},
{
	name: "ECON 2101",
	description: "THE GLOBAL ECONOMY",
	teachers: [],
	id: 2754
},
{
	name: "ECON 2105",
	description: "PRIN OF MACROECONOMICS",
	teachers: [],
	id: 2755
},
{
	name: "ECON 2106",
	description: "PRIN OF MICROECONOMICS",
	teachers: [],
	id: 2756
},
{
	name: "ECON 2250",
	description: "STATISTICS FOR ECONOMIST",
	teachers: [],
	id: 2757
},
{
	name: "ECON 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2758
},
{
	name: "ECON 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2759
},
{
	name: "ECON 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2760
},
{
	name: "ECON 2XXX",
	description: "ECONOMICS ELECTIVE",
	teachers: [],
	id: 2761
},
{
	name: "ECON 3110",
	description: "ADV MICROECONOMIC ANALYS",
	teachers: [],
	id: 2762
},
{
	name: "ECON 3120",
	description: "ADVANCED MACROECONOMICS",
	teachers: [],
	id: 2763
},
{
	name: "ECON 3150",
	description: "ECON & FINANCE MODELING",
	teachers: [],
	id: 2764
},
{
	name: "ECON 3160",
	description: "EMPIRICAL ECONOMICS",
	teachers: [],
	id: 2765
},
{
	name: "ECON 3161",
	description: "ECONOMETRIC ANALYSIS",
	teachers: [],
	id: 2766
},
{
	name: "ECON 3300",
	description: "INTL ENERGY MARKETS",
	teachers: [],
	id: 2767
},
{
	name: "ECON 3XXX",
	description: "ECONOMICS ELECTIVE",
	teachers: [],
	id: 2768
},
{
	name: "ECON 4060",
	description: "MONEY & CAPITAL MARKETS",
	teachers: [],
	id: 2769
},
{
	name: "ECON 4160",
	description: "ECONOMIC FORECASTING",
	teachers: [],
	id: 2770
},
{
	name: "ECON 4170",
	description: "MATHEMATICAL ECONOMICS",
	teachers: [],
	id: 2771
},
{
	name: "ECON 4180",
	description: "GAME THEORY ECONOMICS",
	teachers: [],
	id: 2772
},
{
	name: "ECON 4232",
	description: "LABOR ECONOMICS",
	teachers: [],
	id: 2773
},
{
	name: "ECON 4301",
	description: "ECON OF CONTRACTS",
	teachers: [],
	id: 2774
},
{
	name: "ECON 4311",
	description: "GLOBAL ENTERPRISE",
	teachers: [],
	id: 2775
},
{
	name: "ECON 4321",
	description: "TECH & ENTREPRENEURSHIP",
	teachers: [],
	id: 2776
},
{
	name: "ECON 4340",
	description: "INDUSTRIAL ORGANIZATION",
	teachers: [],
	id: 2777
},
{
	name: "ECON 4345",
	description: "ECONOMIC REGULATION",
	teachers: [],
	id: 2778
},
{
	name: "ECON 4350",
	description: "INTERNATIONAL ECONOMICS",
	teachers: [],
	id: 2779
},
{
	name: "ECON 4351",
	description: "INT'L FINANCIAL ECON",
	teachers: [],
	id: 2780
},
{
	name: "ECON 4355",
	description: "GLOBAL FINANCIAL ECON",
	teachers: [],
	id: 2781
},
{
	name: "ECON 4357",
	description: "LAW&ECON-GLOBAL TRADING",
	teachers: [],
	id: 2782
},
{
	name: "ECON 4360",
	description: "NETWORK ECONOMICS",
	teachers: [],
	id: 2783
},
{
	name: "ECON 4411",
	description: "ECONOMIC DEVELOPMENT",
	teachers: [],
	id: 2784
},
{
	name: "ECON 4412",
	description: "COST-BENEFIT ANALYSIS",
	teachers: [],
	id: 2785
},
{
	name: "ECON 4415",
	description: "CONFL&SECUR IN DEVCOUNTR",
	teachers: [],
	id: 2786
},
{
	name: "ECON 4421",
	description: "URBAN & REGIONAL ECON",
	teachers: [],
	id: 2787
},
{
	name: "ECON 4430",
	description: "TRANSPORTATION ECONOMICS",
	teachers: [],
	id: 2788
},
{
	name: "ECON 4440",
	description: "ECONOMICS OF ENVIRONMENT",
	teachers: [],
	id: 2789
},
{
	name: "ECON 4450",
	description: "AFRIC-AMER ENTREPRENEUR",
	teachers: [],
	id: 2790
},
{
	name: "ECON 4460",
	description: "PUBLIC ECONOMICS",
	teachers: [],
	id: 2791
},
{
	name: "ECON 4510",
	description: "HEALTH ECONOMICS",
	teachers: [],
	id: 2792
},
{
	name: "ECON 4610",
	description: "SEMINAR-ECONOMIC POLICY",
	teachers: [],
	id: 2793
},
{
	name: "ECON 4620",
	description: "HISTORY-ECONOMIC THOUGHT",
	teachers: [],
	id: 2794
},
{
	name: "ECON 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2795
},
{
	name: "ECON 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2796
},
{
	name: "ECON 4740",
	description: "SEM-POLITICAL ECONOMY",
	teachers: [],
	id: 2797
},
{
	name: "ECON 4741",
	description: "THESIS-POLITICAL ECONOMY",
	teachers: [],
	id: 2798
},
{
	name: "ECON 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2799
},
{
	name: "ECON 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2800
},
{
	name: "ECON 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2801
},
{
	name: "ECON 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2802
},
{
	name: "ECON 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2803
},
{
	name: "ECON 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2804
},
{
	name: "ECON 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2805
},
{
	name: "ECON 4910",
	description: "INDIVIDUAL RESEARCH",
	teachers: [],
	id: 2806
},
{
	name: "ECON 4990",
	description: "ECON INTERNSHIP",
	teachers: [],
	id: 2807
},
{
	name: "ECON 4XXX",
	description: "ECONOMICS ELECTIVE",
	teachers: [],
	id: 2808
},
{
	name: "ECON 6100",
	description: "ECONOMICS FOR MANAGERS",
	teachers: [],
	id: 2809
},
{
	name: "ECON 6105",
	description: "MACROECONOMICS",
	teachers: [],
	id: 2810
},
{
	name: "ECON 6106",
	description: "MICROECONOMIC ANALYSIS",
	teachers: [],
	id: 2811
},
{
	name: "ECON 6110",
	description: "ECON-CORPORATE STRATEGY",
	teachers: [],
	id: 2812
},
{
	name: "ECON 6121",
	description: "RESEARCH METHODS",
	teachers: [],
	id: 2813
},
{
	name: "ECON 6130",
	description: "QUANTITATIVE METH-ECON",
	teachers: [],
	id: 2814
},
{
	name: "ECON 6140",
	description: "PROBABILITY & STATISTICS",
	teachers: [],
	id: 2815
},
{
	name: "ECON 6150",
	description: "COST BENEFIT ANALYSIS",
	teachers: [],
	id: 2816
},
{
	name: "ECON 6160",
	description: "ECONOMETRIC ANALYSIS",
	teachers: [],
	id: 2817
},
{
	name: "ECON 6161",
	description: "ECONOMETRIC MODELING",
	teachers: [],
	id: 2818
},
{
	name: "ECON 6162",
	description: "DISCRETE CHOICE ECON",
	teachers: [],
	id: 2819
},
{
	name: "ECON 6200",
	description: "MONEY & CAPITAL MARKETS",
	teachers: [],
	id: 2820
},
{
	name: "ECON 6310",
	description: "PUBLIC ECONOMICS",
	teachers: [],
	id: 2821
},
{
	name: "ECON 6330",
	description: "URBAN & REGIONAL ECON",
	teachers: [],
	id: 2822
},
{
	name: "ECON 6341",
	description: "TRANSPORTATION ECONOMICS",
	teachers: [],
	id: 2823
},
{
	name: "ECON 6360",
	description: "DEVELOPMENT ECONOMICS",
	teachers: [],
	id: 2824
},
{
	name: "ECON 6380",
	description: "ECONOMIC OF ENVIRONMENT",
	teachers: [],
	id: 2825
},
{
	name: "ECON 6431",
	description: "GLOBAL ENTERPRISE",
	teachers: [],
	id: 2826
},
{
	name: "ECON 6440",
	description: "ECONOMICS OF TECHNOLOGY",
	teachers: [],
	id: 2827
},
{
	name: "ECON 6450",
	description: "BLACK ENTREPRENEURSHIP",
	teachers: [],
	id: 2828
},
{
	name: "ECON 6460",
	description: "INDUSTRIAL ORGANIZATION",
	teachers: [],
	id: 2829
},
{
	name: "ECON 6510",
	description: "HEALTH ECONOMICS",
	teachers: [],
	id: 2830
},
{
	name: "ECON 6610",
	description: "ECONOMIC POLICY",
	teachers: [],
	id: 2831
},
{
	name: "ECON 6620",
	description: "ECONOMIC THOUGHT",
	teachers: [],
	id: 2832
},
{
	name: "ECON 6650",
	description: "INTERNATIONAL ECONOMICS",
	teachers: [],
	id: 2833
},
{
	name: "ECON 6XXX",
	description: "ECONOMICS ELECTIVE",
	teachers: [],
	id: 2834
},
{
	name: "ECON 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 2835
},
{
	name: "ECON 7004",
	description: "MATH FOR ECONOMISTS",
	teachers: [],
	id: 2836
},
{
	name: "ECON 7012",
	description: "MICROECONOMIC THEORY I",
	teachers: [],
	id: 2837
},
{
	name: "ECON 7013",
	description: "MICROECONOMIC THEORY II",
	teachers: [],
	id: 2838
},
{
	name: "ECON 7015",
	description: "GAME THEORY",
	teachers: [],
	id: 2839
},
{
	name: "ECON 7022",
	description: "ECONOMETRICS I",
	teachers: [],
	id: 2840
},
{
	name: "ECON 7023",
	description: "ECONOMETRICS II",
	teachers: [],
	id: 2841
},
{
	name: "ECON 7025",
	description: "EMPIRICAL RES METHODS",
	teachers: [],
	id: 2842
},
{
	name: "ECON 7026",
	description: "MICROECONOMET ANALYSIS",
	teachers: [],
	id: 2843
},
{
	name: "ECON 7031",
	description: "MICRO OF INNOVATION",
	teachers: [],
	id: 2844
},
{
	name: "ECON 7032",
	description: "MACRO OF INNOVATION",
	teachers: [],
	id: 2845
},
{
	name: "ECON 7102",
	description: "ENVIRONMENTAL ECON I",
	teachers: [],
	id: 2846
},
{
	name: "ECON 7103",
	description: "ENVIRONMENTAL ECON II",
	teachers: [],
	id: 2847
},
{
	name: "ECON 7111",
	description: "INDUST ORGANIZATION I",
	teachers: [],
	id: 2848
},
{
	name: "ECON 7112",
	description: "INDUSTRIAL ORGANIZATION II",
	teachers: [],
	id: 2849
},
{
	name: "ECON 7121",
	description: "INTERNATIONAL ECON I",
	teachers: [],
	id: 2850
},
{
	name: "ECON 7122",
	description: "INTERNATIONAL ECON II",
	teachers: [],
	id: 2851
},
{
	name: "ECON 7130",
	description: "RES DEV & PRES WORKSHOP",
	teachers: [],
	id: 2852
},
{
	name: "ECON 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2853
},
{
	name: "ECON 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2854
},
{
	name: "ECON 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2855
},
{
	name: "ECON 8910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2856
},
{
	name: "ECON 8990",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2857
},
{
	name: "ECON 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 2858
},
{
	name: "ECON 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2859
},
{
	name: "ECON 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 2860
},
{
	name: "ENGL 0199",
	description: "SUPPORT FOR ENGL 1101",
	teachers: [],
	id: 2861
},
{
	name: "ENGL 1101",
	description: "ENGLISH COMPOSITION I",
	teachers: [],
	id: 2862
},
{
	name: "ENGL 1102",
	description: "ENGLISH COMPOSITION II",
	teachers: [],
	id: 2863
},
{
	name: "ENTR 6001",
	description: "SYS THINKING PRINCIPLES",
	teachers: [],
	id: 2864
},
{
	name: "ENTR 6002",
	description: "SYS THINK APPLICATIONS",
	teachers: [],
	id: 2865
},
{
	name: "ENTR 6011",
	description: "ENT TRANS PRINCIPLES",
	teachers: [],
	id: 2866
},
{
	name: "ENTR 6012",
	description: "ENT TRANS PRACTICES",
	teachers: [],
	id: 2867
},
{
	name: "ENTR 6021",
	description: "ENT MODEL FUNDAMENTALS",
	teachers: [],
	id: 2868
},
{
	name: "ENTR 6022",
	description: "ENT MODELING PRACTICES",
	teachers: [],
	id: 2869
},
{
	name: "ENTR 6031",
	description: "VAL DRIVEN TRAN CONCEPTS",
	teachers: [],
	id: 2870
},
{
	name: "ENTR 6032",
	description: "VAL DRIVEN TRAN STRATEGY",
	teachers: [],
	id: 2871
},
{
	name: "ENTR 6041",
	description: "ENT STRATEGY ANALYSIS",
	teachers: [],
	id: 2872
},
{
	name: "ENTR 6042",
	description: "ENT STRATEGY PLANNING",
	teachers: [],
	id: 2873
},
{
	name: "ENTR 6051",
	description: "TRANS ECON PRINCIPLES",
	teachers: [],
	id: 2874
},
{
	name: "ENTR 6052",
	description: "TRANS ECON METHODOLOGY",
	teachers: [],
	id: 2875
},
{
	name: "ENTR 6053",
	description: "TRANS ECON INVESTMENTS",
	teachers: [],
	id: 2876
},
{
	name: "ENTR 6061",
	description: "FUND INFO STRATEGY & MGT",
	teachers: [],
	id: 2877
},
{
	name: "ENTR 6062",
	description: "INFO SYS IMPLEMENTATION",
	teachers: [],
	id: 2878
},
{
	name: "ENTR 6063",
	description: "INFO SYS LEADERSHIP",
	teachers: [],
	id: 2879
},
{
	name: "ENTR 7000",
	description: "THESIS",
	teachers: [],
	id: 2880
},
{
	name: "FREN 1001",
	description: "ELEMENTARY FRENCH I",
	teachers: [],
	id: 2881
},
{
	name: "FREN 1002",
	description: "ELEMENTARY FRENCH II",
	teachers: [],
	id: 2882
},
{
	name: "FREN 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2883
},
{
	name: "FREN 1XXX",
	description: "FRENCH ELECTIVE",
	teachers: [],
	id: 2884
},
{
	name: "FREN 2001",
	description: "FRENCH CULTURE I",
	teachers: [],
	id: 2885
},
{
	name: "FREN 2002",
	description: "FRENCH CULTURE II",
	teachers: [],
	id: 2886
},
{
	name: "FREN 2005",
	description: "LBAT CULTURE & LANGUAGE",
	teachers: [],
	id: 2887
},
{
	name: "FREN 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2888
},
{
	name: "FREN 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2889
},
{
	name: "FREN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2890
},
{
	name: "FREN 2XXX",
	description: "FRENCH ELECTIVE",
	teachers: [],
	id: 2891
},
{
	name: "FREN 3000",
	description: "SURVEY OF FRENCH LIT",
	teachers: [],
	id: 2892
},
{
	name: "FREN 3001",
	description: "FRENCH LIT 1800-1900",
	teachers: [],
	id: 2893
},
{
	name: "FREN 3002",
	description: "FRENCH LIT 1900-PRESENT",
	teachers: [],
	id: 2894
},
{
	name: "FREN 3004",
	description: "DRAMA WORKSHOP",
	teachers: [],
	id: 2895
},
{
	name: "FREN 3011",
	description: "FRANCE TODAY I",
	teachers: [],
	id: 2896
},
{
	name: "FREN 3012",
	description: "FRANCE TODAY II",
	teachers: [],
	id: 2897
},
{
	name: "FREN 3014",
	description: "INTRO TO CONTEMP FRANCE",
	teachers: [],
	id: 2898
},
{
	name: "FREN 3015",
	description: "SOCIAL IDENTITIES FRENCH",
	teachers: [],
	id: 2899
},
{
	name: "FREN 3017",
	description: "PARIS: MODERNITY TODAY",
	teachers: [],
	id: 2900
},
{
	name: "FREN 3030",
	description: "FRENCH PHONETICS",
	teachers: [],
	id: 2901
},
{
	name: "FREN 3040",
	description: "READING AND TRANSLATION",
	teachers: [],
	id: 2902
},
{
	name: "FREN 3061",
	description: "ADV BUSINESS FRENCH I",
	teachers: [],
	id: 2903
},
{
	name: "FREN 3062",
	description: "ADV BUSINESS FRENCH II",
	teachers: [],
	id: 2904
},
{
	name: "FREN 3110",
	description: "COMICS & GRAPHIC ARTS",
	teachers: [],
	id: 2905
},
{
	name: "FREN 3121",
	description: "ADVANCED COMPOSITION",
	teachers: [],
	id: 2906
},
{
	name: "FREN 3500",
	description: "FIELD WORK ABROAD",
	teachers: [],
	id: 2907
},
{
	name: "FREN 3551",
	description: "FREN FOR PROFESSIONS I",
	teachers: [],
	id: 2908
},
{
	name: "FREN 3552",
	description: "FREN FOR PROFESSIONS II",
	teachers: [],
	id: 2909
},
{
	name: "FREN 3555",
	description: "FRENCH FOR ENGINEERS I",
	teachers: [],
	id: 2910
},
{
	name: "FREN 3556",
	description: "FRENCH FOR ENGINEERS II",
	teachers: [],
	id: 2911
},
{
	name: "FREN 3691",
	description: "FRENCH LBAT I",
	teachers: [],
	id: 2912
},
{
	name: "FREN 3692",
	description: "FRENCH LBAT II",
	teachers: [],
	id: 2913
},
{
	name: "FREN 3693",
	description: "FRENCH LBAT III",
	teachers: [],
	id: 2914
},
{
	name: "FREN 3694",
	description: "LBAT FRENCH SEM ABROAD",
	teachers: [],
	id: 2915
},
{
	name: "FREN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2916
},
{
	name: "FREN 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2917
},
{
	name: "FREN 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2918
},
{
	name: "FREN 3XXX",
	description: "FRENCH ELECTIVE",
	teachers: [],
	id: 2919
},
{
	name: "FREN 4001",
	description: "FRENCH STYLISTICS",
	teachers: [],
	id: 2920
},
{
	name: "FREN 4011",
	description: "FRENCH ART",
	teachers: [],
	id: 2921
},
{
	name: "FREN 4013",
	description: "LITERATURE & VISUAL ARTS",
	teachers: [],
	id: 2922
},
{
	name: "FREN 4061",
	description: "FREN SCIENCE & TECH I",
	teachers: [],
	id: 2923
},
{
	name: "FREN 4062",
	description: "FREN SCIENCE & TECH II",
	teachers: [],
	id: 2924
},
{
	name: "FREN 4101",
	description: "FRANCOPHONE LIT I",
	teachers: [],
	id: 2925
},
{
	name: "FREN 4102",
	description: "FRANCOPHONE LIT II",
	teachers: [],
	id: 2926
},
{
	name: "FREN 4103",
	description: "FRANCOPHONE AFRICA",
	teachers: [],
	id: 2927
},
{
	name: "FREN 4105",
	description: "FRANCOPHONE CINEMA",
	teachers: [],
	id: 2928
},
{
	name: "FREN 4107",
	description: "AFRICAN DIASPORAS FRANCE",
	teachers: [],
	id: 2929
},
{
	name: "FREN 4200",
	description: "INTRO FRENCH PHILOSOPHY",
	teachers: [],
	id: 2930
},
{
	name: "FREN 4241",
	description: "FRENCH CINEMA I",
	teachers: [],
	id: 2931
},
{
	name: "FREN 4242",
	description: "FRENCH CINEMA II",
	teachers: [],
	id: 2932
},
{
	name: "FREN 4300",
	description: "FRANCE AND GLOBALIZATION",
	teachers: [],
	id: 2933
},
{
	name: "FREN 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 2934
},
{
	name: "FREN 4695",
	description: "FRENCH INTERNSHIP",
	teachers: [],
	id: 2935
},
{
	name: "FREN 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2936
},
{
	name: "FREN 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2937
},
{
	name: "FREN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2938
},
{
	name: "FREN 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2939
},
{
	name: "FREN 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2940
},
{
	name: "FREN 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2941
},
{
	name: "FREN 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2942
},
{
	name: "FREN 4XXX",
	description: "FRENCH ELECTIVE",
	teachers: [],
	id: 2943
},
{
	name: "FS 4000",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2944
},
{
	name: "FS 4003",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2945
},
{
	name: "FS 4006",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2946
},
{
	name: "FS 4009",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2947
},
{
	name: "FS 6000",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2948
},
{
	name: "FS 6003",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2949
},
{
	name: "FS 6006",
	description: "FOREIGN STUDIES",
	teachers: [],
	id: 2950
},
{
	name: "GRMN 1001",
	description: "ELEMENTARY GERMAN I",
	teachers: [],
	id: 2951
},
{
	name: "GRMN 1002",
	description: "ELEMENTARY GERMAN II",
	teachers: [],
	id: 2952
},
{
	name: "GRMN 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2953
},
{
	name: "GRMN 1XXX",
	description: "GERMAN ELECTIVE",
	teachers: [],
	id: 2954
},
{
	name: "GRMN 2001",
	description: "INTERMEDIATE GERMAN I",
	teachers: [],
	id: 2955
},
{
	name: "GRMN 2002",
	description: "INTERMEDIATE GERMAN II",
	teachers: [],
	id: 2956
},
{
	name: "GRMN 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2957
},
{
	name: "GRMN 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2958
},
{
	name: "GRMN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2959
},
{
	name: "GRMN 2XXX",
	description: "GERMAN ELECTIVE",
	teachers: [],
	id: 2960
},
{
	name: "GRMN 3010",
	description: "INTRO-GERMAN LITERATURE",
	teachers: [],
	id: 2961
},
{
	name: "GRMN 3011",
	description: "GERMANY TODAY",
	teachers: [],
	id: 2962
},
{
	name: "GRMN 3023",
	description: "ADVANCED GERMAN GRAMMAR",
	teachers: [],
	id: 2963
},
{
	name: "GRMN 3024",
	description: "CONVERSATION&COMPOSITION",
	teachers: [],
	id: 2964
},
{
	name: "GRMN 3026",
	description: "STYLISTICS",
	teachers: [],
	id: 2965
},
{
	name: "GRMN 3030",
	description: "CROSSING BORDERS LIT/CUL",
	teachers: [],
	id: 2966
},
{
	name: "GRMN 3055",
	description: "FAIRY TALES GRIMM/DISNEY",
	teachers: [],
	id: 2967
},
{
	name: "GRMN 3071",
	description: "INTRO-BUSINESS GERMAN I",
	teachers: [],
	id: 2968
},
{
	name: "GRMN 3110",
	description: "TV & ELECTRONIC CULTURE",
	teachers: [],
	id: 2969
},
{
	name: "GRMN 3695",
	description: "STRUCTURE,COMMUN&CORR",
	teachers: [],
	id: 2970
},
{
	name: "GRMN 3696",
	description: "CURRENT ISSUES",
	teachers: [],
	id: 2971
},
{
	name: "GRMN 3697",
	description: "COMMUNICATION & CULTURE",
	teachers: [],
	id: 2972
},
{
	name: "GRMN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2973
},
{
	name: "GRMN 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2974
},
{
	name: "GRMN 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2975
},
{
	name: "GRMN 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2976
},
{
	name: "GRMN 3XXX",
	description: "GERMAN ELECTIVE",
	teachers: [],
	id: 2977
},
{
	name: "GRMN 4010",
	description: "PERSPECTIVES GRMN MEDIA",
	teachers: [],
	id: 2978
},
{
	name: "GRMN 4012",
	description: "GERMAN IDENTITY",
	teachers: [],
	id: 2979
},
{
	name: "GRMN 4023",
	description: "SELECT READINGS-GER LIT",
	teachers: [],
	id: 2980
},
{
	name: "GRMN 4024",
	description: "GER FILM AND LITERATURE",
	teachers: [],
	id: 2981
},
{
	name: "GRMN 4025",
	description: "GERMAN CULTURE & FILM",
	teachers: [],
	id: 2982
},
{
	name: "GRMN 4026",
	description: "GERMAN POST-WALL CINEMA",
	teachers: [],
	id: 2983
},
{
	name: "GRMN 4061",
	description: "ADV BUSINESS GERMAN I",
	teachers: [],
	id: 2984
},
{
	name: "GRMN 4065",
	description: "EUROPEAN UNION",
	teachers: [],
	id: 2985
},
{
	name: "GRMN 4120",
	description: "LITERARY REPR OF HISTORY",
	teachers: [],
	id: 2986
},
{
	name: "GRMN 4126",
	description: "ADVANCED STYLISTICS",
	teachers: [],
	id: 2987
},
{
	name: "GRMN 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 2988
},
{
	name: "GRMN 4691",
	description: "BERLIN IN THE 20TH CENT",
	teachers: [],
	id: 2989
},
{
	name: "GRMN 4693",
	description: "IND TRANSF GRMN SOC/ECON",
	teachers: [],
	id: 2990
},
{
	name: "GRMN 4694",
	description: "200 YRS OF GRMN TECHNLGY",
	teachers: [],
	id: 2991
},
{
	name: "GRMN 4695",
	description: "GERMAN INTERNSHIP",
	teachers: [],
	id: 2992
},
{
	name: "GRMN 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 2993
},
{
	name: "GRMN 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 2994
},
{
	name: "GRMN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2995
},
{
	name: "GRMN 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2996
},
{
	name: "GRMN 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 2997
},
{
	name: "GRMN 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2998
},
{
	name: "GRMN 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 2999
},
{
	name: "GRMN 4XXX",
	description: "GERMAN ELECTIVE",
	teachers: [],
	id: 3000
},
{
	name: "GT 1000",
	description: "GT FRESHMAN SEMINAR",
	teachers: [],
	id: 3001
},
{
	name: "GT 1201",
	description: "EXPLR GRAND CHALLENGES",
	teachers: [],
	id: 3002
},
{
	name: "GT 1900",
	description: "RE-ENTRY PLANNING",
	teachers: [],
	id: 3003
},
{
	name: "GT 2100",
	description: "SUCCESS SEMINAR",
	teachers: [],
	id: 3004
},
{
	name: "GT 2201",
	description: "GRAND CHALLENGES RESEARCH PROJ",
	teachers: [],
	id: 3005
},
{
	name: "GT 2202",
	description: "GRAND CHALLENGES RESEARCH PROJ",
	teachers: [],
	id: 3006
},
{
	name: "GT 2500",
	description: "THINKBIG@TECH",
	teachers: [],
	id: 3007
},
{
	name: "GT 2694",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 3008
},
{
	name: "GT 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3009
},
{
	name: "GT 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3010
},
{
	name: "GT 2811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3011
},
{
	name: "GT 2812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3012
},
{
	name: "GT 2813",
	description: "TRANSFER STUDENT SEMINAR",
	teachers: [],
	id: 3013
},
{
	name: "GT 4500",
	description: "THINKBIG@TECH",
	teachers: [],
	id: 3014
},
{
	name: "GT 4694",
	description: "UNDERGRADUATE INTERNSHIP",
	teachers: [],
	id: 3015
},
{
	name: "GT 4701",
	description: "INVENTIONS AND STARTUPS",
	teachers: [],
	id: 3016
},
{
	name: "GT 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3017
},
{
	name: "GT 4813",
	description: "PROJ IN ENERGY SYSTEMS",
	teachers: [],
	id: 3018
},
{
	name: "GT 4823",
	description: "SPECIAL TOPICS - DESIGN",
	teachers: [],
	id: 3019
},
{
	name: "GTL 2000",
	description: "GA TECH LORRAINE SEMINAR",
	teachers: [],
	id: 3020
},
{
	name: "GTL 6001",
	description: "GTL AND SUPELEC",
	teachers: [],
	id: 3021
},
{
	name: "GTL 6010",
	description: "CENTRALESUPELEC",
	teachers: [],
	id: 3022
},
{
	name: "GTL 6011",
	description: "GTL - SUPELEC",
	teachers: [],
	id: 3023
},
{
	name: "GTL 6012",
	description: "GTL - ENSAM",
	teachers: [],
	id: 3024
},
{
	name: "GTL 6014",
	description: "GTL - ENSEA",
	teachers: [],
	id: 3025
},
{
	name: "GTL 6015",
	description: "GTL - INPL ENSEM",
	teachers: [],
	id: 3026
},
{
	name: "GTL 6016",
	description: "GTL - INPT ENSEEIHT",
	teachers: [],
	id: 3027
},
{
	name: "GTL 6018",
	description: "GTL - UTC",
	teachers: [],
	id: 3028
},
{
	name: "GTL 6020",
	description: "GTL-INSA",
	teachers: [],
	id: 3029
},
{
	name: "GTL 6021",
	description: "CENTRALESUPELEC",
	teachers: [],
	id: 3030
},
{
	name: "GTL 6022",
	description: "ENSTA BRETAGNE",
	teachers: [],
	id: 3031
},
{
	name: "GTL 6023",
	description: "IMT",
	teachers: [],
	id: 3032
},
{
	name: "GTL 6024",
	description: "USTL",
	teachers: [],
	id: 3033
},
{
	name: "GTL 6025",
	description: "GTL AND ENSAM",
	teachers: [],
	id: 3034
},
{
	name: "GTL 6110",
	description: "GTL - BRESCIA",
	teachers: [],
	id: 3035
},
{
	name: "GTL 6114",
	description: "GTL-UTT",
	teachers: [],
	id: 3036
},
{
	name: "GTL 6119",
	description: "GTL-ESIE",
	teachers: [],
	id: 3037
},
{
	name: "HIN 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3038
},
{
	name: "HIN 1824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3039
},
{
	name: "HIN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3040
},
{
	name: "HIN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3041
},
{
	name: "HIN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3042
},
{
	name: "HIST 2111",
	description: "UNITED STATES TO 1877",
	teachers: [],
	id: 3043
},
{
	name: "HIST 2112",
	description: "UNITED STATES SINCE 1877",
	teachers: [],
	id: 3044
},
{
	name: "HP 6403",
	description: "RADIOLOGICAL HEALTH I",
	teachers: [],
	id: 3045
},
{
	name: "HP 6406",
	description: "RADIOLOGICAL HEALTH II",
	teachers: [],
	id: 3046
},
{
	name: "HP 6416",
	description: "APP RADIOL HEALTH LAB",
	teachers: [],
	id: 3047
},
{
	name: "HP 6506",
	description: "OPERATIONAL HEALTH PHYS",
	teachers: [],
	id: 3048
},
{
	name: "HP 6601",
	description: "INDUSTRIAL HYGIENE",
	teachers: [],
	id: 3049
},
{
	name: "HP 6755",
	description: "RAD ASSESSMENT&WASTE MGT",
	teachers: [],
	id: 3050
},
{
	name: "HP 6756",
	description: "RADIATION PHYSICS",
	teachers: [],
	id: 3051
},
{
	name: "HP 6757",
	description: "RADIATION DETECTION",
	teachers: [],
	id: 3052
},
{
	name: "HP 6758",
	description: "NUMERICAL METHODS IN ME",
	teachers: [],
	id: 3053
},
{
	name: "HP 6XXX",
	description: "HEALTH PHYS ELECTIVE",
	teachers: [],
	id: 3054
},
{
	name: "HP 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 3055
},
{
	name: "HP 7757",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 3056
},
{
	name: "HP 8011",
	description: "SEMINAR-HEALTH PHYSICS",
	teachers: [],
	id: 3057
},
{
	name: "HP 8012",
	description: "SEMINAR-HEALTH PHYSICS",
	teachers: [],
	id: 3058
},
{
	name: "HP 8801",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3059
},
{
	name: "HP 8802",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3060
},
{
	name: "HP 8803",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3061
},
{
	name: "HP 8804",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3062
},
{
	name: "HP 8805",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3063
},
{
	name: "HP 8806",
	description: "SPEC TOP-HEALTH PHYSICS",
	teachers: [],
	id: 3064
},
{
	name: "HP 8901",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3065
},
{
	name: "HP 8902",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3066
},
{
	name: "HP 8903",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3067
},
{
	name: "HP 8904",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3068
},
{
	name: "HP 8905",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3069
},
{
	name: "HP 8906",
	description: "SPEC PROB-HEALTH PHYSICS",
	teachers: [],
	id: 3070
},
{
	name: "HP 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3071
},
{
	name: "HP 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3072
},
{
	name: "HP 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 3073
},
{
	name: "HPS 11XX",
	description: "WELLNESS REQUIREMENT",
	teachers: [],
	id: 3074
},
{
	name: "HPS 1XXX",
	description: "HEALTH&PERFORM SCI ELECT",
	teachers: [],
	id: 3075
},
{
	name: "HPS 2XXX",
	description: "HEALTH&PERFORM SCI ELECT",
	teachers: [],
	id: 3076
},
{
	name: "HS 4001",
	description: "INTRO TO HEALTH SYSTEMS",
	teachers: [],
	id: 3077
},
{
	name: "HS 6000",
	description: "HEALTHCARE DELIVERY",
	teachers: [],
	id: 3078
},
{
	name: "HS 6100",
	description: "HEALTHCARE DELIV MODELS",
	teachers: [],
	id: 3079
},
{
	name: "HS 6200",
	description: "HEALTHCARE FINANCIAL MGT",
	teachers: [],
	id: 3080
},
{
	name: "HS 6300",
	description: "HEALTHCARE INFO SYSTEMS",
	teachers: [],
	id: 3081
},
{
	name: "HS 6400",
	description: "HEALTH SYSTEMS PRACTICE",
	teachers: [],
	id: 3082
},
{
	name: "HS 6XXX",
	description: "HEALTH SYSTEMS ELECTIVE",
	teachers: [],
	id: 3083
},
{
	name: "HS 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3084
},
{
	name: "HS 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3085
},
{
	name: "HS 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3086
},
{
	name: "HS 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3087
},
{
	name: "HS 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3088
},
{
	name: "HS 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3089
},
{
	name: "HS 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3090
},
{
	name: "HTS 1001",
	description: "INTRO-HIST, TECH, & SOC",
	teachers: [],
	id: 3091
},
{
	name: "HTS 1031",
	description: "EUROPE SINCE RENAISSANCE",
	teachers: [],
	id: 3092
},
{
	name: "HTS 1081",
	description: "ENGINEERING IN HISTORY",
	teachers: [],
	id: 3093
},
{
	name: "HTS 1XXX",
	description: "HIST,TECH & SOC ELECTIVE",
	teachers: [],
	id: 3094
},
{
	name: "HTS 2001",
	description: "EARLY AMERICAN HISTORY",
	teachers: [],
	id: 3095
},
{
	name: "HTS 2002",
	description: "AMERICAN REVOLUTION",
	teachers: [],
	id: 3096
},
{
	name: "HTS 2006",
	description: "HIST-OLD SOUTH TO 1865",
	teachers: [],
	id: 3097
},
{
	name: "HTS 2007",
	description: "HISTORY OF THE NEW SOUTH",
	teachers: [],
	id: 3098
},
{
	name: "HTS 2011",
	description: "THE GILDED AGE",
	teachers: [],
	id: 3099
},
{
	name: "HTS 2013",
	description: "MODERN AMERICA",
	teachers: [],
	id: 3100
},
{
	name: "HTS 2015",
	description: "HISTORY SPORTS AMERICA",
	teachers: [],
	id: 3101
},
{
	name: "HTS 2016",
	description: "SOC ISSUES&PUBLIC POLICY",
	teachers: [],
	id: 3102
},
{
	name: "HTS 2036",
	description: "REVOLUTIONARY EUROPE",
	teachers: [],
	id: 3103
},
{
	name: "HTS 2037",
	description: "20TH CENTURY EUROPE",
	teachers: [],
	id: 3104
},
{
	name: "HTS 2040",
	description: "HIST ISLAMIC SOCIETIES",
	teachers: [],
	id: 3105
},
{
	name: "HTS 2041",
	description: "HIST-MODERN MIDDLE EAST",
	teachers: [],
	id: 3106
},
{
	name: "HTS 2061",
	description: "TRADITIONAL ASIA",
	teachers: [],
	id: 3107
},
{
	name: "HTS 2062",
	description: "ASIA IN THE MODERN WORLD",
	teachers: [],
	id: 3108
},
{
	name: "HTS 2080",
	description: "INTRO HIST DISEASE & MED",
	teachers: [],
	id: 3109
},
{
	name: "HTS 2081",
	description: "SCIENTIFIC REVOLUTION",
	teachers: [],
	id: 3110
},
{
	name: "HTS 2082",
	description: "TECH& SCI-INDUSTRIAL AGE",
	teachers: [],
	id: 3111
},
{
	name: "HTS 2084",
	description: "TECHNOLOGY AND SOCIETY",
	teachers: [],
	id: 3112
},
{
	name: "HTS 2085",
	description: "REEL HISTORY I",
	teachers: [],
	id: 3113
},
{
	name: "HTS 2100",
	description: "SCI, TECH & MODERN WORLD",
	teachers: [],
	id: 3114
},
{
	name: "HTS 2101",
	description: "RESEARCH METHODS",
	teachers: [],
	id: 3115
},
{
	name: "HTS 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3116
},
{
	name: "HTS 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3117
},
{
	name: "HTS 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3118
},
{
	name: "HTS 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3119
},
{
	name: "HTS 2823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3120
},
{
	name: "HTS 2927",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3121
},
{
	name: "HTS 2928",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3122
},
{
	name: "HTS 2929",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3123
},
{
	name: "HTS 2XXX",
	description: "HIST,TECH & SOC ELECTIVE",
	teachers: [],
	id: 3124
},
{
	name: "HTS 3001",
	description: "AMERICAN ECONOMIC HIST",
	teachers: [],
	id: 3125
},
{
	name: "HTS 3002",
	description: "HIST-AMERICAN BUSINESS",
	teachers: [],
	id: 3126
},
{
	name: "HTS 3003",
	description: "SOC OF ECON INSTITUTIONS",
	teachers: [],
	id: 3127
},
{
	name: "HTS 3005",
	description: "AMER ENVIRONMENTAL HIST",
	teachers: [],
	id: 3128
},
{
	name: "HTS 3006",
	description: "UNITED STATES LABOR HIST",
	teachers: [],
	id: 3129
},
{
	name: "HTS 3007",
	description: "SOC OF WORK AND INDUSTRY",
	teachers: [],
	id: 3130
},
{
	name: "HTS 3008",
	description: "CLASS,POWER & INEQUALITY",
	teachers: [],
	id: 3131
},
{
	name: "HTS 3009",
	description: "THE AMERICAN CIVIL WAR",
	teachers: [],
	id: 3132
},
{
	name: "HTS 3011",
	description: "CITY IN AMERICAN HIST",
	teachers: [],
	id: 3133
},
{
	name: "HTS 3012",
	description: "URBAN SOCIOLOGY",
	teachers: [],
	id: 3134
},
{
	name: "HTS 3015",
	description: "HISTORY OF VIETNAM WAR",
	teachers: [],
	id: 3135
},
{
	name: "HTS 3016",
	description: "WOMEN & GENDER IN U.S.",
	teachers: [],
	id: 3136
},
{
	name: "HTS 3017",
	description: "SOCIOLOGY OF GENDER",
	teachers: [],
	id: 3137
},
{
	name: "HTS 3018",
	description: "RELIGIONS & CULTS IN US",
	teachers: [],
	id: 3138
},
{
	name: "HTS 3019",
	description: "FAMILY&SEXUALITY IN U.S.",
	teachers: [],
	id: 3139
},
{
	name: "HTS 3020",
	description: "GENDER AND TECHNOLOGY",
	teachers: [],
	id: 3140
},
{
	name: "HTS 3021",
	description: "WOMEN IN SCIENCE & ENGR",
	teachers: [],
	id: 3141
},
{
	name: "HTS 3022",
	description: "GENDER AND SPORTS",
	teachers: [],
	id: 3142
},
{
	name: "HTS 3023",
	description: "FREE PEOPLE OF COLOR",
	teachers: [],
	id: 3143
},
{
	name: "HTS 3024",
	description: "AFRICAN-AMER HIS TO 1865",
	teachers: [],
	id: 3144
},
{
	name: "HTS 3025",
	description: "AFR-AMER HIST SINCE 1865",
	teachers: [],
	id: 3145
},
{
	name: "HTS 3026",
	description: "RACE AND ETHNICITY",
	teachers: [],
	id: 3146
},
{
	name: "HTS 3027",
	description: "CIVIL RIGHTS MOVEMENT",
	teachers: [],
	id: 3147
},
{
	name: "HTS 3028",
	description: "ANCIENT GREECE",
	teachers: [],
	id: 3148
},
{
	name: "HTS 3029",
	description: "ANCIENT ROME",
	teachers: [],
	id: 3149
},
{
	name: "HTS 3030",
	description: "MEDIEVAL EUROPE",
	teachers: [],
	id: 3150
},
{
	name: "HTS 3031",
	description: "EUROPEAN LABOR HISTORY",
	teachers: [],
	id: 3151
},
{
	name: "HTS 3032",
	description: "EUROPE INTELLECTUAL HIST",
	teachers: [],
	id: 3152
},
{
	name: "HTS 3033",
	description: "MEDIEVAL ENGLAND",
	teachers: [],
	id: 3153
},
{
	name: "HTS 3035",
	description: "BRITAIN 1815-1914",
	teachers: [],
	id: 3154
},
{
	name: "HTS 3036",
	description: "BRITAIN SINCE 1914",
	teachers: [],
	id: 3155
},
{
	name: "HTS 3038",
	description: "FRENCH REVOLUTION",
	teachers: [],
	id: 3156
},
{
	name: "HTS 3039",
	description: "MODERN FRANCE",
	teachers: [],
	id: 3157
},
{
	name: "HTS 3041",
	description: "MODERN SPAIN",
	teachers: [],
	id: 3158
},
{
	name: "HTS 3043",
	description: "MODERN GERMANY",
	teachers: [],
	id: 3159
},
{
	name: "HTS 3045",
	description: "NAZI GERMANY-HOLOCAUST",
	teachers: [],
	id: 3160
},
{
	name: "HTS 3046",
	description: "SCI POL CULTURE NAZI GER",
	teachers: [],
	id: 3161
},
{
	name: "HTS 3048",
	description: "MODERN RUSSIAN HISTORY",
	teachers: [],
	id: 3162
},
{
	name: "HTS 3051",
	description: "WOMEN&GENDER-MIDDLE EAST",
	teachers: [],
	id: 3163
},
{
	name: "HTS 3055",
	description: "GLOBALIZATION MODERN ERA",
	teachers: [],
	id: 3164
},
{
	name: "HTS 3061",
	description: "MODERN CHINA",
	teachers: [],
	id: 3165
},
{
	name: "HTS 3062",
	description: "MODERN JAPAN",
	teachers: [],
	id: 3166
},
{
	name: "HTS 3063",
	description: "BRITISH COLONIZATION",
	teachers: [],
	id: 3167
},
{
	name: "HTS 3064",
	description: "SOCIOLOGY OF DEVELOPMENT",
	teachers: [],
	id: 3168
},
{
	name: "HTS 3065",
	description: "HIST GLOBAL SOCIETIES",
	teachers: [],
	id: 3169
},
{
	name: "HTS 3066",
	description: "SOC-POLITICS & SOCIETY",
	teachers: [],
	id: 3170
},
{
	name: "HTS 3067",
	description: "REVOLUTIONARY MOVEMENT",
	teachers: [],
	id: 3171
},
{
	name: "HTS 3068",
	description: "SOCIAL MOVEMENTS",
	teachers: [],
	id: 3172
},
{
	name: "HTS 3069",
	description: "MODERN CUBA",
	teachers: [],
	id: 3173
},
{
	name: "HTS 3070",
	description: "CULTURE AND SOCIETY",
	teachers: [],
	id: 3174
},
{
	name: "HTS 3071",
	description: "SOCIOLOGY OF CRIME",
	teachers: [],
	id: 3175
},
{
	name: "HTS 3072",
	description: "SOCIOLOGY OF EDUCATION",
	teachers: [],
	id: 3176
},
{
	name: "HTS 3073",
	description: "SOCIOLOGY OF SPORTS",
	teachers: [],
	id: 3177
},
{
	name: "HTS 3075",
	description: "FOUNDATIONS SPORTS STDS",
	teachers: [],
	id: 3178
},
{
	name: "HTS 3080",
	description: "HISTORY OF ROCKETRY",
	teachers: [],
	id: 3179
},
{
	name: "HTS 3081",
	description: "TECH AND ENVIRONMENT",
	teachers: [],
	id: 3180
},
{
	name: "HTS 3082",
	description: "SOCIOLOGY OF SCIENCE",
	teachers: [],
	id: 3181
},
{
	name: "HTS 3083",
	description: "TECH & AMERICAN SOCIETY",
	teachers: [],
	id: 3182
},
{
	name: "HTS 3084",
	description: "CULTURE & TECHNOLOGY",
	teachers: [],
	id: 3183
},
{
	name: "HTS 3085",
	description: "LAW,TECHNOLOGY& POLITICS",
	teachers: [],
	id: 3184
},
{
	name: "HTS 3086",
	description: "SOC OF MEDICINE & HEALTH",
	teachers: [],
	id: 3185
},
{
	name: "HTS 3087",
	description: "HISTORY OF MEDICINE",
	teachers: [],
	id: 3186
},
{
	name: "HTS 3088",
	description: "RACE MEDICINE & SCIENCE",
	teachers: [],
	id: 3187
},
{
	name: "HTS 3089",
	description: "SCIENCE TECH & SPORTS",
	teachers: [],
	id: 3188
},
{
	name: "HTS 3100",
	description: "INTRO TO MUSEUM STUDIES",
	teachers: [],
	id: 3189
},
{
	name: "HTS 3102",
	description: "SOCIAL THEORY&STRUCTURE",
	teachers: [],
	id: 3190
},
{
	name: "HTS 3103",
	description: "HONOR'S THESIS",
	teachers: [],
	id: 3191
},
{
	name: "HTS 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3192
},
{
	name: "HTS 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3193
},
{
	name: "HTS 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3194
},
{
	name: "HTS 3XXX",
	description: "HIST,TECH & SOC ELECTIVE",
	teachers: [],
	id: 3195
},
{
	name: "HTS 4001",
	description: "SEMINAR IN US HISTORY",
	teachers: [],
	id: 3196
},
{
	name: "HTS 4011",
	description: "SEMINAR IN SOCIOLOGY",
	teachers: [],
	id: 3197
},
{
	name: "HTS 4031",
	description: "SEMINAR IN EUROPEAN HIST",
	teachers: [],
	id: 3198
},
{
	name: "HTS 4061",
	description: "SEMINAR IN ASIAN HISTORY",
	teachers: [],
	id: 3199
},
{
	name: "HTS 4081",
	description: "SEMINAR IN HIST OF TECH",
	teachers: [],
	id: 3200
},
{
	name: "HTS 4086",
	description: "SEM HEALTH MED & SOCIETY",
	teachers: [],
	id: 3201
},
{
	name: "HTS 4091",
	description: "SEMINAR GLOBAL ISSUES",
	teachers: [],
	id: 3202
},
{
	name: "HTS 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3203
},
{
	name: "HTS 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3204
},
{
	name: "HTS 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3205
},
{
	name: "HTS 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3206
},
{
	name: "HTS 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3207
},
{
	name: "HTS 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3208
},
{
	name: "HTS 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3209
},
{
	name: "HTS 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3210
},
{
	name: "HTS 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3211
},
{
	name: "HTS 4843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3212
},
{
	name: "HTS 4925",
	description: "SPECIAL PROBLEMS IN HTS",
	teachers: [],
	id: 3213
},
{
	name: "HTS 4926",
	description: "SPECIAL PROBLEMS IN HTS",
	teachers: [],
	id: 3214
},
{
	name: "HTS 4927",
	description: "SPECIAL PROBLEMS IN HTS",
	teachers: [],
	id: 3215
},
{
	name: "HTS 4928",
	description: "SPECIAL PROBLEMS IN HTS",
	teachers: [],
	id: 3216
},
{
	name: "HTS 4929",
	description: "SPECIAL PROBLEMS IN HTS",
	teachers: [],
	id: 3217
},
{
	name: "HTS 4990",
	description: "HTS INTERNSHIP",
	teachers: [],
	id: 3218
},
{
	name: "HTS 4XXX",
	description: "HIST,TECH & SOC ELECTIVE",
	teachers: [],
	id: 3219
},
{
	name: "HTS 6001",
	description: "PROSEMINAR-SOCIAL THEORY",
	teachers: [],
	id: 3220
},
{
	name: "HTS 6002",
	description: "PROSEMINAR-HIST OF TECH",
	teachers: [],
	id: 3221
},
{
	name: "HTS 6101",
	description: "SOC & POL HIST OF U.S.",
	teachers: [],
	id: 3222
},
{
	name: "HTS 6102",
	description: "SOC & POL HIST OF EUROPE",
	teachers: [],
	id: 3223
},
{
	name: "HTS 6103",
	description: "SOC&POL HIST-NONWESTERN",
	teachers: [],
	id: 3224
},
{
	name: "HTS 6106",
	description: "BUSINESS ORG & POL ECON",
	teachers: [],
	id: 3225
},
{
	name: "HTS 6110",
	description: "GENDER,SCIENCE & TECH",
	teachers: [],
	id: 3226
},
{
	name: "HTS 6111",
	description: "TECH & MODERN CULTURE",
	teachers: [],
	id: 3227
},
{
	name: "HTS 6112",
	description: "STUDIES-SCIENCE & ENGR",
	teachers: [],
	id: 3228
},
{
	name: "HTS 6113",
	description: "DEVELOPMENT TECH SCI",
	teachers: [],
	id: 3229
},
{
	name: "HTS 6114",
	description: "HIST SCIENCE",
	teachers: [],
	id: 3230
},
{
	name: "HTS 6115",
	description: "SOCIOLOGY SCI TECH",
	teachers: [],
	id: 3231
},
{
	name: "HTS 6116",
	description: "ENVIRONMENTAL HISTORY",
	teachers: [],
	id: 3232
},
{
	name: "HTS 6117",
	description: "URBANIZATION",
	teachers: [],
	id: 3233
},
{
	name: "HTS 6118",
	description: "SCI TECH & THE ECONOMY",
	teachers: [],
	id: 3234
},
{
	name: "HTS 6119",
	description: "RACE AND ETHNICITY",
	teachers: [],
	id: 3235
},
{
	name: "HTS 6120",
	description: "INEQUALITY SCI TECH",
	teachers: [],
	id: 3236
},
{
	name: "HTS 6121",
	description: "SCIENCE TECH SECURITY",
	teachers: [],
	id: 3237
},
{
	name: "HTS 6122",
	description: "HISTORY OF MEDICINE",
	teachers: [],
	id: 3238
},
{
	name: "HTS 6123",
	description: "SOCIAL & CULTURAL BIOMED",
	teachers: [],
	id: 3239
},
{
	name: "HTS 6124",
	description: "SCI&TECH BEYOND BORDERS",
	teachers: [],
	id: 3240
},
{
	name: "HTS 6743",
	description: "STS CORE SEMINAR",
	teachers: [],
	id: 3241
},
{
	name: "HTS 6XXX",
	description: "HIST,TECH&SOCIETY ELECT",
	teachers: [],
	id: 3242
},
{
	name: "HTS 7001",
	description: "SOCIOHISTORICAL ANALYSIS",
	teachers: [],
	id: 3243
},
{
	name: "HTS 7002",
	description: "RESEARCH & WRITING SEM",
	teachers: [],
	id: 3244
},
{
	name: "HTS 8001",
	description: "LABOR,INDUS,TECH&SOCIETY",
	teachers: [],
	id: 3245
},
{
	name: "HTS 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3246
},
{
	name: "HTS 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3247
},
{
	name: "HTS 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3248
},
{
	name: "HTS 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3249
},
{
	name: "HTS 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3250
},
{
	name: "HTS 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3251
},
{
	name: "HTS 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3252
},
{
	name: "HTS 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3253
},
{
	name: "HTS 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3254
},
{
	name: "HTS 8904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3255
},
{
	name: "HTS 8905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3256
},
{
	name: "HTS 8906",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3257
},
{
	name: "HTS 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3258
},
{
	name: "HTS 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3259
},
{
	name: "HTS 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 3260
},
{
	name: "ID 1XXX",
	description: "INDUSTRIAL DSGN ELECTIVE",
	teachers: [],
	id: 3261
},
{
	name: "ID 2011",
	description: "INTRO TO DESIGN I",
	teachers: [],
	id: 3262
},
{
	name: "ID 2012",
	description: "INTRO TO DESIGN II",
	teachers: [],
	id: 3263
},
{
	name: "ID 2021",
	description: "ID STUDIO 1",
	teachers: [],
	id: 3264
},
{
	name: "ID 2022",
	description: "ID STUDIO 2",
	teachers: [],
	id: 3265
},
{
	name: "ID 2201",
	description: "ISSUES FOR DESIGN",
	teachers: [],
	id: 3266
},
{
	name: "ID 2202",
	description: "HIST-MODERN INDUST DSGN",
	teachers: [],
	id: 3267
},
{
	name: "ID 2320",
	description: "HUMAN FACTORS IN DESIGN",
	teachers: [],
	id: 3268
},
{
	name: "ID 2401",
	description: "VISUAL DESIGN THINKING",
	teachers: [],
	id: 3269
},
{
	name: "ID 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3270
},
{
	name: "ID 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3271
},
{
	name: "ID 2XXX",
	description: "INDUSTRIAL DSGN ELECTIVE",
	teachers: [],
	id: 3272
},
{
	name: "ID 3011",
	description: "INTERMEDIATE DESIGN I",
	teachers: [],
	id: 3273
},
{
	name: "ID 3012",
	description: "INTERMEDIATE DESIGN II",
	teachers: [],
	id: 3274
},
{
	name: "ID 3031",
	description: "HEALTH DES STUDIO 1",
	teachers: [],
	id: 3275
},
{
	name: "ID 3032",
	description: "HEALTH DES STUDIO 2",
	teachers: [],
	id: 3276
},
{
	name: "ID 3041",
	description: "PRODUCT DEV STUDIO 1",
	teachers: [],
	id: 3277
},
{
	name: "ID 3042",
	description: "PRODUCT DEV STUDIO 2",
	teachers: [],
	id: 3278
},
{
	name: "ID 3051",
	description: "INTERACTIVE ID STUDIO 1",
	teachers: [],
	id: 3279
},
{
	name: "ID 3052",
	description: "INTERACTIVE ID STUDIO 2",
	teachers: [],
	id: 3280
},
{
	name: "ID 3103",
	description: "INDUST DSGN COMPUTING I",
	teachers: [],
	id: 3281
},
{
	name: "ID 3104",
	description: "INDUST DSGN COMPUTING II",
	teachers: [],
	id: 3282
},
{
	name: "ID 3201",
	description: "DESIGN AND COMMUNITY",
	teachers: [],
	id: 3283
},
{
	name: "ID 3301",
	description: "MATERIALS I",
	teachers: [],
	id: 3284
},
{
	name: "ID 3302",
	description: "MATERIALS II",
	teachers: [],
	id: 3285
},
{
	name: "ID 3320",
	description: "DESIGN METHODS",
	teachers: [],
	id: 3286
},
{
	name: "ID 3510",
	description: "INTERACTIVE PRODUCTS",
	teachers: [],
	id: 3287
},
{
	name: "ID 3520",
	description: "TANGIBLE INTERACTION",
	teachers: [],
	id: 3288
},
{
	name: "ID 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3289
},
{
	name: "ID 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3290
},
{
	name: "ID 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3291
},
{
	name: "ID 3902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3292
},
{
	name: "ID 3XXX",
	description: "INDUSTRIAL DSGN ELECTIVE",
	teachers: [],
	id: 3293
},
{
	name: "ID 4011",
	description: "ADVANCED DESIGN I",
	teachers: [],
	id: 3294
},
{
	name: "ID 4012",
	description: "ADVANCED DESIGN II",
	teachers: [],
	id: 3295
},
{
	name: "ID 4061",
	description: "ID CAPSTONE DES STUDIO 1",
	teachers: [],
	id: 3296
},
{
	name: "ID 4062",
	description: "ID CAPSTONE DES STUDIO 2",
	teachers: [],
	id: 3297
},
{
	name: "ID 4071",
	description: "INVENTION STUDIO 1",
	teachers: [],
	id: 3298
},
{
	name: "ID 4072",
	description: "INVENTION STUDIO 2",
	teachers: [],
	id: 3299
},
{
	name: "ID 4081",
	description: "ID/ME COLAB DES STUDIO 1",
	teachers: [],
	id: 3300
},
{
	name: "ID 4082",
	description: "ID/ME COLAB DES STUDIO 2",
	teachers: [],
	id: 3301
},
{
	name: "ID 4103",
	description: "ALIAS STUDIO I",
	teachers: [],
	id: 3302
},
{
	name: "ID 4104",
	description: "ALIAS STUDIO II",
	teachers: [],
	id: 3303
},
{
	name: "ID 4105",
	description: "ADV MODELING CONCEPTS",
	teachers: [],
	id: 3304
},
{
	name: "ID 4106",
	description: "PARAMETRIC PRODUCT MODEL",
	teachers: [],
	id: 3305
},
{
	name: "ID 4201",
	description: "DESIGN/RESEARCH METHODS",
	teachers: [],
	id: 3306
},
{
	name: "ID 4202",
	description: "PROFESSIONAL PRACTICE",
	teachers: [],
	id: 3307
},
{
	name: "ID 4203",
	description: "FRENCH SOCIETY & CULTURE",
	teachers: [],
	id: 3308
},
{
	name: "ID 4204",
	description: "THEORIZING DESIGN",
	teachers: [],
	id: 3309
},
{
	name: "ID 4205",
	description: "FRENCH DESIGN & CULTURE",
	teachers: [],
	id: 3310
},
{
	name: "ID 4206",
	description: "CULTURE OF OBJECTS",
	teachers: [],
	id: 3311
},
{
	name: "ID 4210",
	description: "INTRO UNIVERSAL DESIGN",
	teachers: [],
	id: 3312
},
{
	name: "ID 4320",
	description: "PROTOTYPING INTERACTION",
	teachers: [],
	id: 3313
},
{
	name: "ID 4418",
	description: "DESIGN SKETCHING",
	teachers: [],
	id: 3314
},
{
	name: "ID 4450",
	description: "PORTFOLIO DEVELOPMENT",
	teachers: [],
	id: 3315
},
{
	name: "ID 4510",
	description: "WEARABLE PRODUCT DESIGN",
	teachers: [],
	id: 3316
},
{
	name: "ID 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3317
},
{
	name: "ID 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3318
},
{
	name: "ID 4803",
	description: "SPECIAL TOPICS-FURNITURE",
	teachers: [],
	id: 3319
},
{
	name: "ID 4813",
	description: "SPEC TOP: SUSTAINABILITY",
	teachers: [],
	id: 3320
},
{
	name: "ID 4823",
	description: "SPECIAL TOPIC-INFO TECH",
	teachers: [],
	id: 3321
},
{
	name: "ID 4833",
	description: "SPEC TOP: COLLABORATIVE",
	teachers: [],
	id: 3322
},
{
	name: "ID 4843",
	description: "SPEC TOPICS: HIST/THEORY",
	teachers: [],
	id: 3323
},
{
	name: "ID 4900",
	description: "SPEC PROB: VISUAL COMM",
	teachers: [],
	id: 3324
},
{
	name: "ID 4901",
	description: "SPEC PROB:MENTOR PROGRAM",
	teachers: [],
	id: 3325
},
{
	name: "ID 4902",
	description: "SPEC PROB:MENTOR PROGRAM",
	teachers: [],
	id: 3326
},
{
	name: "ID 4903",
	description: "SPECIAL PROB: RESEARCH",
	teachers: [],
	id: 3327
},
{
	name: "ID 4904",
	description: "SPECIAL PROB: RESEARCH",
	teachers: [],
	id: 3328
},
{
	name: "ID 4XXX",
	description: "INDUSTRIAL DSGN ELECTIVE",
	teachers: [],
	id: 3329
},
{
	name: "ID 6100",
	description: "INTRO TO ID GRAD STUDIES",
	teachers: [],
	id: 3330
},
{
	name: "ID 6101",
	description: "HUMAN CENTERED DESIGN",
	teachers: [],
	id: 3331
},
{
	name: "ID 6200",
	description: "GRADUATE STUDIO I",
	teachers: [],
	id: 3332
},
{
	name: "ID 6201",
	description: "GRADUATE STUDIO II",
	teachers: [],
	id: 3333
},
{
	name: "ID 6214",
	description: "STRATEGIC DESIGN LANGUAGE",
	teachers: [],
	id: 3334
},
{
	name: "ID 6215",
	description: "SERVICE DESIGN",
	teachers: [],
	id: 3335
},
{
	name: "ID 6271",
	description: "HEALTHCARE DES OF FUTURE",
	teachers: [],
	id: 3336
},
{
	name: "ID 6400",
	description: "MASTER'S PROJECT",
	teachers: [],
	id: 3337
},
{
	name: "ID 6401",
	description: "VISUALIZING INTERACTION",
	teachers: [],
	id: 3338
},
{
	name: "ID 6420",
	description: "ADVANCED SKETCHING",
	teachers: [],
	id: 3339
},
{
	name: "ID 6509",
	description: "COMP CREATIVITY DES COGN",
	teachers: [],
	id: 3340
},
{
	name: "ID 6510",
	description: "DESIGN FOR INTERACTION",
	teachers: [],
	id: 3341
},
{
	name: "ID 6515",
	description: "INTERFACE PROTOTYPING",
	teachers: [],
	id: 3342
},
{
	name: "ID 6753",
	description: "HCI PROF PREP & PRACTICE",
	teachers: [],
	id: 3343
},
{
	name: "ID 6763",
	description: "DESIGN INTERACTV ENVIRON",
	teachers: [],
	id: 3344
},
{
	name: "ID 6800",
	description: "ADV UNIVERSAL DESIGN",
	teachers: [],
	id: 3345
},
{
	name: "ID 6820",
	description: "WEB USABILITY & ACCESS",
	teachers: [],
	id: 3346
},
{
	name: "ID 6998",
	description: "HCI MASTER'S PROJECT",
	teachers: [],
	id: 3347
},
{
	name: "ID 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 3348
},
{
	name: "ID 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3349
},
{
	name: "ID 8903",
	description: "SPECIAL PROBLEMS IN HCI",
	teachers: [],
	id: 3350
},
{
	name: "IL 6450",
	description: "ANALYTICAL METHODS",
	teachers: [],
	id: 3351
},
{
	name: "IL 6451",
	description: "DEMAND AND YIELD MGT",
	teachers: [],
	id: 3352
},
{
	name: "IL 6452",
	description: "REVERSE GREEN LOGISTICS",
	teachers: [],
	id: 3353
},
{
	name: "IL 6453",
	description: "LABOR RELATIONS",
	teachers: [],
	id: 3354
},
{
	name: "IL 6454",
	description: "EUROPEAN TRADE&TRANSPORT",
	teachers: [],
	id: 3355
},
{
	name: "IL 6455",
	description: "FINANCE FOR LOGISTICS",
	teachers: [],
	id: 3356
},
{
	name: "IL 6456",
	description: "FINANCIAL DECISIONS",
	teachers: [],
	id: 3357
},
{
	name: "IL 6457",
	description: "AMERICAN TRADE&TRANSPORT",
	teachers: [],
	id: 3358
},
{
	name: "IL 6458",
	description: "WAREHOUSING",
	teachers: [],
	id: 3359
},
{
	name: "IL 6459",
	description: "INTL TRADE & TRANSPORT",
	teachers: [],
	id: 3360
},
{
	name: "IL 6460",
	description: "INTL FREIGHT MANAGEMENT",
	teachers: [],
	id: 3361
},
{
	name: "IL 6461",
	description: "ASIAN TRADE & TRANSPORT",
	teachers: [],
	id: 3362
},
{
	name: "IL 6464",
	description: "ERP SYSTEMS",
	teachers: [],
	id: 3363
},
{
	name: "IL 6465",
	description: "MARKETING CHANNELS",
	teachers: [],
	id: 3364
},
{
	name: "IL 6466",
	description: "GLOBAL SUPPLY CHAIN",
	teachers: [],
	id: 3365
},
{
	name: "IL 6467",
	description: "TRANSPORTATION",
	teachers: [],
	id: 3366
},
{
	name: "IL 6468",
	description: "MANUFACTURING",
	teachers: [],
	id: 3367
},
{
	name: "IL 6472",
	description: "SUPPLY CHAIN LAB III",
	teachers: [],
	id: 3368
},
{
	name: "IL 6475",
	description: "CASES-INTL LOGISTICS I",
	teachers: [],
	id: 3369
},
{
	name: "IL 6476",
	description: "CASES-INTL LOGISTICS II",
	teachers: [],
	id: 3370
},
{
	name: "IL 6477",
	description: "CASES-INTL LOGISTICS III",
	teachers: [],
	id: 3371
},
{
	name: "IL 6478",
	description: "CASES-INTL LOGISTICS IV",
	teachers: [],
	id: 3372
},
{
	name: "IL 6480",
	description: "SUPPLY CHAIN LAB I",
	teachers: [],
	id: 3373
},
{
	name: "IL 6481",
	description: "SUPPLY CHAIN LAB II",
	teachers: [],
	id: 3374
},
{
	name: "IL 6483",
	description: "SUPPLY CHAIN LAB IV",
	teachers: [],
	id: 3375
},
{
	name: "IL 6484",
	description: "SUPPLY CHAIN LAB V",
	teachers: [],
	id: 3376
},
{
	name: "IL 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3377
},
{
	name: "IMBA 6000",
	description: "DECISION MAKING",
	teachers: [],
	id: 3378
},
{
	name: "IMBA 6010",
	description: "CROSS CULTURAL COMMUN",
	teachers: [],
	id: 3379
},
{
	name: "IMBA 6021",
	description: "DATA ANALYSIS FOR BUS",
	teachers: [],
	id: 3380
},
{
	name: "IMBA 6030",
	description: "ORG BEHAVIOR AND THEORY",
	teachers: [],
	id: 3381
},
{
	name: "IMBA 6031",
	description: "LEADERSHP & ORG BEHAVIOR",
	teachers: [],
	id: 3382
},
{
	name: "IMBA 6040",
	description: "GLOBAL ECONOMICS",
	teachers: [],
	id: 3383
},
{
	name: "IMBA 6050",
	description: "FIN & MANAGERIAL ACCOUNT",
	teachers: [],
	id: 3384
},
{
	name: "IMBA 6061",
	description: "INFORMATION SYSTEMS",
	teachers: [],
	id: 3385
},
{
	name: "IMBA 6070",
	description: "WORLD FINANCE",
	teachers: [],
	id: 3386
},
{
	name: "IMBA 6071",
	description: "FINANCIAL MANAGEMENT",
	teachers: [],
	id: 3387
},
{
	name: "IMBA 6081",
	description: "MANF AND SERVICE MGT",
	teachers: [],
	id: 3388
},
{
	name: "IMBA 6090",
	description: "MARKETING&CONSUMER BEHAV",
	teachers: [],
	id: 3389
},
{
	name: "IMBA 6101",
	description: "PROD STRAT FOR GLOB MKTS",
	teachers: [],
	id: 3390
},
{
	name: "IMBA 6110",
	description: "RISK MANAGEMENT",
	teachers: [],
	id: 3391
},
{
	name: "IMBA 6121",
	description: "GLOBAL WORKFORCE MGT",
	teachers: [],
	id: 3392
},
{
	name: "IMBA 6131",
	description: "STRATEGIC MANAGEMENT",
	teachers: [],
	id: 3393
},
{
	name: "IMBA 6140",
	description: "COMPARATIVE SYSTEMS",
	teachers: [],
	id: 3394
},
{
	name: "IMBA 6150",
	description: "ENTREPRENEURSHIP",
	teachers: [],
	id: 3395
},
{
	name: "IMBA 6160",
	description: "BUSINESS REGULATIONS",
	teachers: [],
	id: 3396
},
{
	name: "IMBA 6170",
	description: "QUALITY,SUST TECH,COMPET",
	teachers: [],
	id: 3397
},
{
	name: "IMBA 6180",
	description: "LEADERSHIP SKILLS",
	teachers: [],
	id: 3398
},
{
	name: "IMBA 6200",
	description: "STRATEGIC BUS SIMULATION",
	teachers: [],
	id: 3399
},
{
	name: "IMBA 6210",
	description: "ANALY OF EMERGING TECH",
	teachers: [],
	id: 3400
},
{
	name: "IMBA 6220",
	description: "ENTREPRENEURSHIP SEMINAR",
	teachers: [],
	id: 3401
},
{
	name: "IMBA 6230",
	description: "INTL BUS NEGOTIATIONS",
	teachers: [],
	id: 3402
},
{
	name: "IMBA 6240",
	description: "ETHICS IN GLOBAL BUS",
	teachers: [],
	id: 3403
},
{
	name: "IMBA 6250",
	description: "INTERNATIONAL FINANCE",
	teachers: [],
	id: 3404
},
{
	name: "IMBA 6260",
	description: "GLOB SUPP CHAIN & E-COMM",
	teachers: [],
	id: 3405
},
{
	name: "IMBA 6300",
	description: "ANAL OF GLOBAL ENV I",
	teachers: [],
	id: 3406
},
{
	name: "IMBA 6310",
	description: "ANAL OF GLOBAL ENV II",
	teachers: [],
	id: 3407
},
{
	name: "IMBA 6311",
	description: "ANAL OF GLOBAL ENVIRON",
	teachers: [],
	id: 3408
},
{
	name: "IMBA 6400",
	description: "GLOBAL STRATEGY PROJ I",
	teachers: [],
	id: 3409
},
{
	name: "IMBA 6401",
	description: "GLOBAL STRATEGY PROJ I",
	teachers: [],
	id: 3410
},
{
	name: "IMBA 6410",
	description: "GLOBAL STRATEGY PROJ II",
	teachers: [],
	id: 3411
},
{
	name: "IMBA 6411",
	description: "GLOBAL STRATEGY PROJ II",
	teachers: [],
	id: 3412
},
{
	name: "IMBA 6420",
	description: "GLOBAL STRATEGY PROJ III",
	teachers: [],
	id: 3413
},
{
	name: "IMBA 6430",
	description: "BUS STR SUSTAINABILITY",
	teachers: [],
	id: 3414
},
{
	name: "INTA 1002",
	description: "EFFECTIVE STUDY ABROAD",
	teachers: [],
	id: 3415
},
{
	name: "INTA 1050",
	description: "THE WORLD TODAY",
	teachers: [],
	id: 3416
},
{
	name: "INTA 1110",
	description: "INTRO TO INT'L RELATIONS",
	teachers: [],
	id: 3417
},
{
	name: "INTA 1200",
	description: "AMERICAN GOVERNMENT",
	teachers: [],
	id: 3418
},
{
	name: "INTA 1XXX",
	description: "INT'L AFFAIRS ELECTIVE",
	teachers: [],
	id: 3419
},
{
	name: "INTA 2001",
	description: "CAREERS IN INTL AFFAIRS",
	teachers: [],
	id: 3420
},
{
	name: "INTA 2010",
	description: "EMPIRICAL METHODS",
	teachers: [],
	id: 3421
},
{
	name: "INTA 2030",
	description: "ETHICS IN INT'L AFFAIRS",
	teachers: [],
	id: 3422
},
{
	name: "INTA 2040",
	description: "SCI,TECH & INT'L AFFAIRS",
	teachers: [],
	id: 3423
},
{
	name: "INTA 2042",
	description: "INTRO-GLOBAL WMD ISSUES",
	teachers: [],
	id: 3424
},
{
	name: "INTA 2050",
	description: "INTRO TO GLOBAL DEVELPMT",
	teachers: [],
	id: 3425
},
{
	name: "INTA 2100",
	description: "GREAT POWER RELATIONS",
	teachers: [],
	id: 3426
},
{
	name: "INTA 2120",
	description: "INTRO TO INTL SECURITY",
	teachers: [],
	id: 3427
},
{
	name: "INTA 2210",
	description: "POL PHIL & IDEOLOGIES",
	teachers: [],
	id: 3428
},
{
	name: "INTA 2220",
	description: "GOVT& POL-WESTERN EUROPE",
	teachers: [],
	id: 3429
},
{
	name: "INTA 2221",
	description: "POLITICS OF THE EU",
	teachers: [],
	id: 3430
},
{
	name: "INTA 2230",
	description: "GOVT & POLITICS OF ASIA",
	teachers: [],
	id: 3431
},
{
	name: "INTA 2241",
	description: "GOVT POL SOC-LAT AMERICA",
	teachers: [],
	id: 3432
},
{
	name: "INTA 2260",
	description: "GOVT POL SOC-MIDDLE EAST",
	teachers: [],
	id: 3433
},
{
	name: "INTA 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3434
},
{
	name: "INTA 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3435
},
{
	name: "INTA 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3436
},
{
	name: "INTA 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3437
},
{
	name: "INTA 2823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3438
},
{
	name: "INTA 2833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3439
},
{
	name: "INTA 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3440
},
{
	name: "INTA 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3441
},
{
	name: "INTA 2903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3442
},
{
	name: "INTA 2XXX",
	description: "INT'L AFFAIRS ELECTIVE",
	teachers: [],
	id: 3443
},
{
	name: "INTA 3010",
	description: "INTL TECHNOLOGY TRANSFER",
	teachers: [],
	id: 3444
},
{
	name: "INTA 3012",
	description: "WAR IN THE 20TH CENTURY",
	teachers: [],
	id: 3445
},
{
	name: "INTA 3020",
	description: "CONTEMPORARY MEXICO",
	teachers: [],
	id: 3446
},
{
	name: "INTA 3031",
	description: "HUMAN RIGHTS",
	teachers: [],
	id: 3447
},
{
	name: "INTA 3042",
	description: "ENERGY & INTL SECURITY",
	teachers: [],
	id: 3448
},
{
	name: "INTA 3043",
	description: "SPACE POLICY",
	teachers: [],
	id: 3449
},
{
	name: "INTA 3044",
	description: "GLOBAL POLITICS OF TECH",
	teachers: [],
	id: 3450
},
{
	name: "INTA 3050",
	description: "GLOBAL CITIZENSHIP",
	teachers: [],
	id: 3451
},
{
	name: "INTA 3101",
	description: "INT'L INSTITUTIONS",
	teachers: [],
	id: 3452
},
{
	name: "INTA 3102",
	description: "PROBLEM OF PROLIFERATION",
	teachers: [],
	id: 3453
},
{
	name: "INTA 3103",
	description: "CHALLENGE OF TERRORISM",
	teachers: [],
	id: 3454
},
{
	name: "INTA 3104",
	description: "INT'L NEGOTATIONS",
	teachers: [],
	id: 3455
},
{
	name: "INTA 3110",
	description: "U.S. FOREIGN POLICY",
	teachers: [],
	id: 3456
},
{
	name: "INTA 3111",
	description: "U.S. DEFENSE POLICY",
	teachers: [],
	id: 3457
},
{
	name: "INTA 3120",
	description: "EUROPEAN SECURITY ISSUES",
	teachers: [],
	id: 3458
},
{
	name: "INTA 3121",
	description: "RUSSIA AND EURASIA",
	teachers: [],
	id: 3459
},
{
	name: "INTA 3130",
	description: "FOREIGN POLICY OF CHINA",
	teachers: [],
	id: 3460
},
{
	name: "INTA 3131",
	description: "PACIFIC SECURITY ISSUES",
	teachers: [],
	id: 3461
},
{
	name: "INTA 3203",
	description: "COMPARATIVE POLITICS",
	teachers: [],
	id: 3462
},
{
	name: "INTA 3220",
	description: "GOV'T & POLITICS-GERMANY",
	teachers: [],
	id: 3463
},
{
	name: "INTA 3221",
	description: "POST-SOVIET POLITICS",
	teachers: [],
	id: 3464
},
{
	name: "INTA 3223",
	description: "TRANSATLANTIC RELATIONS",
	teachers: [],
	id: 3465
},
{
	name: "INTA 3230",
	description: "GOV'T & POLITICS-CHINA",
	teachers: [],
	id: 3466
},
{
	name: "INTA 3231",
	description: "GOV'T & POLITICS-JAPAN",
	teachers: [],
	id: 3467
},
{
	name: "INTA 3240",
	description: "GOV'T & POLITICS-AFRICA",
	teachers: [],
	id: 3468
},
{
	name: "INTA 3241",
	description: "LATIN AMERICAN POLITICS",
	teachers: [],
	id: 3469
},
{
	name: "INTA 3242",
	description: "SOCCER & GLOBAL POLITICS",
	teachers: [],
	id: 3470
},
{
	name: "INTA 3243",
	description: "US-LATIN AMERICAN RELAT",
	teachers: [],
	id: 3471
},
{
	name: "INTA 3260",
	description: "MIDDLE EAST RELATIONS",
	teachers: [],
	id: 3472
},
{
	name: "INTA 3301",
	description: "INT'L POLITICAL ECON",
	teachers: [],
	id: 3473
},
{
	name: "INTA 3303",
	description: "POL ECONOMY-DEVELOPMENT",
	teachers: [],
	id: 3474
},
{
	name: "INTA 3304",
	description: "INT'L TRADE & PRODUCTION",
	teachers: [],
	id: 3475
},
{
	name: "INTA 3321",
	description: "POL ECON-EUROPE INTEGRAT",
	teachers: [],
	id: 3476
},
{
	name: "INTA 3330",
	description: "POLITICAL ECONOMY-CHINA",
	teachers: [],
	id: 3477
},
{
	name: "INTA 3331",
	description: "POLITICAL ECONOMY-JAPAN",
	teachers: [],
	id: 3478
},
{
	name: "INTA 3773",
	description: "GLOBAL ISSUES&LEADERSHIP",
	teachers: [],
	id: 3479
},
{
	name: "INTA 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3480
},
{
	name: "INTA 3813",
	description: "SPECIL TOPICS",
	teachers: [],
	id: 3481
},
{
	name: "INTA 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3482
},
{
	name: "INTA 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3483
},
{
	name: "INTA 3XXX",
	description: "INT'L AFFAIRS ELECTIVE",
	teachers: [],
	id: 3484
},
{
	name: "INTA 4007",
	description: "INTELL & INT'L SECURITY",
	teachers: [],
	id: 3485
},
{
	name: "INTA 4011",
	description: "TECHNOLOGY& MILITARY ORG",
	teachers: [],
	id: 3486
},
{
	name: "INTA 4014",
	description: "SCENARIO AND PATHGAMING",
	teachers: [],
	id: 3487
},
{
	name: "INTA 4016",
	description: "STRATEGY & ARMS CONTROL",
	teachers: [],
	id: 3488
},
{
	name: "INTA 4040",
	description: "ENVIRONMENTAL POLITICS",
	teachers: [],
	id: 3489
},
{
	name: "INTA 4050",
	description: "INT'L AFFAIR&TECH POLICY",
	teachers: [],
	id: 3490
},
{
	name: "INTA 4060",
	description: "INTERNATIONAL LAW",
	teachers: [],
	id: 3491
},
{
	name: "INTA 4101",
	description: "VIETNAM WAR POLITICS",
	teachers: [],
	id: 3492
},
{
	name: "INTA 4121",
	description: "SEM EUROPE-EURO SECURITY",
	teachers: [],
	id: 3493
},
{
	name: "INTA 4230",
	description: "SEM IN EUROPE-EURO UNION",
	teachers: [],
	id: 3494
},
{
	name: "INTA 4240",
	description: "ARGENTINE POLITICS",
	teachers: [],
	id: 3495
},
{
	name: "INTA 4241",
	description: "DEMOCRACY-THIRD WORLD",
	teachers: [],
	id: 3496
},
{
	name: "INTA 4330",
	description: "CHINESE ECONOMIC REFORM",
	teachers: [],
	id: 3497
},
{
	name: "INTA 4331",
	description: "CHINESE POLITICS",
	teachers: [],
	id: 3498
},
{
	name: "INTA 4332",
	description: "CHINESE INSTITUTIONS",
	teachers: [],
	id: 3499
},
{
	name: "INTA 4333",
	description: "KOREAN SECURITY POLICY",
	teachers: [],
	id: 3500
},
{
	name: "INTA 4340",
	description: "LATIN AMERICAN ECONOMICS",
	teachers: [],
	id: 3501
},
{
	name: "INTA 4500",
	description: "INTA PRO-SEMINAR",
	teachers: [],
	id: 3502
},
{
	name: "INTA 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3503
},
{
	name: "INTA 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3504
},
{
	name: "INTA 4740",
	description: "SEM-POLITICAL ECONOMY",
	teachers: [],
	id: 3505
},
{
	name: "INTA 4741",
	description: "THESIS-POLITICAL ECONOMY",
	teachers: [],
	id: 3506
},
{
	name: "INTA 4742",
	description: "MOD, SIM&MILITARY GAMING",
	teachers: [],
	id: 3507
},
{
	name: "INTA 4743",
	description: "JAPAN SOCIETY & POLITICS",
	teachers: [],
	id: 3508
},
{
	name: "INTA 4744",
	description: "GLOBAL DEVELOP CAPSTONE",
	teachers: [],
	id: 3509
},
{
	name: "INTA 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3510
},
{
	name: "INTA 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3511
},
{
	name: "INTA 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3512
},
{
	name: "INTA 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3513
},
{
	name: "INTA 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3514
},
{
	name: "INTA 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3515
},
{
	name: "INTA 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3516
},
{
	name: "INTA 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3517
},
{
	name: "INTA 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3518
},
{
	name: "INTA 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3519
},
{
	name: "INTA 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3520
},
{
	name: "INTA 4XXX",
	description: "INT'L AFFAIRS ELECTIVE",
	teachers: [],
	id: 3521
},
{
	name: "INTA 6002",
	description: "STRATEGIC DECISIONS",
	teachers: [],
	id: 3522
},
{
	name: "INTA 6003",
	description: "EMPIRICAL RESEARCH METH",
	teachers: [],
	id: 3523
},
{
	name: "INTA 6004",
	description: "MODEL,FORECAST&DECISION",
	teachers: [],
	id: 3524
},
{
	name: "INTA 6011",
	description: "INTL TRADE&TECH TRANSFER",
	teachers: [],
	id: 3525
},
{
	name: "INTA 6014",
	description: "SCENARIO AND PATH GAMING",
	teachers: [],
	id: 3526
},
{
	name: "INTA 6015",
	description: "TECHNOLOGY& MILITARY ORG",
	teachers: [],
	id: 3527
},
{
	name: "INTA 6016",
	description: "STRATEGY & ARMS CONTROL",
	teachers: [],
	id: 3528
},
{
	name: "INTA 6022",
	description: "ETHICS & INTL AFFAIRS",
	teachers: [],
	id: 3529
},
{
	name: "INTA 6102",
	description: "INTL RELATIONS THEORY",
	teachers: [],
	id: 3530
},
{
	name: "INTA 6103",
	description: "INTERNATIONAL SECURITY",
	teachers: [],
	id: 3531
},
{
	name: "INTA 6105",
	description: "INTL INSTITUTIONAL DSGN",
	teachers: [],
	id: 3532
},
{
	name: "INTA 6106",
	description: "THE STATE-INTL AFFAIRS",
	teachers: [],
	id: 3533
},
{
	name: "INTA 6111",
	description: "US FOREIGN SECUR STRAT",
	teachers: [],
	id: 3534
},
{
	name: "INTA 6121",
	description: "SEM IN EUROPE: EURO SEC",
	teachers: [],
	id: 3535
},
{
	name: "INTA 6131",
	description: "PACIFIC SECURITY ISSUES",
	teachers: [],
	id: 3536
},
{
	name: "INTA 6202",
	description: "COMPARATIVE POLITICS",
	teachers: [],
	id: 3537
},
{
	name: "INTA 6203",
	description: "COMPAR INSTITUT DESIGN",
	teachers: [],
	id: 3538
},
{
	name: "INTA 6302",
	description: "INTL POLITICAL ECONOMY",
	teachers: [],
	id: 3539
},
{
	name: "INTA 6304",
	description: "MODERNIZATION&DEVELOPMNT",
	teachers: [],
	id: 3540
},
{
	name: "INTA 6306",
	description: "GLOBALIZATION",
	teachers: [],
	id: 3541
},
{
	name: "INTA 6320",
	description: "SEM IN EUROPE-EURO UNION",
	teachers: [],
	id: 3542
},
{
	name: "INTA 6330",
	description: "POL ECON-EAST ASIA",
	teachers: [],
	id: 3543
},
{
	name: "INTA 6331",
	description: "CHINESE POLITICAL ECON",
	teachers: [],
	id: 3544
},
{
	name: "INTA 6740",
	description: "INNOVATION AND THE STATE",
	teachers: [],
	id: 3545
},
{
	name: "INTA 6742",
	description: "MOD, SIM&MILITARY GAMING",
	teachers: [],
	id: 3546
},
{
	name: "INTA 6753",
	description: "COMP SCIENCE&TECH POLICY",
	teachers: [],
	id: 3547
},
{
	name: "INTA 6XXX",
	description: "INTL AFFAIRS ELECTIVE",
	teachers: [],
	id: 3548
},
{
	name: "INTA 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 3549
},
{
	name: "INTA 8000",
	description: "SCI,TECH&INT'L AFFAIRS I",
	teachers: [],
	id: 3550
},
{
	name: "INTA 8001",
	description: "SCI,TECH&INTL AFFAIRS II",
	teachers: [],
	id: 3551
},
{
	name: "INTA 8010",
	description: "IAST PH.D. PROSEMINAR",
	teachers: [],
	id: 3552
},
{
	name: "INTA 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3553
},
{
	name: "INTA 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3554
},
{
	name: "INTA 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3555
},
{
	name: "INTA 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3556
},
{
	name: "INTA 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3557
},
{
	name: "INTA 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3558
},
{
	name: "INTA 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3559
},
{
	name: "INTA 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3560
},
{
	name: "INTA 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3561
},
{
	name: "INTA 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3562
},
{
	name: "INTA 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3563
},
{
	name: "INTA 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3564
},
{
	name: "INTA 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3565
},
{
	name: "INTA 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 3566
},
{
	name: "INTN 2000",
	description: "PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3567
},
{
	name: "INTN 2006",
	description: "P/T PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3568
},
{
	name: "INTN 2009",
	description: "P/T PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3569
},
{
	name: "INTN 3011",
	description: "WORK ABROAD SEMESTER",
	teachers: [],
	id: 3570
},
{
	name: "INTN 3016",
	description: "WORK ABROAD SEMESTER",
	teachers: [],
	id: 3571
},
{
	name: "INTN 3019",
	description: "WORK ABROAD SEMESTER",
	teachers: [],
	id: 3572
},
{
	name: "INTN 4000",
	description: "PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3573
},
{
	name: "INTN 4006",
	description: "P/T PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3574
},
{
	name: "INTN 4009",
	description: "P/T PROFESSIONAL INTERNSHIP",
	teachers: [],
	id: 3575
},
{
	name: "IPCO 3011",
	description: "INT'L PLAN CO-OP ABROAD",
	teachers: [],
	id: 3576
},
{
	name: "IPFS 3012",
	description: "INT'L PLAN-EXCHANGE PRGM",
	teachers: [],
	id: 3577
},
{
	name: "IPIN 3011",
	description: "INT'L PLAN INTERN ABROAD",
	teachers: [],
	id: 3578
},
{
	name: "IPSA 3012",
	description: "INT'L PLAN-STUDY ABROAD",
	teachers: [],
	id: 3579
},
{
	name: "ISYE 1XXX",
	description: "INDUST&SYS ENGR ELECTIVE",
	teachers: [],
	id: 3580
},
{
	name: "ISYE 2027",
	description: "PROBABILITY WITH APPS",
	teachers: [],
	id: 3581
},
{
	name: "ISYE 2028",
	description: "BASIC STATISTICAL METH",
	teachers: [],
	id: 3582
},
{
	name: "ISYE 2127",
	description: "HONORS PROBABILITY",
	teachers: [],
	id: 3583
},
{
	name: "ISYE 2128",
	description: "HONORS STATISTICS",
	teachers: [],
	id: 3584
},
{
	name: "ISYE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3585
},
{
	name: "ISYE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3586
},
{
	name: "ISYE 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3587
},
{
	name: "ISYE 2XXX",
	description: "INDUST&SYS ENGR ELECTIVE",
	teachers: [],
	id: 3588
},
{
	name: "ISYE 3025",
	description: "ENGINEERING ECONOMY",
	teachers: [],
	id: 3589
},
{
	name: "ISYE 3039",
	description: "METHODS-QUALITY IMPROVE",
	teachers: [],
	id: 3590
},
{
	name: "ISYE 3044",
	description: "SIMULATION ANALY & DSGN",
	teachers: [],
	id: 3591
},
{
	name: "ISYE 3103",
	description: "SPLY CHAIN MOD:LOGISTICS",
	teachers: [],
	id: 3592
},
{
	name: "ISYE 3104",
	description: "SPLY CHAIN MOD:MANF&WARE",
	teachers: [],
	id: 3593
},
{
	name: "ISYE 3133",
	description: "ENGINEERING OPTIMIZATION",
	teachers: [],
	id: 3594
},
{
	name: "ISYE 3232",
	description: "STOCHASTIC MFG&SERV SYS",
	teachers: [],
	id: 3595
},
{
	name: "ISYE 3770",
	description: "STATISTICS& APPLICATIONS",
	teachers: [],
	id: 3596
},
{
	name: "ISYE 3790",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 3597
},
{
	name: "ISYE 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3598
},
{
	name: "ISYE 3XXX",
	description: "INDUST&SYS ENGR ELECTIVE",
	teachers: [],
	id: 3599
},
{
	name: "ISYE 4009",
	description: "HUMAN INTEGRATED SYSTEMS",
	teachers: [],
	id: 3600
},
{
	name: "ISYE 4031",
	description: "REGRESSION/FORECASTING",
	teachers: [],
	id: 3601
},
{
	name: "ISYE 4106",
	description: "SENIOR DESIGN",
	teachers: [],
	id: 3602
},
{
	name: "ISYE 4111",
	description: "ADV SUPPLY CHAIN LOGISTS",
	teachers: [],
	id: 3603
},
{
	name: "ISYE 4133",
	description: "ADVANCED OPTIMIZATION",
	teachers: [],
	id: 3604
},
{
	name: "ISYE 4232",
	description: "ADVANCED STOCHASTIC SYS",
	teachers: [],
	id: 3605
},
{
	name: "ISYE 4301",
	description: "SUPPLY CHAIN ECONOMICS",
	teachers: [],
	id: 3606
},
{
	name: "ISYE 4311",
	description: "CAPITAL INVEST ANALYSIS",
	teachers: [],
	id: 3607
},
{
	name: "ISYE 4331",
	description: "HONORS OPTIMIZATION",
	teachers: [],
	id: 3608
},
{
	name: "ISYE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3609
},
{
	name: "ISYE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3610
},
{
	name: "ISYE 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 3611
},
{
	name: "ISYE 4800",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3612
},
{
	name: "ISYE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3613
},
{
	name: "ISYE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3614
},
{
	name: "ISYE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3615
},
{
	name: "ISYE 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3616
},
{
	name: "ISYE 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3617
},
{
	name: "ISYE 4833",
	description: "HONORS TOPICS",
	teachers: [],
	id: 3618
},
{
	name: "ISYE 4991",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3619
},
{
	name: "ISYE 4992",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3620
},
{
	name: "ISYE 4993",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3621
},
{
	name: "ISYE 4XXX",
	description: "INDUST&SYS ENGR ELECTIVE",
	teachers: [],
	id: 3622
},
{
	name: "ISYE 6101",
	description: "ORGANIZATIONAL BEHAVIOR",
	teachers: [],
	id: 3623
},
{
	name: "ISYE 6201",
	description: "MANUFACTURING SYSTEMS",
	teachers: [],
	id: 3624
},
{
	name: "ISYE 6202",
	description: "WAREHOUSING SYSTEMS",
	teachers: [],
	id: 3625
},
{
	name: "ISYE 6203",
	description: "TRANSP&SUPPLY CHAIN SYS",
	teachers: [],
	id: 3626
},
{
	name: "ISYE 6205",
	description: "COGNITIVE ENGINEERING",
	teachers: [],
	id: 3627
},
{
	name: "ISYE 6215",
	description: "HUMAN-MACHINE SYSTEMS",
	teachers: [],
	id: 3628
},
{
	name: "ISYE 6223",
	description: "HUMAN DECISION MAKING",
	teachers: [],
	id: 3629
},
{
	name: "ISYE 6224",
	description: "TOPICS:HUMAN-INTEGR SYS",
	teachers: [],
	id: 3630
},
{
	name: "ISYE 6225",
	description: "ENGINEERING ECONOMY",
	teachers: [],
	id: 3631
},
{
	name: "ISYE 6227",
	description: "INTRO TO FINANCIAL ENGR",
	teachers: [],
	id: 3632
},
{
	name: "ISYE 6229",
	description: "PRODUCTIVITY ANALYSIS",
	teachers: [],
	id: 3633
},
{
	name: "ISYE 6230",
	description: "ECONOMIC DECISION ANALY",
	teachers: [],
	id: 3634
},
{
	name: "ISYE 6231",
	description: "HUMAN INTEGRATED SYSTEMS",
	teachers: [],
	id: 3635
},
{
	name: "ISYE 6232",
	description: "REAL-TIME SYSTEMS",
	teachers: [],
	id: 3636
},
{
	name: "ISYE 6234",
	description: "MEASUREMENT & EVALUATION",
	teachers: [],
	id: 3637
},
{
	name: "ISYE 6307",
	description: "SCHEDULING THEORY",
	teachers: [],
	id: 3638
},
{
	name: "ISYE 6320",
	description: "PUBLIC IMPACT APPS OF OR",
	teachers: [],
	id: 3639
},
{
	name: "ISYE 6331",
	description: "STATISTICS SUP CHN ENGRG",
	teachers: [],
	id: 3640
},
{
	name: "ISYE 6332",
	description: "FINANCE SUP CHN ENGRG",
	teachers: [],
	id: 3641
},
{
	name: "ISYE 6333",
	description: "OPNS RES FOR SUP CHNS I",
	teachers: [],
	id: 3642
},
{
	name: "ISYE 6334",
	description: "OPNS RES FOR SUP CHNS II",
	teachers: [],
	id: 3643
},
{
	name: "ISYE 6335",
	description: "SUPPLY CHAIN ENGRG I",
	teachers: [],
	id: 3644
},
{
	name: "ISYE 6336",
	description: "SUPPLY CHAIN ENGRG II",
	teachers: [],
	id: 3645
},
{
	name: "ISYE 6337",
	description: "SUPPLY CHAIN ENGRG III",
	teachers: [],
	id: 3646
},
{
	name: "ISYE 6338",
	description: "SUPPLY CHAIN STRATEGY",
	teachers: [],
	id: 3647
},
{
	name: "ISYE 6339",
	description: "SUPPLY CHAIN INFO SYS",
	teachers: [],
	id: 3648
},
{
	name: "ISYE 6340",
	description: "SEMINAR IN SUP CHN ENGRG",
	teachers: [],
	id: 3649
},
{
	name: "ISYE 6341",
	description: "CAPSTONE PROJECT I",
	teachers: [],
	id: 3650
},
{
	name: "ISYE 6342",
	description: "CAPSTONE PROJECT II",
	teachers: [],
	id: 3651
},
{
	name: "ISYE 6380",
	description: "PROD PLAN & CONTROL",
	teachers: [],
	id: 3652
},
{
	name: "ISYE 6381",
	description: "MFG RELIABILITY",
	teachers: [],
	id: 3653
},
{
	name: "ISYE 6382",
	description: "QUALITY & SIX SIGMA",
	teachers: [],
	id: 3654
},
{
	name: "ISYE 6383",
	description: "MANU SUPPLY CHAIN OPS",
	teachers: [],
	id: 3655
},
{
	name: "ISYE 6401",
	description: "STAT MODELS & DSGN EXPTS",
	teachers: [],
	id: 3656
},
{
	name: "ISYE 6402",
	description: "TIME SERIES ANALYSIS",
	teachers: [],
	id: 3657
},
{
	name: "ISYE 6404",
	description: "NONPARAMETRIC DATA ANALY",
	teachers: [],
	id: 3658
},
{
	name: "ISYE 6405",
	description: "STATISTICAL METH-MFG DGN",
	teachers: [],
	id: 3659
},
{
	name: "ISYE 6411",
	description: "STATISTICS",
	teachers: [],
	id: 3660
},
{
	name: "ISYE 6412",
	description: "THEORETICAL STATISTICS",
	teachers: [],
	id: 3661
},
{
	name: "ISYE 6413",
	description: "DSGN & ANALY-EXPERIMENTS",
	teachers: [],
	id: 3662
},
{
	name: "ISYE 6414",
	description: "REGRESSION ANALYSIS",
	teachers: [],
	id: 3663
},
{
	name: "ISYE 6416",
	description: "COMPUTATIONAL STATISTICS",
	teachers: [],
	id: 3664
},
{
	name: "ISYE 6420",
	description: "BAYESIAN STATISTICS",
	teachers: [],
	id: 3665
},
{
	name: "ISYE 6421",
	description: "BIOSTATISTICS",
	teachers: [],
	id: 3666
},
{
	name: "ISYE 6644",
	description: "SIMULATION",
	teachers: [],
	id: 3667
},
{
	name: "ISYE 6645",
	description: "MONTE CARLO METHODS",
	teachers: [],
	id: 3668
},
{
	name: "ISYE 6650",
	description: "PROBABILISTIC MODELS",
	teachers: [],
	id: 3669
},
{
	name: "ISYE 6656",
	description: "QUEUEING THEORY",
	teachers: [],
	id: 3670
},
{
	name: "ISYE 6661",
	description: "LINEAR OPTIMIZATION",
	teachers: [],
	id: 3671
},
{
	name: "ISYE 6662",
	description: "DISCRETE OPTIMIZATION",
	teachers: [],
	id: 3672
},
{
	name: "ISYE 6663",
	description: "NONLINEAR OPTIMIZATION",
	teachers: [],
	id: 3673
},
{
	name: "ISYE 6664",
	description: "STOCHASTIC OPTIMIZATION",
	teachers: [],
	id: 3674
},
{
	name: "ISYE 6669",
	description: "DETERMINISTIC OPTIMIZ",
	teachers: [],
	id: 3675
},
{
	name: "ISYE 6673",
	description: "FINANCIAL OPTIMIZATION",
	teachers: [],
	id: 3676
},
{
	name: "ISYE 6679",
	description: "COMPUTATIONAL METHODS",
	teachers: [],
	id: 3677
},
{
	name: "ISYE 6701",
	description: "ENERGY TECHNOL & POLICY",
	teachers: [],
	id: 3678
},
{
	name: "ISYE 6739",
	description: "STATISTICAL METHODS",
	teachers: [],
	id: 3679
},
{
	name: "ISYE 6740",
	description: "COMPUTATIONAL DATA ANALY",
	teachers: [],
	id: 3680
},
{
	name: "ISYE 6759",
	description: "STOCH PROCESS-FINANCE",
	teachers: [],
	id: 3681
},
{
	name: "ISYE 6761",
	description: "STOCHASTIC PROCESSES I",
	teachers: [],
	id: 3682
},
{
	name: "ISYE 6762",
	description: "STOCHASTIC PROCESSES II",
	teachers: [],
	id: 3683
},
{
	name: "ISYE 6767",
	description: "SYS-COMPUTATION FINANCE",
	teachers: [],
	id: 3684
},
{
	name: "ISYE 6769",
	description: "FIXED INCOME SECURITIES",
	teachers: [],
	id: 3685
},
{
	name: "ISYE 6772",
	description: "MGT RESOURCES-TECH FIRMS",
	teachers: [],
	id: 3686
},
{
	name: "ISYE 6773",
	description: "HIGH-TECH VENTURES",
	teachers: [],
	id: 3687
},
{
	name: "ISYE 6774",
	description: "MOT PROJECT",
	teachers: [],
	id: 3688
},
{
	name: "ISYE 6775",
	description: "MOT SEMINAR",
	teachers: [],
	id: 3689
},
{
	name: "ISYE 6777",
	description: "ANALYSIS-EMERGING TECH",
	teachers: [],
	id: 3690
},
{
	name: "ISYE 6779",
	description: "DYNAMIC SYSTEM MODELING",
	teachers: [],
	id: 3691
},
{
	name: "ISYE 6781",
	description: "RELIABILITY THEORY",
	teachers: [],
	id: 3692
},
{
	name: "ISYE 6783",
	description: "FINANCIAL DATA ANALYSIS",
	teachers: [],
	id: 3693
},
{
	name: "ISYE 6785",
	description: "THE PRACTICE OF QCF",
	teachers: [],
	id: 3694
},
{
	name: "ISYE 6792",
	description: "MANUFACTURING SEMINAR",
	teachers: [],
	id: 3695
},
{
	name: "ISYE 6793",
	description: "ADV TOPICS IN QCF",
	teachers: [],
	id: 3696
},
{
	name: "ISYE 6795",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 3697
},
{
	name: "ISYE 6805",
	description: "RELIABILITY ENGINEERING",
	teachers: [],
	id: 3698
},
{
	name: "ISYE 6810",
	description: "SYS MONTR&PROGNOSTICS",
	teachers: [],
	id: 3699
},
{
	name: "ISYE 6831",
	description: "ADVANCED SIMULATION",
	teachers: [],
	id: 3700
},
{
	name: "ISYE 6832",
	description: "SIMULATION THEORY-METH",
	teachers: [],
	id: 3701
},
{
	name: "ISYE 6XXX",
	description: "INDUST&SYS ENGR ELECTIVE",
	teachers: [],
	id: 3702
},
{
	name: "ISYE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 3703
},
{
	name: "ISYE 7201",
	description: "PROD&SERVICE SYS ENGG",
	teachers: [],
	id: 3704
},
{
	name: "ISYE 7203",
	description: "LOGISTICS SYSTEMS ENGG",
	teachers: [],
	id: 3705
},
{
	name: "ISYE 7204",
	description: "INFO PROD & SER SYS",
	teachers: [],
	id: 3706
},
{
	name: "ISYE 7210",
	description: "REAL-TIME INTERACT SIM",
	teachers: [],
	id: 3707
},
{
	name: "ISYE 7400",
	description: "ADV DESIGN-EXPERIMENTS",
	teachers: [],
	id: 3708
},
{
	name: "ISYE 7401",
	description: "ADV STATISTICAL MODELING",
	teachers: [],
	id: 3709
},
{
	name: "ISYE 7405",
	description: "MULTIVARIATE DATA ANALY",
	teachers: [],
	id: 3710
},
{
	name: "ISYE 7406",
	description: "DATA MINING&STAT LEARN",
	teachers: [],
	id: 3711
},
{
	name: "ISYE 7441",
	description: "THEORY OF LINEAR MODELS",
	teachers: [],
	id: 3712
},
{
	name: "ISYE 7510",
	description: "GRAPH ALGORITHMS",
	teachers: [],
	id: 3713
},
{
	name: "ISYE 7653",
	description: "CASE STUDIES-LOGIST/MFG",
	teachers: [],
	id: 3714
},
{
	name: "ISYE 7661",
	description: "LINEAR INEQUALITIES",
	teachers: [],
	id: 3715
},
{
	name: "ISYE 7682",
	description: "CONVEXITY",
	teachers: [],
	id: 3716
},
{
	name: "ISYE 7683",
	description: "ADV NONLINEAR PROG",
	teachers: [],
	id: 3717
},
{
	name: "ISYE 7686",
	description: "ADV COMBINATORIAL OPT",
	teachers: [],
	id: 3718
},
{
	name: "ISYE 7687",
	description: "ADV INTEGER PROGRAMMING",
	teachers: [],
	id: 3719
},
{
	name: "ISYE 7688",
	description: "COMP MATH PROG",
	teachers: [],
	id: 3720
},
{
	name: "ISYE 7790",
	description: "COGNITIVE MODELING",
	teachers: [],
	id: 3721
},
{
	name: "ISYE 8011",
	description: "GRADUATE SEMINAR",
	teachers: [],
	id: 3722
},
{
	name: "ISYE 8012",
	description: "GRADUATE SEMINAR",
	teachers: [],
	id: 3723
},
{
	name: "ISYE 8013",
	description: "GRADUATE SEMINAR",
	teachers: [],
	id: 3724
},
{
	name: "ISYE 8014",
	description: "TOPICS IN SIAC",
	teachers: [],
	id: 3725
},
{
	name: "ISYE 8795",
	description: "COLLOQUIUM-COGNITIVE SCI",
	teachers: [],
	id: 3726
},
{
	name: "ISYE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3727
},
{
	name: "ISYE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3728
},
{
	name: "ISYE 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3729
},
{
	name: "ISYE 8813",
	description: "SPECIAL TOPICS IN OR",
	teachers: [],
	id: 3730
},
{
	name: "ISYE 8843",
	description: "ADV. TOPICS-STATISTICS",
	teachers: [],
	id: 3731
},
{
	name: "ISYE 8851",
	description: "TOPICS IN MANUFACTURING",
	teachers: [],
	id: 3732
},
{
	name: "ISYE 8852",
	description: "TOPICS IN LOGISTICS",
	teachers: [],
	id: 3733
},
{
	name: "ISYE 8861",
	description: "TOPICS IN STOCHASTICS",
	teachers: [],
	id: 3734
},
{
	name: "ISYE 8862",
	description: "TOPICS IN SIMULATION",
	teachers: [],
	id: 3735
},
{
	name: "ISYE 8871",
	description: "TOPICS IN OPTIMIZATION",
	teachers: [],
	id: 3736
},
{
	name: "ISYE 8872",
	description: "TOPICS-NONLINEAR OPTIMIZ",
	teachers: [],
	id: 3737
},
{
	name: "ISYE 8893",
	description: "SPEC TOPIC-COGNITIVE SCI",
	teachers: [],
	id: 3738
},
{
	name: "ISYE 8900",
	description: "SPECIAL PROBLEMS IN ISYE",
	teachers: [],
	id: 3739
},
{
	name: "ISYE 8901",
	description: "SPECIAL PROBLEMS IN OR",
	teachers: [],
	id: 3740
},
{
	name: "ISYE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3741
},
{
	name: "ISYE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3742
},
{
	name: "ISYE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 3743
},
{
	name: "JAPN 1001",
	description: "ELEMENTARY JAPANESE I",
	teachers: [],
	id: 3744
},
{
	name: "JAPN 1002",
	description: "ELEMENTARY JAPANESE II",
	teachers: [],
	id: 3745
},
{
	name: "JAPN 10X1",
	description: "TRANS ELEMENTARY JAPANESE I",
	teachers: [],
	id: 3746
},
{
	name: "JAPN 10X2",
	description: "TRANS ELEMENTARY JAPANESE II",
	teachers: [],
	id: 3747
},
{
	name: "JAPN 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3748
},
{
	name: "JAPN 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3749
},
{
	name: "JAPN 1XXX",
	description: "JAPANESE ELECTIVE",
	teachers: [],
	id: 3750
},
{
	name: "JAPN 2001",
	description: "INTERMEDIATE JAPANESE I",
	teachers: [],
	id: 3751
},
{
	name: "JAPN 2002",
	description: "INTERMEDIATE JAPANESE II",
	teachers: [],
	id: 3752
},
{
	name: "JAPN 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3753
},
{
	name: "JAPN 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3754
},
{
	name: "JAPN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3755
},
{
	name: "JAPN 2XXX",
	description: "JAPANESE ELECTIVE",
	teachers: [],
	id: 3756
},
{
	name: "JAPN 3001",
	description: "ADVANCED JAPANESE I",
	teachers: [],
	id: 3757
},
{
	name: "JAPN 3061",
	description: "TECHNICAL JAPANESE I",
	teachers: [],
	id: 3758
},
{
	name: "JAPN 3691",
	description: "TECH & SCIENTIFIC JAPN",
	teachers: [],
	id: 3759
},
{
	name: "JAPN 3692",
	description: "BUSINESS JAPANESE",
	teachers: [],
	id: 3760
},
{
	name: "JAPN 3693",
	description: "JAPAN TODAY",
	teachers: [],
	id: 3761
},
{
	name: "JAPN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3762
},
{
	name: "JAPN 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3763
},
{
	name: "JAPN 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3764
},
{
	name: "JAPN 3XXX",
	description: "JAPANESE ELECTIVE",
	teachers: [],
	id: 3765
},
{
	name: "JAPN 4113",
	description: "ADV READING & LISTENING",
	teachers: [],
	id: 3766
},
{
	name: "JAPN 4123",
	description: "TECH&BUS JPN TRANSLATION",
	teachers: [],
	id: 3767
},
{
	name: "JAPN 4143",
	description: "LING CULTURE RELATIVISM",
	teachers: [],
	id: 3768
},
{
	name: "JAPN 4163",
	description: "JAPN LITERATURE CULTURE",
	teachers: [],
	id: 3769
},
{
	name: "JAPN 4165",
	description: "CRIT RDGS JPN CULT/ARTS",
	teachers: [],
	id: 3770
},
{
	name: "JAPN 4173",
	description: "ANIME: CULTURE&SOCIETY",
	teachers: [],
	id: 3771
},
{
	name: "JAPN 4183",
	description: "JAPN CULT/SOC THRU SONGS",
	teachers: [],
	id: 3772
},
{
	name: "JAPN 4231",
	description: "DESIGN WEBSITES IN JPN",
	teachers: [],
	id: 3773
},
{
	name: "JAPN 4233",
	description: "CALI PEDAGOGY FOR JPN",
	teachers: [],
	id: 3774
},
{
	name: "JAPN 4235",
	description: "3D RPG DEVELOP. JAPN.",
	teachers: [],
	id: 3775
},
{
	name: "JAPN 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 3776
},
{
	name: "JAPN 4543",
	description: "ADV JAPANESE FOR NLP DEV",
	teachers: [],
	id: 3777
},
{
	name: "JAPN 4695",
	description: "JAPANESE INTERNSHIP",
	teachers: [],
	id: 3778
},
{
	name: "JAPN 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3779
},
{
	name: "JAPN 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3780
},
{
	name: "JAPN 4743",
	description: "JAPAN SOCIETY & POLITICS",
	teachers: [],
	id: 3781
},
{
	name: "JAPN 4750",
	description: "JAPN DISCOURSE & GRAMMAR",
	teachers: [],
	id: 3782
},
{
	name: "JAPN 4780",
	description: "JPN APPLIED LINGUISTICS",
	teachers: [],
	id: 3783
},
{
	name: "JAPN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3784
},
{
	name: "JAPN 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3785
},
{
	name: "JAPN 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3786
},
{
	name: "JAPN 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3787
},
{
	name: "JAPN 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3788
},
{
	name: "JAPN 4XXX",
	description: "JAPANESE ELECTIVE",
	teachers: [],
	id: 3789
},
{
	name: "KOR 1001",
	description: "ELEMENTARY KOREAN I",
	teachers: [],
	id: 3790
},
{
	name: "KOR 1002",
	description: "ELEMENTARY KOREAN II",
	teachers: [],
	id: 3791
},
{
	name: "KOR 10X1",
	description: "TRANS ELEMENTARY KOREAN I",
	teachers: [],
	id: 3792
},
{
	name: "KOR 10X2",
	description: "TRANS ELEMENTARY KOREAN II",
	teachers: [],
	id: 3793
},
{
	name: "KOR 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3794
},
{
	name: "KOR 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3795
},
{
	name: "KOR 1XXX",
	description: "KOREAN ELECTIVE",
	teachers: [],
	id: 3796
},
{
	name: "KOR 2001",
	description: "INTERMEDIATE KOREAN I",
	teachers: [],
	id: 3797
},
{
	name: "KOR 2002",
	description: "INTERMEDIATE KOREAN II",
	teachers: [],
	id: 3798
},
{
	name: "KOR 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3799
},
{
	name: "KOR 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3800
},
{
	name: "KOR 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3801
},
{
	name: "KOR 2XXX",
	description: "KOREAN ELECTIVE",
	teachers: [],
	id: 3802
},
{
	name: "KOR 3001",
	description: "ADVANCED KOREAN I",
	teachers: [],
	id: 3803
},
{
	name: "KOR 3002",
	description: "ADVANCED KOREAN II",
	teachers: [],
	id: 3804
},
{
	name: "KOR 3691",
	description: "BUSINESS KOREAN",
	teachers: [],
	id: 3805
},
{
	name: "KOR 3692",
	description: "ISSUES & TECH IN KOREA",
	teachers: [],
	id: 3806
},
{
	name: "KOR 3693",
	description: "EXPLORING MODERN KOREA",
	teachers: [],
	id: 3807
},
{
	name: "KOR 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3808
},
{
	name: "KOR 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3809
},
{
	name: "KOR 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3810
},
{
	name: "KOR 3XXX",
	description: "KOREAN ELECTIVE",
	teachers: [],
	id: 3811
},
{
	name: "KOR 4001",
	description: "CONTEMPORARY KOREAN",
	teachers: [],
	id: 3812
},
{
	name: "KOR 4002",
	description: "SELECT RDNGS OF MOD KOR",
	teachers: [],
	id: 3813
},
{
	name: "KOR 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3814
},
{
	name: "KOR 4699",
	description: "UNDEGRADUATE RESEARCH",
	teachers: [],
	id: 3815
},
{
	name: "KOR 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3816
},
{
	name: "KOR 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3817
},
{
	name: "KOR 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3818
},
{
	name: "KOR 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3819
},
{
	name: "KOR 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3820
},
{
	name: "KOR 4XXX",
	description: "KOREAN ELECTIVE",
	teachers: [],
	id: 3821
},
{
	name: "LATN 2XXX",
	description: "LATIN ELECTIVE",
	teachers: [],
	id: 3822
},
{
	name: "LCC 1XXX",
	description: "LIT, COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 3823
},
{
	name: "LCC 2100",
	description: "INTRO-SCI,TECH & CULTURE",
	teachers: [],
	id: 3824
},
{
	name: "LCC 2200",
	description: "INTRO TO GENDER STUDIES",
	teachers: [],
	id: 3825
},
{
	name: "LCC 2300",
	description: "INTRO BIOMEDICINE & CULT",
	teachers: [],
	id: 3826
},
{
	name: "LCC 2400",
	description: "INTRO TO MEDIA STUDIES",
	teachers: [],
	id: 3827
},
{
	name: "LCC 2500",
	description: "INTRO TO FILM",
	teachers: [],
	id: 3828
},
{
	name: "LCC 2600",
	description: "INTRO TO PERFORM STUDIES",
	teachers: [],
	id: 3829
},
{
	name: "LCC 2661",
	description: "THEATRE PRODUCTION I",
	teachers: [],
	id: 3830
},
{
	name: "LCC 2662",
	description: "THEATRE PRODUCTION II",
	teachers: [],
	id: 3831
},
{
	name: "LCC 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3832
},
{
	name: "LCC 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3833
},
{
	name: "LCC 2700",
	description: "INTR-COMPUTATIONAL MEDIA",
	teachers: [],
	id: 3834
},
{
	name: "LCC 2710",
	description: "VISUAL CULTURE & DESIGN",
	teachers: [],
	id: 3835
},
{
	name: "LCC 2720",
	description: "PRIN OF VISUAL DESIGN",
	teachers: [],
	id: 3836
},
{
	name: "LCC 2730",
	description: "CONSTRUCT-MOVING IMAGE",
	teachers: [],
	id: 3837
},
{
	name: "LCC 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3838
},
{
	name: "LCC 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3839
},
{
	name: "LCC 2813",
	description: "SPECIAL TOPICS IN STAC",
	teachers: [],
	id: 3840
},
{
	name: "LCC 2823",
	description: "SPECIAL TOPICS-LIT/CULT",
	teachers: [],
	id: 3841
},
{
	name: "LCC 2XXX",
	description: "LIT COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 3842
},
{
	name: "LCC 3102",
	description: "THE CLASSICAL TRADITION",
	teachers: [],
	id: 3843
},
{
	name: "LCC 3104",
	description: "AGE-SCIENTIFIC DISCOVERY",
	teachers: [],
	id: 3844
},
{
	name: "LCC 3106",
	description: "AGE OF SCI REVOLUTION",
	teachers: [],
	id: 3845
},
{
	name: "LCC 3108",
	description: "SCI, TECH & ENLIGHTENMENT",
	teachers: [],
	id: 3846
},
{
	name: "LCC 3110",
	description: "SCI, TECH & ROMANTICISM",
	teachers: [],
	id: 3847
},
{
	name: "LCC 3112",
	description: "EVOLUTION&INDUSTRIAL AGE",
	teachers: [],
	id: 3848
},
{
	name: "LCC 3114",
	description: "SCI, TECH & MODERNISM",
	teachers: [],
	id: 3849
},
{
	name: "LCC 3116",
	description: "SCI, TECH& POSTMODERNISM",
	teachers: [],
	id: 3850
},
{
	name: "LCC 3118",
	description: "SCI, TECH&AMERICAN EMPIRE",
	teachers: [],
	id: 3851
},
{
	name: "LCC 3202",
	description: "STUDIES IN FICTION",
	teachers: [],
	id: 3852
},
{
	name: "LCC 3204",
	description: "POETRY AND POETICS",
	teachers: [],
	id: 3853
},
{
	name: "LCC 3206",
	description: "COMMUNICATION & CULTURE",
	teachers: [],
	id: 3854
},
{
	name: "LCC 3208",
	description: "AFRICAN-AMER LIT/CULT",
	teachers: [],
	id: 3855
},
{
	name: "LCC 3210",
	description: "ETHNICITY-AMER CULTURE",
	teachers: [],
	id: 3856
},
{
	name: "LCC 3212",
	description: "WOMEN, LIT & CULTURE",
	teachers: [],
	id: 3857
},
{
	name: "LCC 3214",
	description: "SCIENCE FICTION",
	teachers: [],
	id: 3858
},
{
	name: "LCC 3216",
	description: "THEATRE I",
	teachers: [],
	id: 3859
},
{
	name: "LCC 3218",
	description: "THEATRE II",
	teachers: [],
	id: 3860
},
{
	name: "LCC 3219",
	description: "LITERATURE AND MEDICINE",
	teachers: [],
	id: 3861
},
{
	name: "LCC 3220",
	description: "THEATRE III",
	teachers: [],
	id: 3862
},
{
	name: "LCC 3222",
	description: "REGIONALISM-AMER LIT",
	teachers: [],
	id: 3863
},
{
	name: "LCC 3225",
	description: "GENDER STUDY-DISCIPLINES",
	teachers: [],
	id: 3864
},
{
	name: "LCC 3226",
	description: "MAJOR AUTHORS",
	teachers: [],
	id: 3865
},
{
	name: "LCC 3228",
	description: "SHAKESPEARE",
	teachers: [],
	id: 3866
},
{
	name: "LCC 3234",
	description: "CREATIVE WRITING",
	teachers: [],
	id: 3867
},
{
	name: "LCC 3252",
	description: "FILM AND TELEVISION",
	teachers: [],
	id: 3868
},
{
	name: "LCC 3254",
	description: "FILM HISTORY",
	teachers: [],
	id: 3869
},
{
	name: "LCC 3256",
	description: "MAJOR FILMMAKERS",
	teachers: [],
	id: 3870
},
{
	name: "LCC 3257",
	description: "GLOBAL CINEMA",
	teachers: [],
	id: 3871
},
{
	name: "LCC 3258",
	description: "DOCUMENTARY FILM",
	teachers: [],
	id: 3872
},
{
	name: "LCC 3259",
	description: "EXPERIMENTAL FILM",
	teachers: [],
	id: 3873
},
{
	name: "LCC 3262",
	description: "PERFORMANCE STUDIES",
	teachers: [],
	id: 3874
},
{
	name: "LCC 3302",
	description: "SCIENCE, TECH & IDEOLOGY",
	teachers: [],
	id: 3875
},
{
	name: "LCC 3304",
	description: "SCIENCE, TECH, & GENDER",
	teachers: [],
	id: 3876
},
{
	name: "LCC 3306",
	description: "SCIENCE,TECHNOLOGY& RACE",
	teachers: [],
	id: 3877
},
{
	name: "LCC 3308",
	description: "ENVIRONMENT ECOCRITIC",
	teachers: [],
	id: 3878
},
{
	name: "LCC 3310",
	description: "RHETORIC-SCI INQUIRY",
	teachers: [],
	id: 3879
},
{
	name: "LCC 3314",
	description: "TECH OF REPRESENTATION",
	teachers: [],
	id: 3880
},
{
	name: "LCC 3316",
	description: "POSTCOLONIALISM",
	teachers: [],
	id: 3881
},
{
	name: "LCC 3318",
	description: "BIOMEDICINE & CULTURE",
	teachers: [],
	id: 3882
},
{
	name: "LCC 3352",
	description: "FILM TECHNOLOGY",
	teachers: [],
	id: 3883
},
{
	name: "LCC 3362",
	description: "SCI, TECH & PERFORMANCE",
	teachers: [],
	id: 3884
},
{
	name: "LCC 3400",
	description: "TECH COMMUNICATION",
	teachers: [],
	id: 3885
},
{
	name: "LCC 3401",
	description: "TECHNICAL COMM PRACTICES",
	teachers: [],
	id: 3886
},
{
	name: "LCC 3402",
	description: "GRAPHIC/VISUAL DESIGN",
	teachers: [],
	id: 3887
},
{
	name: "LCC 3403",
	description: "TECH COMMUNICATION",
	teachers: [],
	id: 3888
},
{
	name: "LCC 3404",
	description: "DESIGN FOR THE INTERNET",
	teachers: [],
	id: 3889
},
{
	name: "LCC 3406",
	description: "VIDEO PRODUCTION",
	teachers: [],
	id: 3890
},
{
	name: "LCC 3408",
	description: "RHETORIC-TECH NARRATIVES",
	teachers: [],
	id: 3891
},
{
	name: "LCC 3410",
	description: "NON-LINEAR DOCUMENTS",
	teachers: [],
	id: 3892
},
{
	name: "LCC 3412",
	description: "COMMUNICATING SCI/TECH",
	teachers: [],
	id: 3893
},
{
	name: "LCC 3414",
	description: "INTELLECTUAL PROPERTY",
	teachers: [],
	id: 3894
},
{
	name: "LCC 3502",
	description: "MEDIEVAL LIT & CULTURE",
	teachers: [],
	id: 3895
},
{
	name: "LCC 3504",
	description: "RENAISSANCE LIT& CULTURE",
	teachers: [],
	id: 3896
},
{
	name: "LCC 3506",
	description: "ENLIGHTENMENT LIT & CULT",
	teachers: [],
	id: 3897
},
{
	name: "LCC 3508",
	description: "AMERICAN CULTURE I",
	teachers: [],
	id: 3898
},
{
	name: "LCC 3510",
	description: "AMERICAN CULTURE II",
	teachers: [],
	id: 3899
},
{
	name: "LCC 3512",
	description: "BRIT/CONT ROMANTICISM",
	teachers: [],
	id: 3900
},
{
	name: "LCC 3514",
	description: "VICTORIAN LIT & CULTURE",
	teachers: [],
	id: 3901
},
{
	name: "LCC 3516",
	description: "LIT & CULTURAL MODERNISM",
	teachers: [],
	id: 3902
},
{
	name: "LCC 3518",
	description: "LIT/CULT POSTMODERNISM",
	teachers: [],
	id: 3903
},
{
	name: "LCC 3661",
	description: "THEATRE PRODUCTION III",
	teachers: [],
	id: 3904
},
{
	name: "LCC 3662",
	description: "THEATRE PRODUCTION IV",
	teachers: [],
	id: 3905
},
{
	name: "LCC 3705",
	description: "PRIN-INFORMATION DESIGN",
	teachers: [],
	id: 3906
},
{
	name: "LCC 3710",
	description: "PRIN-INTERACTION DESIGN",
	teachers: [],
	id: 3907
},
{
	name: "LCC 3823",
	description: "SPECIAL TOPICS LIT/CULT",
	teachers: [],
	id: 3908
},
{
	name: "LCC 3833",
	description: "SPECIAL TOPICS IN STAC",
	teachers: [],
	id: 3909
},
{
	name: "LCC 3843",
	description: "SPEC TOPIC-COMMUNICATION",
	teachers: [],
	id: 3910
},
{
	name: "LCC 3853",
	description: "SPECIAL TOPICS IN FILM",
	teachers: [],
	id: 3911
},
{
	name: "LCC 3863",
	description: "SPEC TOPICS-PERFORMANCE",
	teachers: [],
	id: 3912
},
{
	name: "LCC 3XXX",
	description: "LIT COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 3913
},
{
	name: "LCC 4100",
	description: "SEMINAR IN STAC",
	teachers: [],
	id: 3914
},
{
	name: "LCC 4102",
	description: "SENIOR THESIS",
	teachers: [],
	id: 3915
},
{
	name: "LCC 4200",
	description: "SEMINAR IN LIT/CULT",
	teachers: [],
	id: 3916
},
{
	name: "LCC 4204",
	description: "POETRY AND POETICS II",
	teachers: [],
	id: 3917
},
{
	name: "LCC 4300",
	description: "SEM-BIOMEDICINE&CULTURE",
	teachers: [],
	id: 3918
},
{
	name: "LCC 4400",
	description: "SEMINAR IN MEDIA STUDIES",
	teachers: [],
	id: 3919
},
{
	name: "LCC 4402",
	description: "BASIC MULTIMEDIA DESIGN",
	teachers: [],
	id: 3920
},
{
	name: "LCC 4404",
	description: "ADV DESIGN & PRODUCTION",
	teachers: [],
	id: 3921
},
{
	name: "LCC 4406",
	description: "PROFESSION COMMUNICATION",
	teachers: [],
	id: 3922
},
{
	name: "LCC 4500",
	description: "SEMINAR IN FILM STUDIES",
	teachers: [],
	id: 3923
},
{
	name: "LCC 4600",
	description: "SEMINAR IN PERFORMANCE",
	teachers: [],
	id: 3924
},
{
	name: "LCC 4602",
	description: "PERFORMANCE PRACTICUM",
	teachers: [],
	id: 3925
},
{
	name: "LCC 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3926
},
{
	name: "LCC 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 3927
},
{
	name: "LCC 4701",
	description: "UG RSCH PROPOSAL WRITING",
	teachers: [],
	id: 3928
},
{
	name: "LCC 4702",
	description: "UG RSCH THESIS WRITING",
	teachers: [],
	id: 3929
},
{
	name: "LCC 4720",
	description: "INTERACTIVE NARRATIVE",
	teachers: [],
	id: 3930
},
{
	name: "LCC 4725",
	description: "GAMES DSGN-CULTURAL PRAC",
	teachers: [],
	id: 3931
},
{
	name: "LCC 4730",
	description: "EXPERIMENTAL DIGITAL ART",
	teachers: [],
	id: 3932
},
{
	name: "LCC 4731",
	description: "GAME AI",
	teachers: [],
	id: 3933
},
{
	name: "LCC 4732",
	description: "INTELLIGENT STORY SYS",
	teachers: [],
	id: 3934
},
{
	name: "LCC 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3935
},
{
	name: "LCC 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3936
},
{
	name: "LCC 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3937
},
{
	name: "LCC 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3938
},
{
	name: "LCC 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3939
},
{
	name: "LCC 4824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3940
},
{
	name: "LCC 4904",
	description: "INTERNSHIP",
	teachers: [],
	id: 3941
},
{
	name: "LCC 4906",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3942
},
{
	name: "LCC 4XXX",
	description: "LIT COM&CULTURE ELECTIVE",
	teachers: [],
	id: 3943
},
{
	name: "LCC 6213",
	description: "EDUC APPLS-NEW MEDIA",
	teachers: [],
	id: 3944
},
{
	name: "LCC 6215",
	description: "MEDIA STUDIES",
	teachers: [],
	id: 3945
},
{
	name: "LCC 6310",
	description: "COMPUT-EXPRESSIVE MEDIUM",
	teachers: [],
	id: 3946
},
{
	name: "LCC 6311",
	description: "VISUAL CULTURE & DESIGN",
	teachers: [],
	id: 3947
},
{
	name: "LCC 6312",
	description: "DSGN,TECH&REPRESENTATION",
	teachers: [],
	id: 3948
},
{
	name: "LCC 6313",
	description: "PRIN-INTERACTIVE DESIGN",
	teachers: [],
	id: 3949
},
{
	name: "LCC 6314",
	description: "DESIGN NETWORKED MEDIA",
	teachers: [],
	id: 3950
},
{
	name: "LCC 6315",
	description: "PROJECT PRODUCTION",
	teachers: [],
	id: 3951
},
{
	name: "LCC 6316",
	description: "HISTORY DIGITAL MEDIA",
	teachers: [],
	id: 3952
},
{
	name: "LCC 6317",
	description: "INTERACTIVE FICTION",
	teachers: [],
	id: 3953
},
{
	name: "LCC 6318",
	description: "EXPERIMENTAL MEDIA",
	teachers: [],
	id: 3954
},
{
	name: "LCC 6319",
	description: "INTELLECT PROP PLCY&LAW",
	teachers: [],
	id: 3955
},
{
	name: "LCC 6320",
	description: "GLOBALIZATION& NEW MEDIA",
	teachers: [],
	id: 3956
},
{
	name: "LCC 6321",
	description: "ARCH-RESPONSIVE SPACES",
	teachers: [],
	id: 3957
},
{
	name: "LCC 6325",
	description: "GAME DESIGN AND ANALYSIS",
	teachers: [],
	id: 3958
},
{
	name: "LCC 6330",
	description: "EXPRESSIVE VIRTUAL SPACE",
	teachers: [],
	id: 3959
},
{
	name: "LCC 6340",
	description: "MIXED REALITY EXP DESIGN",
	teachers: [],
	id: 3960
},
{
	name: "LCC 6350",
	description: "SPATIAL CONST OF MEANING",
	teachers: [],
	id: 3961
},
{
	name: "LCC 6399",
	description: "DISCOVERY & INVENTION",
	teachers: [],
	id: 3962
},
{
	name: "LCC 6650",
	description: "PROJECT STUDIO",
	teachers: [],
	id: 3963
},
{
	name: "LCC 6743",
	description: "STS CORE SEMINAR",
	teachers: [],
	id: 3964
},
{
	name: "LCC 6748",
	description: "SOCIAL JUSTICE & DESIGN",
	teachers: [],
	id: 3965
},
{
	name: "LCC 6749",
	description: "FEMINIST THEORY STS",
	teachers: [],
	id: 3966
},
{
	name: "LCC 6753",
	description: "HCI PROF PREP & PRACTICE",
	teachers: [],
	id: 3967
},
{
	name: "LCC 6770",
	description: "MIXED REALITY DESIGN",
	teachers: [],
	id: 3968
},
{
	name: "LCC 6800",
	description: "MASTER'S PROJECT",
	teachers: [],
	id: 3969
},
{
	name: "LCC 6998",
	description: "HCI MASTER'S PROJECT",
	teachers: [],
	id: 3970
},
{
	name: "LCC 6XXX",
	description: "LIT,COM&CULTURE ELECTIVE",
	teachers: [],
	id: 3971
},
{
	name: "LCC 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 3972
},
{
	name: "LCC 7999",
	description: "PHD QUALIFYING PREP",
	teachers: [],
	id: 3973
},
{
	name: "LCC 8000",
	description: "PROSEMINAR-MEDIA THEORY",
	teachers: [],
	id: 3974
},
{
	name: "LCC 8001",
	description: "DIGITAL MEDIA STUDIES",
	teachers: [],
	id: 3975
},
{
	name: "LCC 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3976
},
{
	name: "LCC 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3977
},
{
	name: "LCC 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3978
},
{
	name: "LCC 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3979
},
{
	name: "LCC 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3980
},
{
	name: "LCC 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3981
},
{
	name: "LCC 8813",
	description: "ADV ISSUES-INTERACT NARR",
	teachers: [],
	id: 3982
},
{
	name: "LCC 8823",
	description: "SPEC TOP-GAME DSGN&ANALY",
	teachers: [],
	id: 3983
},
{
	name: "LCC 8831",
	description: "SP TOP-TECH OF REPRESENT",
	teachers: [],
	id: 3984
},
{
	name: "LCC 8832",
	description: "SP TOP-TECH OF REPRESENT",
	teachers: [],
	id: 3985
},
{
	name: "LCC 8833",
	description: "SP TOP-TECH OF REPRESENT",
	teachers: [],
	id: 3986
},
{
	name: "LCC 8903",
	description: "SPECIAL PROBLEMS IN HCI",
	teachers: [],
	id: 3987
},
{
	name: "LCC 8910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3988
},
{
	name: "LCC 8920",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3989
},
{
	name: "LCC 8930",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3990
},
{
	name: "LCC 8940",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3991
},
{
	name: "LCC 8950",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 3992
},
{
	name: "LCC 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 3993
},
{
	name: "LCC 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 3994
},
{
	name: "LCC 8999",
	description: "PHD DISSERTATION PREP",
	teachers: [],
	id: 3995
},
{
	name: "LCC 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 3996
},
{
	name: "LING 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 3997
},
{
	name: "LING 1XXX",
	description: "LINGUISTICS ELECTIVE",
	teachers: [],
	id: 3998
},
{
	name: "LING 2100",
	description: "INTRO TO LINGUISTICS",
	teachers: [],
	id: 3999
},
{
	name: "LING 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4000
},
{
	name: "LING 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4001
},
{
	name: "LING 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4002
},
{
	name: "LING 2XXX",
	description: "LINGUISTICS ELECTIVE",
	teachers: [],
	id: 4003
},
{
	name: "LING 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4004
},
{
	name: "LING 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4005
},
{
	name: "LING 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4006
},
{
	name: "LING 3XXX",
	description: "LINGUISTICS ELECTIVE",
	teachers: [],
	id: 4007
},
{
	name: "LING 4698",
	description: "RESEARCH ASSISTNATSHIP",
	teachers: [],
	id: 4008
},
{
	name: "LING 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4009
},
{
	name: "LING 4780",
	description: "JPN APPLIED LINGUISTICS",
	teachers: [],
	id: 4010
},
{
	name: "LING 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4011
},
{
	name: "LING 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4012
},
{
	name: "LING 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4013
},
{
	name: "LING 4901",
	description: "SPECIAL PROB-LINGUISTICS",
	teachers: [],
	id: 4014
},
{
	name: "LING 4902",
	description: "SPECIAL PROB-LINGUISTICS",
	teachers: [],
	id: 4015
},
{
	name: "LING 4XXX",
	description: "LINGUISTICS ELECTIVE",
	teachers: [],
	id: 4016
},
{
	name: "LMC 1XXX",
	description: "LIT,COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 4017
},
{
	name: "LMC 2000",
	description: "INTRO-LIT, MEDIA, & COMM",
	teachers: [],
	id: 4018
},
{
	name: "LMC 2050",
	description: "LIT, MEDIA, COMM SEMINAR",
	teachers: [],
	id: 4019
},
{
	name: "LMC 2100",
	description: "INTRO TO STAC",
	teachers: [],
	id: 4020
},
{
	name: "LMC 2200",
	description: "INTRO TO GENDER STUDIES",
	teachers: [],
	id: 4021
},
{
	name: "LMC 2300",
	description: "INTRO BIOMEDICINE & CULT",
	teachers: [],
	id: 4022
},
{
	name: "LMC 2400",
	description: "INTRO TO MEDIA STUDIES",
	teachers: [],
	id: 4023
},
{
	name: "LMC 2500",
	description: "INTRO TO FILM",
	teachers: [],
	id: 4024
},
{
	name: "LMC 2600",
	description: "INTRO TO PERFORM STUDIES",
	teachers: [],
	id: 4025
},
{
	name: "LMC 2661",
	description: "THEATRE PRODUCTION I",
	teachers: [],
	id: 4026
},
{
	name: "LMC 2662",
	description: "THEATRE PRODUCTION II",
	teachers: [],
	id: 4027
},
{
	name: "LMC 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4028
},
{
	name: "LMC 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4029
},
{
	name: "LMC 2700",
	description: "INTR-COMPUTATIONAL MEDIA",
	teachers: [],
	id: 4030
},
{
	name: "LMC 2720",
	description: "PRIN OF VISUAL DESIGN",
	teachers: [],
	id: 4031
},
{
	name: "LMC 2730",
	description: "CONSTRUCT-MOVING IMAGE",
	teachers: [],
	id: 4032
},
{
	name: "LMC 2813",
	description: "SPECIAL TOPICS IN STAC",
	teachers: [],
	id: 4033
},
{
	name: "LMC 2823",
	description: "SPECIAL TOPICS-LIT/CULT",
	teachers: [],
	id: 4034
},
{
	name: "LMC 2XXX",
	description: "LIT,COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 4035
},
{
	name: "LMC 3102",
	description: "THE CLASSICAL TRADITION",
	teachers: [],
	id: 4036
},
{
	name: "LMC 3104",
	description: "AGE SCIENTIFIC DISCOVERY",
	teachers: [],
	id: 4037
},
{
	name: "LMC 3106",
	description: "AGE SCI REVOLUTION",
	teachers: [],
	id: 4038
},
{
	name: "LMC 3108",
	description: "SCI TECH & ENLIGHTENMENT",
	teachers: [],
	id: 4039
},
{
	name: "LMC 3110",
	description: "SCI, TECH & ROMANTICISM",
	teachers: [],
	id: 4040
},
{
	name: "LMC 3112",
	description: "EVOLUTION&INDUSTRIAL AGE",
	teachers: [],
	id: 4041
},
{
	name: "LMC 3114",
	description: "SCI, TECH & MODERNISM",
	teachers: [],
	id: 4042
},
{
	name: "LMC 3116",
	description: "SCI TECH & POSTMODERNISMS",
	teachers: [],
	id: 4043
},
{
	name: "LMC 3118",
	description: "SCI TECH&AMERICAN EMPIRE",
	teachers: [],
	id: 4044
},
{
	name: "LMC 3202",
	description: "STUDIES IN FICTION",
	teachers: [],
	id: 4045
},
{
	name: "LMC 3204",
	description: "POETRY AND POETICS",
	teachers: [],
	id: 4046
},
{
	name: "LMC 3206",
	description: "COMMUNICATION & CULTURE",
	teachers: [],
	id: 4047
},
{
	name: "LMC 3208",
	description: "AFRICAN-AMER LIT/CULT",
	teachers: [],
	id: 4048
},
{
	name: "LMC 3210",
	description: "ETHNICITY AMERICAN CULT",
	teachers: [],
	id: 4049
},
{
	name: "LMC 3212",
	description: "WOMEN, LIT & CULTURE",
	teachers: [],
	id: 4050
},
{
	name: "LMC 3214",
	description: "SCIENCE FICTION",
	teachers: [],
	id: 4051
},
{
	name: "LMC 3215",
	description: "SCIENCE FICTION FILM TV",
	teachers: [],
	id: 4052
},
{
	name: "LMC 3216",
	description: "THEATRE I",
	teachers: [],
	id: 4053
},
{
	name: "LMC 3218",
	description: "THEATRE II",
	teachers: [],
	id: 4054
},
{
	name: "LMC 3219",
	description: "LITERATURE & MEDICINE",
	teachers: [],
	id: 4055
},
{
	name: "LMC 3220",
	description: "THEATRE III",
	teachers: [],
	id: 4056
},
{
	name: "LMC 3222",
	description: "REGIONALISM AMERICAN LIT",
	teachers: [],
	id: 4057
},
{
	name: "LMC 3225",
	description: "GENDER STUDY-DISCIPLINES",
	teachers: [],
	id: 4058
},
{
	name: "LMC 3226",
	description: "MAJOR AUTHORS",
	teachers: [],
	id: 4059
},
{
	name: "LMC 3228",
	description: "SHAKESPEARE",
	teachers: [],
	id: 4060
},
{
	name: "LMC 3234",
	description: "CREATIVE WRITING",
	teachers: [],
	id: 4061
},
{
	name: "LMC 3244",
	description: "MOD/CONTEMP BRIT POETRY",
	teachers: [],
	id: 4062
},
{
	name: "LMC 3248",
	description: "POETRY & DIGITAL CULTURE",
	teachers: [],
	id: 4063
},
{
	name: "LMC 3252",
	description: "FILM AND TELEVISION",
	teachers: [],
	id: 4064
},
{
	name: "LMC 3253",
	description: "ANIMATION",
	teachers: [],
	id: 4065
},
{
	name: "LMC 3254",
	description: "FILM HISTORY",
	teachers: [],
	id: 4066
},
{
	name: "LMC 3255",
	description: "CINEMA & DIGITAL CULTURE",
	teachers: [],
	id: 4067
},
{
	name: "LMC 3256",
	description: "MAJOR FILMMAKERS",
	teachers: [],
	id: 4068
},
{
	name: "LMC 3257",
	description: "GLOBAL CINEMA",
	teachers: [],
	id: 4069
},
{
	name: "LMC 3258",
	description: "DOCUMENTARY FILM",
	teachers: [],
	id: 4070
},
{
	name: "LMC 3259",
	description: "EXPERIMENTAL FILM",
	teachers: [],
	id: 4071
},
{
	name: "LMC 3262",
	description: "PERFORMANCE STUDIES",
	teachers: [],
	id: 4072
},
{
	name: "LMC 3302",
	description: "SCI, TECH & IDEOLOGY",
	teachers: [],
	id: 4073
},
{
	name: "LMC 3304",
	description: "SCIENCE, TECH & GENDER",
	teachers: [],
	id: 4074
},
{
	name: "LMC 3306",
	description: "SCIENCE, TECH & RACE",
	teachers: [],
	id: 4075
},
{
	name: "LMC 3308",
	description: "ENVIRONMENT ECOCRITIC",
	teachers: [],
	id: 4076
},
{
	name: "LMC 3310",
	description: "RHETORIC SCI INQUIRY",
	teachers: [],
	id: 4077
},
{
	name: "LMC 3314",
	description: "TECH OF REPRESENTATION",
	teachers: [],
	id: 4078
},
{
	name: "LMC 3316",
	description: "POSTCOLONIALISM",
	teachers: [],
	id: 4079
},
{
	name: "LMC 3318",
	description: "BIOMEDICINE & CULTURE",
	teachers: [],
	id: 4080
},
{
	name: "LMC 3352",
	description: "FILM TECHNOLOGY",
	teachers: [],
	id: 4081
},
{
	name: "LMC 3362",
	description: "SCI, TECH & PERFORMANCE",
	teachers: [],
	id: 4082
},
{
	name: "LMC 3402",
	description: "GRAPHIC & VISUAL DESIGN",
	teachers: [],
	id: 4083
},
{
	name: "LMC 3403",
	description: "TECH COMMUNICATION",
	teachers: [],
	id: 4084
},
{
	name: "LMC 3406",
	description: "VIDEO PRODUCTION",
	teachers: [],
	id: 4085
},
{
	name: "LMC 3408",
	description: "RHETORIC-TECH NARRATIVES",
	teachers: [],
	id: 4086
},
{
	name: "LMC 3410",
	description: "NON-LINEAR DOCUMENTS",
	teachers: [],
	id: 4087
},
{
	name: "LMC 3412",
	description: "COMMUNICATING SCI/TECH",
	teachers: [],
	id: 4088
},
{
	name: "LMC 3414",
	description: "INTELLECTUAL PROPERTY",
	teachers: [],
	id: 4089
},
{
	name: "LMC 3431",
	description: "TECH COMM APPROACHES",
	teachers: [],
	id: 4090
},
{
	name: "LMC 3432",
	description: "TECH COMM STRATEGIES",
	teachers: [],
	id: 4091
},
{
	name: "LMC 3502",
	description: "MEDIEVAL LIT & CULTURE",
	teachers: [],
	id: 4092
},
{
	name: "LMC 3504",
	description: "RENAISANCE LIT&CULTURE",
	teachers: [],
	id: 4093
},
{
	name: "LMC 3506",
	description: "ENLIGHTENMENT LIT & CULT",
	teachers: [],
	id: 4094
},
{
	name: "LMC 3508",
	description: "AMERICAN CULTURE I",
	teachers: [],
	id: 4095
},
{
	name: "LMC 3510",
	description: "AMERICAN CULTURE II",
	teachers: [],
	id: 4096
},
{
	name: "LMC 3512",
	description: "BRIT/CONT ROMANTICISM",
	teachers: [],
	id: 4097
},
{
	name: "LMC 3514",
	description: "VICTORIAN LIT & CULTURE",
	teachers: [],
	id: 4098
},
{
	name: "LMC 3516",
	description: "LIT & CULTURAL MODERNISM",
	teachers: [],
	id: 4099
},
{
	name: "LMC 3518",
	description: "LIT/CULT POSTMODERNISM",
	teachers: [],
	id: 4100
},
{
	name: "LMC 3661",
	description: "THEATRE PRODUCTION III",
	teachers: [],
	id: 4101
},
{
	name: "LMC 3662",
	description: "THEATRE PRODUCTION IV",
	teachers: [],
	id: 4102
},
{
	name: "LMC 3705",
	description: "PRIN INFORMATION DESIGN",
	teachers: [],
	id: 4103
},
{
	name: "LMC 3710",
	description: "PRIN INTERACTION DESIGN",
	teachers: [],
	id: 4104
},
{
	name: "LMC 3773",
	description: "GLOBAL ISSUES&LEADERSHIP",
	teachers: [],
	id: 4105
},
{
	name: "LMC 3823",
	description: "SPECIAL TOPICS LIT/CULT",
	teachers: [],
	id: 4106
},
{
	name: "LMC 3833",
	description: "SPECIAL TOPICS IN STAC",
	teachers: [],
	id: 4107
},
{
	name: "LMC 3843",
	description: "SPEC TOPIC-COMMUNICATION",
	teachers: [],
	id: 4108
},
{
	name: "LMC 3853",
	description: "SPECIAL TOPICS IN FILM",
	teachers: [],
	id: 4109
},
{
	name: "LMC 3863",
	description: "SPEC TOPICS-PERFORMANCE",
	teachers: [],
	id: 4110
},
{
	name: "LMC 3XXX",
	description: "LIT,COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 4111
},
{
	name: "LMC 4100",
	description: "SEMINAR IN STAC",
	teachers: [],
	id: 4112
},
{
	name: "LMC 4102",
	description: "SENIOR THESIS",
	teachers: [],
	id: 4113
},
{
	name: "LMC 4200",
	description: "SEMINAR LIT/CULT THEORY",
	teachers: [],
	id: 4114
},
{
	name: "LMC 4204",
	description: "POETRY AND POETICS II",
	teachers: [],
	id: 4115
},
{
	name: "LMC 4300",
	description: "SEMINAR BIOMED & CULTURE",
	teachers: [],
	id: 4116
},
{
	name: "LMC 4400",
	description: "SEMINAR IN MEDIA STUDIES",
	teachers: [],
	id: 4117
},
{
	name: "LMC 4406",
	description: "PROFESSIONAL COMM",
	teachers: [],
	id: 4118
},
{
	name: "LMC 4500",
	description: "SEMINAR IN FILM STUDIES",
	teachers: [],
	id: 4119
},
{
	name: "LMC 4600",
	description: "SEMINAR PERFORM STUDIES",
	teachers: [],
	id: 4120
},
{
	name: "LMC 4602",
	description: "PERFORMANCE PRACTICUM",
	teachers: [],
	id: 4121
},
{
	name: "LMC 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4122
},
{
	name: "LMC 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4123
},
{
	name: "LMC 4701",
	description: "US RSCH PROPOSAL WRITING",
	teachers: [],
	id: 4124
},
{
	name: "LMC 4702",
	description: "US RSCH THESIS WRITING",
	teachers: [],
	id: 4125
},
{
	name: "LMC 4720",
	description: "INTERACTIVE NARRATIVE",
	teachers: [],
	id: 4126
},
{
	name: "LMC 4725",
	description: "GAME DESIGN",
	teachers: [],
	id: 4127
},
{
	name: "LMC 4730",
	description: "EXPERIMENTAL DIGITAL ART",
	teachers: [],
	id: 4128
},
{
	name: "LMC 4731",
	description: "GAME AI",
	teachers: [],
	id: 4129
},
{
	name: "LMC 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4130
},
{
	name: "LMC 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4131
},
{
	name: "LMC 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4132
},
{
	name: "LMC 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4133
},
{
	name: "LMC 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4134
},
{
	name: "LMC 4904",
	description: "INTERNSHIP",
	teachers: [],
	id: 4135
},
{
	name: "LMC 4XXX",
	description: "LIT,COMM&CULTURE ELECTIVE",
	teachers: [],
	id: 4136
},
{
	name: "LMC 6213",
	description: "EDU APPLICATIONS NEW",
	teachers: [],
	id: 4137
},
{
	name: "LMC 6215",
	description: "ISSUES IN MEDIA STUDIES",
	teachers: [],
	id: 4138
},
{
	name: "LMC 6310",
	description: "THE COMPUTER EXPRESSIVE",
	teachers: [],
	id: 4139
},
{
	name: "LMC 6311",
	description: "VISUAL CULTURE AND DESI",
	teachers: [],
	id: 4140
},
{
	name: "LMC 6312",
	description: "DSGN TECH & REPRESENTATI",
	teachers: [],
	id: 4141
},
{
	name: "LMC 6313",
	description: "PRIN OF INTERACTION DESI",
	teachers: [],
	id: 4142
},
{
	name: "LMC 6314",
	description: "DESIGN OF NETWORKED MEDI",
	teachers: [],
	id: 4143
},
{
	name: "LMC 6315",
	description: "PRODUC PRODUCTION",
	teachers: [],
	id: 4144
},
{
	name: "LMC 6316",
	description: "HISTORICAL APPROAHCES DI",
	teachers: [],
	id: 4145
},
{
	name: "LMC 6317",
	description: "INTERACTIVE FICTION",
	teachers: [],
	id: 4146
},
{
	name: "LMC 6318",
	description: "EXPERIMENTAL MEDIA",
	teachers: [],
	id: 4147
},
{
	name: "LMC 6319",
	description: "INTELLECTUAL PROPERTY",
	teachers: [],
	id: 4148
},
{
	name: "LMC 6320",
	description: "GLOBALIZATION AND NEW ME",
	teachers: [],
	id: 4149
},
{
	name: "LMC 6321",
	description: "ARCHITECTURE OF RESPONSI",
	teachers: [],
	id: 4150
},
{
	name: "LMC 6325",
	description: "GAME DESIGN AND ANALYSIS",
	teachers: [],
	id: 4151
},
{
	name: "LMC 6330",
	description: "EXPRESSIVE VIRTUAL SPACE",
	teachers: [],
	id: 4152
},
{
	name: "LMC 6340",
	description: "REALITY EXPERIENCE DESI",
	teachers: [],
	id: 4153
},
{
	name: "LMC 6350",
	description: "SPATIAL CONSTRUCTION",
	teachers: [],
	id: 4154
},
{
	name: "LMC 6399",
	description: "DISCOVERY & INVENTION",
	teachers: [],
	id: 4155
},
{
	name: "LMC 6650",
	description: "PROJECT STUDIO",
	teachers: [],
	id: 4156
},
{
	name: "LMC 6743",
	description: "STS CORE SEMINAR",
	teachers: [],
	id: 4157
},
{
	name: "LMC 6748",
	description: "SOCIAL JUSTICE & DESIGN",
	teachers: [],
	id: 4158
},
{
	name: "LMC 6749",
	description: "FEMINIST THEORY AND STS",
	teachers: [],
	id: 4159
},
{
	name: "LMC 6753",
	description: "HCI PROF PREP & PRACTICE",
	teachers: [],
	id: 4160
},
{
	name: "LMC 6770",
	description: "MIX REALITY DESIGN",
	teachers: [],
	id: 4161
},
{
	name: "LMC 6800",
	description: "DM MS PROJECT COURSE",
	teachers: [],
	id: 4162
},
{
	name: "LMC 6998",
	description: "HCI MASTER'S PROJECT",
	teachers: [],
	id: 4163
},
{
	name: "LMC 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 4164
},
{
	name: "LMC 7999",
	description: "PHD QUALIFYING PREP",
	teachers: [],
	id: 4165
},
{
	name: "LMC 8000",
	description: "MEDIA THEORY",
	teachers: [],
	id: 4166
},
{
	name: "LMC 8001",
	description: "DIGITAL MEDIA STUDIES",
	teachers: [],
	id: 4167
},
{
	name: "LMC 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4168
},
{
	name: "LMC 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4169
},
{
	name: "LMC 8813",
	description: "ADV ISSUES INTERACTIVE",
	teachers: [],
	id: 4170
},
{
	name: "LMC 8823",
	description: "SPECIAL TOPICS IN GAME",
	teachers: [],
	id: 4171
},
{
	name: "LMC 8831",
	description: "SPECIAL TOPICS TECH REP",
	teachers: [],
	id: 4172
},
{
	name: "LMC 8903",
	description: "SPECIAL PROBLEMS IN HCI",
	teachers: [],
	id: 4173
},
{
	name: "LMC 8910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4174
},
{
	name: "LMC 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 4175
},
{
	name: "LMC 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4176
},
{
	name: "LMC 8999",
	description: "PHD DOCTORAL PREP",
	teachers: [],
	id: 4177
},
{
	name: "LMC 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 4178
},
{
	name: "LS 0198",
	description: "READING SKILLS",
	teachers: [],
	id: 4179
},
{
	name: "LS 0298",
	description: "ENGLISH SKILLS",
	teachers: [],
	id: 4180
},
{
	name: "LS 0398",
	description: "MATHEMATICAL SKILLS",
	teachers: [],
	id: 4181
},
{
	name: "MATH 0399",
	description: "SUPPORT FOR PRECALCULUS",
	teachers: [],
	id: 4182
},
{
	name: "MATH 1111",
	description: "PRECALCULUS WITHOUT TRIG",
	teachers: [],
	id: 4183
},
{
	name: "MATH 1113",
	description: "PRECALCULUS",
	teachers: [],
	id: 4184
},
{
	name: "MATH 11X3",
	description: "TRANSFER PRECALCULUS",
	teachers: [],
	id: 4185
},
{
	name: "MATH 1501",
	description: "CALCULUS I",
	teachers: [],
	id: 4186
},
{
	name: "MATH 1502",
	description: "CALCULUS II",
	teachers: [],
	id: 4187
},
{
	name: "MATH 1503",
	description: "CALCULUS I FOR LIFE SCI",
	teachers: [],
	id: 4188
},
{
	name: "MATH 1504",
	description: "CALCULUS II FOR LIFE SCI",
	teachers: [],
	id: 4189
},
{
	name: "MATH 1511",
	description: "HONORS CALCULUS I",
	teachers: [],
	id: 4190
},
{
	name: "MATH 1512",
	description: "HONORS CALCULUS II",
	teachers: [],
	id: 4191
},
{
	name: "MATH 1522",
	description: "LINEAR ALGEBRA FOR CALC",
	teachers: [],
	id: 4192
},
{
	name: "MATH 1550",
	description: "INTRO TO DIFF CALCULUS",
	teachers: [],
	id: 4193
},
{
	name: "MATH 1551",
	description: "DIFFERENTIAL CALCULUS",
	teachers: [],
	id: 4194
},
{
	name: "MATH 1552",
	description: "INTEGRAL CALCULUS",
	teachers: [],
	id: 4195
},
{
	name: "MATH 1553",
	description: "INTRO TO LINEAR ALGEBRA",
	teachers: [],
	id: 4196
},
{
	name: "MATH 1554",
	description: "LINEAR ALGEBRA",
	teachers: [],
	id: 4197
},
{
	name: "MATH 1555",
	description: "CALCULUS LIFE SCIENCES",
	teachers: [],
	id: 4198
},
{
	name: "MATH 1564",
	description: "LINALG W ABSTRACT VEC SP",
	teachers: [],
	id: 4199
},
{
	name: "MATH 15X1",
	description: "TRANSFER CALCULUS I",
	teachers: [],
	id: 4200
},
{
	name: "MATH 15X2",
	description: "TRANSFER CALCULUS II",
	teachers: [],
	id: 4201
},
{
	name: "MATH 1601",
	description: "INTRO TO HIGHER MATH",
	teachers: [],
	id: 4202
},
{
	name: "MATH 1711",
	description: "FINITE MATHEMATICS",
	teachers: [],
	id: 4203
},
{
	name: "MATH 1712",
	description: "SURVEY OF CALCULUS",
	teachers: [],
	id: 4204
},
{
	name: "MATH 17X1",
	description: "TRANSFER FINITE MATH",
	teachers: [],
	id: 4205
},
{
	name: "MATH 17X2",
	description: "TRANSFER SURVEY-CALC",
	teachers: [],
	id: 4206
},
{
	name: "MATH 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4207
},
{
	name: "MATH 1X52",
	description: "TRANSFER INTEGRAL CALCULUS",
	teachers: [],
	id: 4208
},
{
	name: "MATH 1XXX",
	description: "MATHEMATICS ELECTIVE",
	teachers: [],
	id: 4209
},
{
	name: "MATH 2106",
	description: "FOUNDATIONS MATH PROOF",
	teachers: [],
	id: 4210
},
{
	name: "MATH 2401",
	description: "CALCULUS III",
	teachers: [],
	id: 4211
},
{
	name: "MATH 2403",
	description: "DIFFERENTIAL EQUATIONS",
	teachers: [],
	id: 4212
},
{
	name: "MATH 2406",
	description: "ABSTRACT VECTOR SPACES",
	teachers: [],
	id: 4213
},
{
	name: "MATH 2411",
	description: "HONORS CALCULUS III",
	teachers: [],
	id: 4214
},
{
	name: "MATH 2413",
	description: "HONORS DIFF EQUATIONS",
	teachers: [],
	id: 4215
},
{
	name: "MATH 24X1",
	description: "TRANSFER CALCULUS III",
	teachers: [],
	id: 4216
},
{
	name: "MATH 24X3",
	description: "TRANSFER DIFF EQUATIONS",
	teachers: [],
	id: 4217
},
{
	name: "MATH 2551",
	description: "MULTIVARIABLE CALCULUS",
	teachers: [],
	id: 4218
},
{
	name: "MATH 2552",
	description: "DIFFERENTIAL EQUATIONS",
	teachers: [],
	id: 4219
},
{
	name: "MATH 2561",
	description: "HONORS MULTIVAR CALCULUS",
	teachers: [],
	id: 4220
},
{
	name: "MATH 2562",
	description: "HONORS DIFF EQUATIONS",
	teachers: [],
	id: 4221
},
{
	name: "MATH 2602",
	description: "LINEAR AND DISCRETE MATH",
	teachers: [],
	id: 4222
},
{
	name: "MATH 2603",
	description: "INTRO DISCRETE MATH",
	teachers: [],
	id: 4223
},
{
	name: "MATH 2605",
	description: "CALC III FOR COMPUT SCI",
	teachers: [],
	id: 4224
},
{
	name: "MATH 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4225
},
{
	name: "MATH 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4226
},
{
	name: "MATH 26X2",
	description: "TRANSFER LINEAR & DISC MATH",
	teachers: [],
	id: 4227
},
{
	name: "MATH 26X3",
	description: "TRANSFER DISCRETE MATH",
	teachers: [],
	id: 4228
},
{
	name: "MATH 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4229
},
{
	name: "MATH 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4230
},
{
	name: "MATH 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4231
},
{
	name: "MATH 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4232
},
{
	name: "MATH 2805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4233
},
{
	name: "MATH 2X51",
	description: "TRANSFER MULTIVARIABLE CALC",
	teachers: [],
	id: 4234
},
{
	name: "MATH 2X52",
	description: "TRANSFER DIFFERENTIAL EQUATION",
	teachers: [],
	id: 4235
},
{
	name: "MATH 2XXX",
	description: "MATHEMATICS ELECTIVE",
	teachers: [],
	id: 4236
},
{
	name: "MATH 3012",
	description: "APPLIED COMBINATORICS",
	teachers: [],
	id: 4237
},
{
	name: "MATH 3022",
	description: "HONORS APP COMBINATORICS",
	teachers: [],
	id: 4238
},
{
	name: "MATH 3215",
	description: "PROBABILITY & STATISTICS",
	teachers: [],
	id: 4239
},
{
	name: "MATH 3225",
	description: "HONORS PROB & STATISTICS",
	teachers: [],
	id: 4240
},
{
	name: "MATH 3670",
	description: "STATISTICS AND APPLNS",
	teachers: [],
	id: 4241
},
{
	name: "MATH 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4242
},
{
	name: "MATH 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4243
},
{
	name: "MATH 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4244
},
{
	name: "MATH 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4245
},
{
	name: "MATH 3805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4246
},
{
	name: "MATH 3XXX",
	description: "MATHEMATICS ELECTIVE",
	teachers: [],
	id: 4247
},
{
	name: "MATH 4012",
	description: "CODING THEORY",
	teachers: [],
	id: 4248
},
{
	name: "MATH 4022",
	description: "INTRO TO GRAPH THEORY",
	teachers: [],
	id: 4249
},
{
	name: "MATH 4032",
	description: "COMBINATORIAL ANALYSIS",
	teachers: [],
	id: 4250
},
{
	name: "MATH 4080",
	description: "SENIOR PROJECT I",
	teachers: [],
	id: 4251
},
{
	name: "MATH 4090",
	description: "SENIOR PROJECT II",
	teachers: [],
	id: 4252
},
{
	name: "MATH 4107",
	description: "ABSTRACT ALGEBRA I",
	teachers: [],
	id: 4253
},
{
	name: "MATH 4108",
	description: "ABSTRACT ALGEBRA II",
	teachers: [],
	id: 4254
},
{
	name: "MATH 4150",
	description: "INTRO TO NUMBER THEORY",
	teachers: [],
	id: 4255
},
{
	name: "MATH 4221",
	description: "STOCHASTIC PROCESSES I",
	teachers: [],
	id: 4256
},
{
	name: "MATH 4222",
	description: "STOCHASTIC PROCESSES II",
	teachers: [],
	id: 4257
},
{
	name: "MATH 4255",
	description: "MONTE CARLO METHODS",
	teachers: [],
	id: 4258
},
{
	name: "MATH 4261",
	description: "MATH STATISTICS I",
	teachers: [],
	id: 4259
},
{
	name: "MATH 4262",
	description: "MATH STATISTICS II",
	teachers: [],
	id: 4260
},
{
	name: "MATH 4280",
	description: "INFORMATION THEORY",
	teachers: [],
	id: 4261
},
{
	name: "MATH 4305",
	description: "LINEAR ALGEBRA",
	teachers: [],
	id: 4262
},
{
	name: "MATH 4317",
	description: "ANALYSIS I",
	teachers: [],
	id: 4263
},
{
	name: "MATH 4318",
	description: "ANALYSIS II",
	teachers: [],
	id: 4264
},
{
	name: "MATH 4320",
	description: "COMPLEX ANALYSIS",
	teachers: [],
	id: 4265
},
{
	name: "MATH 4347",
	description: "PARTIAL DIFF EQNS I",
	teachers: [],
	id: 4266
},
{
	name: "MATH 4348",
	description: "PARTIAL DIFF EQNS II",
	teachers: [],
	id: 4267
},
{
	name: "MATH 4431",
	description: "INTRODUCTION TO TOPOLOGY",
	teachers: [],
	id: 4268
},
{
	name: "MATH 4432",
	description: "ALGEBRAIC TOPOLOGY",
	teachers: [],
	id: 4269
},
{
	name: "MATH 4441",
	description: "DIFFERENTIAL GEOMETRY",
	teachers: [],
	id: 4270
},
{
	name: "MATH 4541",
	description: "DYNAMICS& BIFURCATIONS I",
	teachers: [],
	id: 4271
},
{
	name: "MATH 4542",
	description: "DYNAMICS&BIFURCATIONS II",
	teachers: [],
	id: 4272
},
{
	name: "MATH 4580",
	description: "LINEAR PROGRAMMING",
	teachers: [],
	id: 4273
},
{
	name: "MATH 4581",
	description: "MATH METHODS IN ENGR",
	teachers: [],
	id: 4274
},
{
	name: "MATH 4640",
	description: "NUMERICAL ANALYSIS I",
	teachers: [],
	id: 4275
},
{
	name: "MATH 4641",
	description: "NUMERICAL ANALYSIS II",
	teachers: [],
	id: 4276
},
{
	name: "MATH 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4277
},
{
	name: "MATH 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4278
},
{
	name: "MATH 4755",
	description: "MATHEMATICAL BIOLOGY",
	teachers: [],
	id: 4279
},
{
	name: "MATH 4777",
	description: "VECTOR&PARALLEL SCI COMP",
	teachers: [],
	id: 4280
},
{
	name: "MATH 4782",
	description: "QUANTUM INFO&QUANT COMP",
	teachers: [],
	id: 4281
},
{
	name: "MATH 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4282
},
{
	name: "MATH 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4283
},
{
	name: "MATH 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4284
},
{
	name: "MATH 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4285
},
{
	name: "MATH 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4286
},
{
	name: "MATH 4999",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4287
},
{
	name: "MATH 4XXX",
	description: "MATHEMATICS ELECTIVE",
	teachers: [],
	id: 4288
},
{
	name: "MATH 6014",
	description: "GRAPH THEORY",
	teachers: [],
	id: 4289
},
{
	name: "MATH 6021",
	description: "TOPOLOGY-EUCLIDEAN SPACE",
	teachers: [],
	id: 4290
},
{
	name: "MATH 6112",
	description: "ADVANCED LINEAR ALGEBRA",
	teachers: [],
	id: 4291
},
{
	name: "MATH 6121",
	description: "ALGEBRA I",
	teachers: [],
	id: 4292
},
{
	name: "MATH 6122",
	description: "ALGEBRA II",
	teachers: [],
	id: 4293
},
{
	name: "MATH 6221",
	description: "CLASSICAL PROBABILITY",
	teachers: [],
	id: 4294
},
{
	name: "MATH 6235",
	description: "STOCH PROCESS-FINANCE II",
	teachers: [],
	id: 4295
},
{
	name: "MATH 6241",
	description: "PROBABILITY I",
	teachers: [],
	id: 4296
},
{
	name: "MATH 6242",
	description: "PROBABILITY II",
	teachers: [],
	id: 4297
},
{
	name: "MATH 6262",
	description: "STATISTICAL ESTIMATION",
	teachers: [],
	id: 4298
},
{
	name: "MATH 6263",
	description: "TESTING STAT HYPOTHESES",
	teachers: [],
	id: 4299
},
{
	name: "MATH 6266",
	description: "LINEAR STATISTICAL MODEL",
	teachers: [],
	id: 4300
},
{
	name: "MATH 6267",
	description: "MULTIVARIATE STAT ANALY",
	teachers: [],
	id: 4301
},
{
	name: "MATH 6300",
	description: "FRACTAL GEOMETRY",
	teachers: [],
	id: 4302
},
{
	name: "MATH 6307",
	description: "ORDINARY DIFF EQNS I",
	teachers: [],
	id: 4303
},
{
	name: "MATH 6308",
	description: "ORDINARY DIFF EQNS II",
	teachers: [],
	id: 4304
},
{
	name: "MATH 6321",
	description: "COMPLEX ANALYSIS",
	teachers: [],
	id: 4305
},
{
	name: "MATH 6337",
	description: "REAL ANALYSIS I",
	teachers: [],
	id: 4306
},
{
	name: "MATH 6338",
	description: "REAL ANALYSIS II",
	teachers: [],
	id: 4307
},
{
	name: "MATH 6341",
	description: "PARTIAL DIFF EQNS I",
	teachers: [],
	id: 4308
},
{
	name: "MATH 6342",
	description: "PARTIAL DIFF EQNS II",
	teachers: [],
	id: 4309
},
{
	name: "MATH 6421",
	description: "ALGEBRAIC GEOMETRY I",
	teachers: [],
	id: 4310
},
{
	name: "MATH 6422",
	description: "ALGEBRAIC GEOMETRY II",
	teachers: [],
	id: 4311
},
{
	name: "MATH 6441",
	description: "ALGEBRAIC TOPOLOGY I",
	teachers: [],
	id: 4312
},
{
	name: "MATH 6442",
	description: "ALGEBRAIC TOPOLOGY II",
	teachers: [],
	id: 4313
},
{
	name: "MATH 6451",
	description: "GENERAL TOPOLOGY",
	teachers: [],
	id: 4314
},
{
	name: "MATH 6452",
	description: "DIFFERENTIAL TOPOLOGY",
	teachers: [],
	id: 4315
},
{
	name: "MATH 6453",
	description: "GEOMETRIC TOPOLOGY",
	teachers: [],
	id: 4316
},
{
	name: "MATH 6455",
	description: "DIFFERENTIAL GEOMETRY I",
	teachers: [],
	id: 4317
},
{
	name: "MATH 6456",
	description: "DIFFERENTIAL GEOMETRY II",
	teachers: [],
	id: 4318
},
{
	name: "MATH 6457",
	description: "GEOMETRY AND TOPOLOGY I",
	teachers: [],
	id: 4319
},
{
	name: "MATH 6458",
	description: "GEOMETRY AND TOPOLOGY II",
	teachers: [],
	id: 4320
},
{
	name: "MATH 6514",
	description: "INDUSTRIAL MATH I",
	teachers: [],
	id: 4321
},
{
	name: "MATH 6515",
	description: "INDUSTRIAL MATH II",
	teachers: [],
	id: 4322
},
{
	name: "MATH 6580",
	description: "INTRO TO HILBERT SPACES",
	teachers: [],
	id: 4323
},
{
	name: "MATH 6583",
	description: "INTEGRAL EQNS&TRANSFORMS",
	teachers: [],
	id: 4324
},
{
	name: "MATH 6584",
	description: "SPECIAL FUNCTIONS",
	teachers: [],
	id: 4325
},
{
	name: "MATH 6635",
	description: "NUMERICAL METH-FINANCE",
	teachers: [],
	id: 4326
},
{
	name: "MATH 6640",
	description: "NUM METH-PART DIFF EQNS",
	teachers: [],
	id: 4327
},
{
	name: "MATH 6641",
	description: "ADV NUM METH-PT DIFF EQN",
	teachers: [],
	id: 4328
},
{
	name: "MATH 6643",
	description: "NUMERICAL LINEAR ALGEBRA",
	teachers: [],
	id: 4329
},
{
	name: "MATH 6644",
	description: "ITERATIVE METH-SYS EQNS",
	teachers: [],
	id: 4330
},
{
	name: "MATH 6645",
	description: "NUMERICAL APPROX THEORY",
	teachers: [],
	id: 4331
},
{
	name: "MATH 6646",
	description: "NUMER METH: ORD DIFF EQN",
	teachers: [],
	id: 4332
},
{
	name: "MATH 6647",
	description: "NUMERIC METH:DYNAMIC SYS",
	teachers: [],
	id: 4333
},
{
	name: "MATH 6701",
	description: "MATH METH-APPLI SCI I",
	teachers: [],
	id: 4334
},
{
	name: "MATH 6702",
	description: "MATH METH-APPL SCI II",
	teachers: [],
	id: 4335
},
{
	name: "MATH 6705",
	description: "MODELING AND DYNAMICS",
	teachers: [],
	id: 4336
},
{
	name: "MATH 6710",
	description: "NUMERICAL METHODS-CSE I",
	teachers: [],
	id: 4337
},
{
	name: "MATH 6711",
	description: "NUMERICAL METHODS-CSE II",
	teachers: [],
	id: 4338
},
{
	name: "MATH 6759",
	description: "STOCH PROCESS-FINANCE I",
	teachers: [],
	id: 4339
},
{
	name: "MATH 6761",
	description: "STOCHASTIC PROCESSES I",
	teachers: [],
	id: 4340
},
{
	name: "MATH 6762",
	description: "STOCHASTIC PROCESSES II",
	teachers: [],
	id: 4341
},
{
	name: "MATH 6767",
	description: "SYS-COMPUTATION FINANCE",
	teachers: [],
	id: 4342
},
{
	name: "MATH 6769",
	description: "FIXED INCOME SECURITIES",
	teachers: [],
	id: 4343
},
{
	name: "MATH 6781",
	description: "RELIABILITY THEORY",
	teachers: [],
	id: 4344
},
{
	name: "MATH 6783",
	description: "FINANCIAL DATA ANALYSIS",
	teachers: [],
	id: 4345
},
{
	name: "MATH 6785",
	description: "THE PRACTICE OF QCF",
	teachers: [],
	id: 4346
},
{
	name: "MATH 6793",
	description: "ADV TOPICS IN QCF",
	teachers: [],
	id: 4347
},
{
	name: "MATH 6XXX",
	description: "MATHEMATICS ELECTIVE",
	teachers: [],
	id: 4348
},
{
	name: "MATH 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 4349
},
{
	name: "MATH 7012",
	description: "ENUMERATIVE COMBINATORIC",
	teachers: [],
	id: 4350
},
{
	name: "MATH 7014",
	description: "ADVANCED GRAPH THEORY",
	teachers: [],
	id: 4351
},
{
	name: "MATH 7016",
	description: "COMBINATORICS",
	teachers: [],
	id: 4352
},
{
	name: "MATH 7018",
	description: "PROBAB COMBINATORICS",
	teachers: [],
	id: 4353
},
{
	name: "MATH 7244",
	description: "STOCHASTIC CALCULUS I",
	teachers: [],
	id: 4354
},
{
	name: "MATH 7245",
	description: "STOCHASTIC CALCULUS II",
	teachers: [],
	id: 4355
},
{
	name: "MATH 7334",
	description: "OPERATOR THEORY",
	teachers: [],
	id: 4356
},
{
	name: "MATH 7337",
	description: "HARMONIC ANALYSIS",
	teachers: [],
	id: 4357
},
{
	name: "MATH 7338",
	description: "FUNCTIONAL ANALYSIS",
	teachers: [],
	id: 4358
},
{
	name: "MATH 7510",
	description: "GRAPH ALGORITHMS",
	teachers: [],
	id: 4359
},
{
	name: "MATH 7581",
	description: "CALCULUS VARIATIONS",
	teachers: [],
	id: 4360
},
{
	name: "MATH 7586",
	description: "TENSOR ANALYSIS",
	teachers: [],
	id: 4361
},
{
	name: "MATH 7999",
	description: "PREP-PHD QUAL EXAM",
	teachers: [],
	id: 4362
},
{
	name: "MATH 8305",
	description: "AURAL-ORAL ENGL FOR MATH",
	teachers: [],
	id: 4363
},
{
	name: "MATH 8306",
	description: "INTERMED ACADEMIC COMMUN",
	teachers: [],
	id: 4364
},
{
	name: "MATH 8307",
	description: "ADVANCED ACADEMIC COMMUN",
	teachers: [],
	id: 4365
},
{
	name: "MATH 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4366
},
{
	name: "MATH 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4367
},
{
	name: "MATH 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4368
},
{
	name: "MATH 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4369
},
{
	name: "MATH 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4370
},
{
	name: "MATH 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4371
},
{
	name: "MATH 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4372
},
{
	name: "MATH 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4373
},
{
	name: "MATH 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4374
},
{
	name: "MATH 8815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4375
},
{
	name: "MATH 8821",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4376
},
{
	name: "MATH 8822",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4377
},
{
	name: "MATH 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4378
},
{
	name: "MATH 8824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4379
},
{
	name: "MATH 8825",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4380
},
{
	name: "MATH 8831",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4381
},
{
	name: "MATH 8832",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4382
},
{
	name: "MATH 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4383
},
{
	name: "MATH 8834",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4384
},
{
	name: "MATH 8835",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4385
},
{
	name: "MATH 8841",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4386
},
{
	name: "MATH 8842",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4387
},
{
	name: "MATH 8843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4388
},
{
	name: "MATH 8844",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4389
},
{
	name: "MATH 8845",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4390
},
{
	name: "MATH 8851",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4391
},
{
	name: "MATH 8852",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4392
},
{
	name: "MATH 8853",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4393
},
{
	name: "MATH 8854",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4394
},
{
	name: "MATH 8855",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4395
},
{
	name: "MATH 8863",
	description: "TOPICS IN GRAPH THEORY",
	teachers: [],
	id: 4396
},
{
	name: "MATH 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4397
},
{
	name: "MATH 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4398
},
{
	name: "MATH 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4399
},
{
	name: "MATH 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4400
},
{
	name: "MATH 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 4401
},
{
	name: "MATH 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4402
},
{
	name: "MATH 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 4403
},
{
	name: "ME 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 4404
},
{
	name: "ME 1770",
	description: "INTRO TO ENGR GRAPHICS",
	teachers: [],
	id: 4405
},
{
	name: "ME 1XXX",
	description: "MECHANICAL ENGR ELECTIVE",
	teachers: [],
	id: 4406
},
{
	name: "ME 2016",
	description: "COMPUTING TECHNIQUES",
	teachers: [],
	id: 4407
},
{
	name: "ME 2110",
	description: "CREATIVE DECISIONS& DSGN",
	teachers: [],
	id: 4408
},
{
	name: "ME 2202",
	description: "DYNAMICS OF RIGID BODIES",
	teachers: [],
	id: 4409
},
{
	name: "ME 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4410
},
{
	name: "ME 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4411
},
{
	name: "ME 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4412
},
{
	name: "ME 2XXX",
	description: "MECHANICAL ENGR ELECTIVE",
	teachers: [],
	id: 4413
},
{
	name: "ME 3015",
	description: "SYS DYNAMICS & CONTROL",
	teachers: [],
	id: 4414
},
{
	name: "ME 3017",
	description: "SYSTEM DYNAMICS",
	teachers: [],
	id: 4415
},
{
	name: "ME 3057",
	description: "EXPERIMENTAL METHODOLOGY",
	teachers: [],
	id: 4416
},
{
	name: "ME 3141",
	description: "CUTTING-EDGE ENG SEMINAR",
	teachers: [],
	id: 4417
},
{
	name: "ME 3180",
	description: "MACHINE DESIGN",
	teachers: [],
	id: 4418
},
{
	name: "ME 3210",
	description: "DESIGN AND MANUFACTURE",
	teachers: [],
	id: 4419
},
{
	name: "ME 3322",
	description: "THERMODYNAMICS",
	teachers: [],
	id: 4420
},
{
	name: "ME 3340",
	description: "FLUID MECHANICS",
	teachers: [],
	id: 4421
},
{
	name: "ME 3345",
	description: "HEAT TRANSFER",
	teachers: [],
	id: 4422
},
{
	name: "ME 3700",
	description: "INTRO ENERGY SYSTEMS EGR",
	teachers: [],
	id: 4423
},
{
	name: "ME 3720",
	description: "INTRO-FLUID&THERMAL ENGR",
	teachers: [],
	id: 4424
},
{
	name: "ME 3743",
	description: "EMERGING TECHNOLOGIES",
	teachers: [],
	id: 4425
},
{
	name: "ME 3744",
	description: "MANGN PROD SERV TECH DEV",
	teachers: [],
	id: 4426
},
{
	name: "ME 3XXX",
	description: "MECHANICAL ENGR ELECTIVE",
	teachers: [],
	id: 4427
},
{
	name: "ME 4011",
	description: "IC ENGINES",
	teachers: [],
	id: 4428
},
{
	name: "ME 4012",
	description: "MOTION SYSTEMS",
	teachers: [],
	id: 4429
},
{
	name: "ME 4041",
	description: "COMPUTER GRAPHICS & CAD",
	teachers: [],
	id: 4430
},
{
	name: "ME 4053",
	description: "ME SYSTEMS LAB",
	teachers: [],
	id: 4431
},
{
	name: "ME 4056",
	description: "ME SYSTEMS LABORATORY",
	teachers: [],
	id: 4432
},
{
	name: "ME 4171",
	description: "ENVIRONMENTAL DSGN & MFG",
	teachers: [],
	id: 4433
},
{
	name: "ME 4172",
	description: "DSGN SUSTAINABLE ENG SYS",
	teachers: [],
	id: 4434
},
{
	name: "ME 4182",
	description: "CAPSTONE DESIGN",
	teachers: [],
	id: 4435
},
{
	name: "ME 4189",
	description: "STRUCTURAL VIBRATIONS",
	teachers: [],
	id: 4436
},
{
	name: "ME 4193",
	description: "TRIBOLOGICAL DESIGN",
	teachers: [],
	id: 4437
},
{
	name: "ME 4214",
	description: "MECH BEHAVIOR-MATERIALS",
	teachers: [],
	id: 4438
},
{
	name: "ME 4215",
	description: "MFG PROCESS ANALYSIS",
	teachers: [],
	id: 4439
},
{
	name: "ME 4315",
	description: "ENERGY SYSTEMS ANALY&DGN",
	teachers: [],
	id: 4440
},
{
	name: "ME 4321",
	description: "REFRIGERATION & AIR COND",
	teachers: [],
	id: 4441
},
{
	name: "ME 4324",
	description: "POWER GENERATION TECH",
	teachers: [],
	id: 4442
},
{
	name: "ME 4325",
	description: "INTRO FUEL CELL SYSTEMS",
	teachers: [],
	id: 4443
},
{
	name: "ME 4330",
	description: "HEAT AND MASS EXCHANGERS",
	teachers: [],
	id: 4444
},
{
	name: "ME 4340",
	description: "APPLIED FLUID MECHANICS",
	teachers: [],
	id: 4445
},
{
	name: "ME 4342",
	description: "COMPUTATIONAL FLUID DYN",
	teachers: [],
	id: 4446
},
{
	name: "ME 4405",
	description: "FUND OF MECHATRONICS",
	teachers: [],
	id: 4447
},
{
	name: "ME 4447",
	description: "MICROPROCES CTRL MFG SYS",
	teachers: [],
	id: 4448
},
{
	name: "ME 4451",
	description: "ROBOTICS",
	teachers: [],
	id: 4449
},
{
	name: "ME 4452",
	description: "CONTROL DYNAMIC SYSTEMS",
	teachers: [],
	id: 4450
},
{
	name: "ME 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4451
},
{
	name: "ME 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4452
},
{
	name: "ME 4701",
	description: "WIND ENGINEERING",
	teachers: [],
	id: 4453
},
{
	name: "ME 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 4454
},
{
	name: "ME 4741",
	description: "INT MGT DEV-PROJ PREP",
	teachers: [],
	id: 4455
},
{
	name: "ME 4742",
	description: "TECH & MGT CAP PROJ",
	teachers: [],
	id: 4456
},
{
	name: "ME 4744",
	description: "GLOBAL DEVELOP CAPSTONE",
	teachers: [],
	id: 4457
},
{
	name: "ME 4753",
	description: "TOPICS IN ENGR PRACTICE",
	teachers: [],
	id: 4458
},
{
	name: "ME 4754",
	description: "ELEC PACKAGING ASSEMBLY",
	teachers: [],
	id: 4459
},
{
	name: "ME 4757",
	description: "BIOFLUID MECHANICS",
	teachers: [],
	id: 4460
},
{
	name: "ME 4758",
	description: "BIOSOLID MECHANICS",
	teachers: [],
	id: 4461
},
{
	name: "ME 4760",
	description: "ACOUSTICS& NOISE CONTROL",
	teachers: [],
	id: 4462
},
{
	name: "ME 4763",
	description: "PULPING & CHEM RECOVERY",
	teachers: [],
	id: 4463
},
{
	name: "ME 4764",
	description: "BLEACHING AND PAPERMAKING",
	teachers: [],
	id: 4464
},
{
	name: "ME 4766",
	description: "NANOSCALE DEVICES",
	teachers: [],
	id: 4465
},
{
	name: "ME 4775",
	description: "POLYMER SCIENCE & ENGR I",
	teachers: [],
	id: 4466
},
{
	name: "ME 4776",
	description: "POLYMER SCIENCE& ENGR II",
	teachers: [],
	id: 4467
},
{
	name: "ME 4777",
	description: "INTRO-POLYMER SCI & ENGR",
	teachers: [],
	id: 4468
},
{
	name: "ME 4781",
	description: "BIOMED INSTRUMENTATION",
	teachers: [],
	id: 4469
},
{
	name: "ME 4782",
	description: "BIOSYSTEMS ANALYSIS",
	teachers: [],
	id: 4470
},
{
	name: "ME 4790",
	description: "MATERIALS SELECT& DESIGN",
	teachers: [],
	id: 4471
},
{
	name: "ME 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 4472
},
{
	name: "ME 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 4473
},
{
	name: "ME 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 4474
},
{
	name: "ME 4801",
	description: "SPECIAL TOPICS-MECH ENGR",
	teachers: [],
	id: 4475
},
{
	name: "ME 4802",
	description: "SPECIAL TOPICS-MECH ENGR",
	teachers: [],
	id: 4476
},
{
	name: "ME 4803",
	description: "SPECIAL TOPICS-MECH ENGR",
	teachers: [],
	id: 4477
},
{
	name: "ME 4804",
	description: "SPECIAL TOPICS-MECH ENGR",
	teachers: [],
	id: 4478
},
{
	name: "ME 4805",
	description: "SPECIAL TOPICS-MECH ENGR",
	teachers: [],
	id: 4479
},
{
	name: "ME 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4480
},
{
	name: "ME 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4481
},
{
	name: "ME 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4482
},
{
	name: "ME 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4483
},
{
	name: "ME 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4484
},
{
	name: "ME 4821",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4485
},
{
	name: "ME 4822",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4486
},
{
	name: "ME 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4487
},
{
	name: "ME 4824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4488
},
{
	name: "ME 4825",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4489
},
{
	name: "ME 4831",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4490
},
{
	name: "ME 4832",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4491
},
{
	name: "ME 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4492
},
{
	name: "ME 4834",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4493
},
{
	name: "ME 4835",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4494
},
{
	name: "ME 4843",
	description: "SPECIAL TOPICS- ME LAB",
	teachers: [],
	id: 4495
},
{
	name: "ME 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4496
},
{
	name: "ME 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4497
},
{
	name: "ME 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4498
},
{
	name: "ME 4XXX",
	description: "MECHANICAL ENGR ELECTIVE",
	teachers: [],
	id: 4499
},
{
	name: "ME 6101",
	description: "ENGINEERING DESIGN",
	teachers: [],
	id: 4500
},
{
	name: "ME 6102",
	description: "DESIGNING OPEN ENGR SYS",
	teachers: [],
	id: 4501
},
{
	name: "ME 6103",
	description: "OPTIMIZATION ENGR DESIGN",
	teachers: [],
	id: 4502
},
{
	name: "ME 6104",
	description: "COMPUTER-AIDED DESIGN",
	teachers: [],
	id: 4503
},
{
	name: "ME 6105",
	description: "MODELING&SIMULATION-DSGN",
	teachers: [],
	id: 4504
},
{
	name: "ME 6124",
	description: "FINITE-ELEMENT METHOD",
	teachers: [],
	id: 4505
},
{
	name: "ME 6140",
	description: "PHYSICAL PROP OF PAPER",
	teachers: [],
	id: 4506
},
{
	name: "ME 6201",
	description: "PRINCIPLE-CONTINUUM MECH",
	teachers: [],
	id: 4507
},
{
	name: "ME 6203",
	description: "INELASTIC DEFORM SOLIDS",
	teachers: [],
	id: 4508
},
{
	name: "ME 6204",
	description: "MICROMECHANICS-MATERIALS",
	teachers: [],
	id: 4509
},
{
	name: "ME 6222",
	description: "MFG PROCESSES & SYSTEMS",
	teachers: [],
	id: 4510
},
{
	name: "ME 6223",
	description: "AUTO MFG PROCESS PLAN",
	teachers: [],
	id: 4511
},
{
	name: "ME 6224",
	description: "MACHINE TOOL ANALYSIS",
	teachers: [],
	id: 4512
},
{
	name: "ME 6225",
	description: "METROLOGY & MEASURE SYS",
	teachers: [],
	id: 4513
},
{
	name: "ME 6226",
	description: "SEMICONDUCT MFG&ASSEMBLY",
	teachers: [],
	id: 4514
},
{
	name: "ME 6229",
	description: "INTRODUCTION TO MEMS",
	teachers: [],
	id: 4515
},
{
	name: "ME 6242",
	description: "MECHANICS OF CONTACT",
	teachers: [],
	id: 4516
},
{
	name: "ME 6243",
	description: "FLUID FILM LUBRICATION",
	teachers: [],
	id: 4517
},
{
	name: "ME 6244",
	description: "ROTORDYNAMICS",
	teachers: [],
	id: 4518
},
{
	name: "ME 6281",
	description: "MECH-PAPER FORMING&COAT",
	teachers: [],
	id: 4519
},
{
	name: "ME 6301",
	description: "CONDUCTION HEAT TRANSFER",
	teachers: [],
	id: 4520
},
{
	name: "ME 6302",
	description: "CONVECTION HEAT TRANSFER",
	teachers: [],
	id: 4521
},
{
	name: "ME 6303",
	description: "RADIATION HEAT TRANSFER",
	teachers: [],
	id: 4522
},
{
	name: "ME 6304",
	description: "PRIN OF THERMODYNAMICS",
	teachers: [],
	id: 4523
},
{
	name: "ME 6305",
	description: "APPS OF THERMODYNAMICS",
	teachers: [],
	id: 4524
},
{
	name: "ME 6309",
	description: "NANOSCALE HEAT TRANSFER",
	teachers: [],
	id: 4525
},
{
	name: "ME 6401",
	description: "LINEAR CONTROL SYSTEMS",
	teachers: [],
	id: 4526
},
{
	name: "ME 6402",
	description: "NONLINEAR CONTROL SYSTEM",
	teachers: [],
	id: 4527
},
{
	name: "ME 6403",
	description: "DIGITAL CONTROL SYSTEMS",
	teachers: [],
	id: 4528
},
{
	name: "ME 6404",
	description: "ADV CTRL DSGN IMPLEMENT",
	teachers: [],
	id: 4529
},
{
	name: "ME 6405",
	description: "INTRO TO MECHATRONICS",
	teachers: [],
	id: 4530
},
{
	name: "ME 6406",
	description: "MACHINE VISION",
	teachers: [],
	id: 4531
},
{
	name: "ME 6407",
	description: "ROBOTICS",
	teachers: [],
	id: 4532
},
{
	name: "ME 6408",
	description: "ADVANCED MECHATRONICS",
	teachers: [],
	id: 4533
},
{
	name: "ME 6441",
	description: "DYNAMICS-MECHANICAL SYS",
	teachers: [],
	id: 4534
},
{
	name: "ME 6442",
	description: "VIBRATION-MECHANICAL SYS",
	teachers: [],
	id: 4535
},
{
	name: "ME 6443",
	description: "VARIATIONAL METHODS",
	teachers: [],
	id: 4536
},
{
	name: "ME 6444",
	description: "NONLINEAR SYSTEMS",
	teachers: [],
	id: 4537
},
{
	name: "ME 6449",
	description: "TRANSDUCERS & SIGNALS",
	teachers: [],
	id: 4538
},
{
	name: "ME 6452",
	description: "WAVE PROPAGATION-SOLIDS",
	teachers: [],
	id: 4539
},
{
	name: "ME 6460",
	description: "MEMS DEVICES",
	teachers: [],
	id: 4540
},
{
	name: "ME 6601",
	description: "INTRO TO FLUID MECHANICS",
	teachers: [],
	id: 4541
},
{
	name: "ME 6602",
	description: "VISCOUS FLOW",
	teachers: [],
	id: 4542
},
{
	name: "ME 6622",
	description: "EXPERIMENTAL METHODS",
	teachers: [],
	id: 4543
},
{
	name: "ME 6701",
	description: "WIND ENGINEERING",
	teachers: [],
	id: 4544
},
{
	name: "ME 6720",
	description: "BIOTRANSPORT",
	teachers: [],
	id: 4545
},
{
	name: "ME 6741",
	description: "PULP & PAPER MFG I",
	teachers: [],
	id: 4546
},
{
	name: "ME 6742",
	description: "PULP & PAPER MFG II",
	teachers: [],
	id: 4547
},
{
	name: "ME 6743",
	description: "TISSUE MECHANICS",
	teachers: [],
	id: 4548
},
{
	name: "ME 6744",
	description: "TOPICS IN ENGR PRACTICE",
	teachers: [],
	id: 4549
},
{
	name: "ME 6746",
	description: "REHAB ENGINEERING",
	teachers: [],
	id: 4550
},
{
	name: "ME 6753",
	description: "PRIN-MGT FOR ENGINEERS",
	teachers: [],
	id: 4551
},
{
	name: "ME 6754",
	description: "ENGR DATABASE MGT SYSTEM",
	teachers: [],
	id: 4552
},
{
	name: "ME 6758",
	description: "NUMERICAL METHODS IN ME",
	teachers: [],
	id: 4553
},
{
	name: "ME 6759",
	description: "MATE-ENVIR CONSCIOUS DGN",
	teachers: [],
	id: 4554
},
{
	name: "ME 6760",
	description: "ACOUSTICS I",
	teachers: [],
	id: 4555
},
{
	name: "ME 6761",
	description: "ACOUSTICS II",
	teachers: [],
	id: 4556
},
{
	name: "ME 6762",
	description: "APPLIED ACOUSTICS",
	teachers: [],
	id: 4557
},
{
	name: "ME 6765",
	description: "KINETICS & THERMO GASES",
	teachers: [],
	id: 4558
},
{
	name: "ME 6766",
	description: "COMBUSTION",
	teachers: [],
	id: 4559
},
{
	name: "ME 6767",
	description: "ADV TOPICS IN COMBUSTION",
	teachers: [],
	id: 4560
},
{
	name: "ME 6768",
	description: "POLYMER STRUCTURE& PROPS",
	teachers: [],
	id: 4561
},
{
	name: "ME 6769",
	description: "LINEAR ELASTICITY",
	teachers: [],
	id: 4562
},
{
	name: "ME 6770",
	description: "ENERGY METH-ELAST&PLAST",
	teachers: [],
	id: 4563
},
{
	name: "ME 6774",
	description: "BIOMATERIAL:STRUCT&FUNCT",
	teachers: [],
	id: 4564
},
{
	name: "ME 6776",
	description: "MICROELEC SYS PACKAGING",
	teachers: [],
	id: 4565
},
{
	name: "ME 6777",
	description: "ADVANCED BIOMATERIALS",
	teachers: [],
	id: 4566
},
{
	name: "ME 6779",
	description: "THERM PKG-MICRO/NANO SYS",
	teachers: [],
	id: 4567
},
{
	name: "ME 6782",
	description: "CELLULAR ENGINEERING",
	teachers: [],
	id: 4568
},
{
	name: "ME 6789",
	description: "TECHNOLOGY VENTURES",
	teachers: [],
	id: 4569
},
{
	name: "ME 6792",
	description: "MANUFACTURING SEMINAR",
	teachers: [],
	id: 4570
},
{
	name: "ME 6793",
	description: "SYSTEMS PATHOPHYSIOLOGY",
	teachers: [],
	id: 4571
},
{
	name: "ME 6794",
	description: "TISSUE ENGINEERING",
	teachers: [],
	id: 4572
},
{
	name: "ME 6795",
	description: "MATH,STAT&COMP TECH-MATE",
	teachers: [],
	id: 4573
},
{
	name: "ME 6796",
	description: "STRUCT-PROPERTY RELATION",
	teachers: [],
	id: 4574
},
{
	name: "ME 6797",
	description: "THERM&KINETIC MICROSTRUC",
	teachers: [],
	id: 4575
},
{
	name: "ME 6799",
	description: "LEGAL ISSUES-TECH TRANSF",
	teachers: [],
	id: 4576
},
{
	name: "ME 6XXX",
	description: "MECH ENGR ELECTIVE",
	teachers: [],
	id: 4577
},
{
	name: "ME 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 4578
},
{
	name: "ME 7056",
	description: "GT-STUTTGART",
	teachers: [],
	id: 4579
},
{
	name: "ME 7101",
	description: "SEMINAR IN ENGR DESIGN",
	teachers: [],
	id: 4580
},
{
	name: "ME 7201",
	description: "COMP MECHANICS-MATERIALS",
	teachers: [],
	id: 4581
},
{
	name: "ME 7203",
	description: "CONSTIT RELATIONS-SOLIDS",
	teachers: [],
	id: 4582
},
{
	name: "ME 7205",
	description: "NANOMECHANICS & DEVICES",
	teachers: [],
	id: 4583
},
{
	name: "ME 7226",
	description: "INTERFACE&SURFACE PROP",
	teachers: [],
	id: 4584
},
{
	name: "ME 7227",
	description: "RAPID PROTOTYPE-ENGR",
	teachers: [],
	id: 4585
},
{
	name: "ME 7228",
	description: "THERMO-MECH RELIABILITY",
	teachers: [],
	id: 4586
},
{
	name: "ME 7301",
	description: "TRANS PH MULTIPHASE FLOW",
	teachers: [],
	id: 4587
},
{
	name: "ME 7442",
	description: "VIBRATION-CONTINUOUS SYS",
	teachers: [],
	id: 4588
},
{
	name: "ME 7602",
	description: "HYDRODYNAMIC STABILITY",
	teachers: [],
	id: 4589
},
{
	name: "ME 7751",
	description: "COMPUTATIONAL FLUID MECH",
	teachers: [],
	id: 4590
},
{
	name: "ME 7757",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 4591
},
{
	name: "ME 7764",
	description: "ACOUSTIC PROPAGATION",
	teachers: [],
	id: 4592
},
{
	name: "ME 7771",
	description: "MECH-POLYMER SOLID&FLUID",
	teachers: [],
	id: 4593
},
{
	name: "ME 7772",
	description: "FUND-FRACTURE MECHANICS",
	teachers: [],
	id: 4594
},
{
	name: "ME 7773",
	description: "ADV FRACTURE MECHANICS",
	teachers: [],
	id: 4595
},
{
	name: "ME 7774",
	description: "FATIGUE-MATERIALS&STRUCT",
	teachers: [],
	id: 4596
},
{
	name: "ME 7775",
	description: "FRACT&FATIGUE-STRUCTURES",
	teachers: [],
	id: 4597
},
{
	name: "ME 7785",
	description: "INTRO ROBOTICS RESEARCH",
	teachers: [],
	id: 4598
},
{
	name: "ME 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 4599
},
{
	name: "ME 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 4600
},
{
	name: "ME 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 4601
},
{
	name: "ME 8001",
	description: "MASTER SEMINAR I",
	teachers: [],
	id: 4602
},
{
	name: "ME 8002",
	description: "MASTER SEMINAR II",
	teachers: [],
	id: 4603
},
{
	name: "ME 8010",
	description: "SEMINAR-MECHANICAL ENGR",
	teachers: [],
	id: 4604
},
{
	name: "ME 8011",
	description: "SEMINAR-MECHANICAL ENGR",
	teachers: [],
	id: 4605
},
{
	name: "ME 8012",
	description: "SEMINAR-MECHANICAL ENGR",
	teachers: [],
	id: 4606
},
{
	name: "ME 8750",
	description: "ROBOTICS RESEARCH FND I",
	teachers: [],
	id: 4607
},
{
	name: "ME 8751",
	description: "ROBOTICS RESEARCH FND II",
	teachers: [],
	id: 4608
},
{
	name: "ME 8801",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4609
},
{
	name: "ME 8802",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4610
},
{
	name: "ME 8803",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4611
},
{
	name: "ME 8804",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4612
},
{
	name: "ME 8805",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4613
},
{
	name: "ME 8806",
	description: "SPEC TOPIC-MANUFACTURING",
	teachers: [],
	id: 4614
},
{
	name: "ME 8811",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4615
},
{
	name: "ME 8812",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4616
},
{
	name: "ME 8813",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4617
},
{
	name: "ME 8814",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4618
},
{
	name: "ME 8815",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4619
},
{
	name: "ME 8816",
	description: "SPEC TOPIC-CAE & DESIGN",
	teachers: [],
	id: 4620
},
{
	name: "ME 8821",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4621
},
{
	name: "ME 8822",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4622
},
{
	name: "ME 8823",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4623
},
{
	name: "ME 8824",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4624
},
{
	name: "ME 8825",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4625
},
{
	name: "ME 8826",
	description: "SPEC TOPICS-TRIBOLOGY",
	teachers: [],
	id: 4626
},
{
	name: "ME 8831",
	description: "SPEC TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4627
},
{
	name: "ME 8832",
	description: "SPEC TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4628
},
{
	name: "ME 8833",
	description: "SPEC TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4629
},
{
	name: "ME 8834",
	description: "SPEC TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4630
},
{
	name: "ME 8835",
	description: "SPCE TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4631
},
{
	name: "ME 8836",
	description: "SPEC TOP-THERMAL SCIENCE",
	teachers: [],
	id: 4632
},
{
	name: "ME 8841",
	description: "SPEC TOPIC-AUTOMATION",
	teachers: [],
	id: 4633
},
{
	name: "ME 8842",
	description: "SPEC TOPIC-AUTOMATION",
	teachers: [],
	id: 4634
},
{
	name: "ME 8843",
	description: "SPEC TOPIC-AUTOMATION",
	teachers: [],
	id: 4635
},
{
	name: "ME 8844",
	description: "SPEC TOPIC-AUTOMATION",
	teachers: [],
	id: 4636
},
{
	name: "ME 8845",
	description: "SPEC TOPICS-AUTOMATION",
	teachers: [],
	id: 4637
},
{
	name: "ME 8846",
	description: "SPEC TOPIC-AUTOMATION",
	teachers: [],
	id: 4638
},
{
	name: "ME 8851",
	description: "SPEC TOP-ACOUSTICS&DYNAM",
	teachers: [],
	id: 4639
},
{
	name: "ME 8852",
	description: "SPEC TOP-ACOUSTICS&DYNAM",
	teachers: [],
	id: 4640
},
{
	name: "ME 8853",
	description: "SPEC TOP-ACOUSTICS&DYNAM",
	teachers: [],
	id: 4641
},
{
	name: "ME 8854",
	description: "SPEC TOP-ACOUSTICS&DYNAM",
	teachers: [],
	id: 4642
},
{
	name: "ME 8855",
	description: "SPEC TOP-ACOUSTICS&DYNAM",
	teachers: [],
	id: 4643
},
{
	name: "ME 8856",
	description: "SPEC TOP-ACPUSTICS&DYNAM",
	teachers: [],
	id: 4644
},
{
	name: "ME 8861",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4645
},
{
	name: "ME 8862",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4646
},
{
	name: "ME 8863",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4647
},
{
	name: "ME 8864",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4648
},
{
	name: "ME 8865",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4649
},
{
	name: "ME 8866",
	description: "SPEC TOP-FLUID MECHANICS",
	teachers: [],
	id: 4650
},
{
	name: "ME 8871",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4651
},
{
	name: "ME 8872",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4652
},
{
	name: "ME 8873",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4653
},
{
	name: "ME 8874",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4654
},
{
	name: "ME 8875",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4655
},
{
	name: "ME 8876",
	description: "SPEC TOP-BIOENGINEERING",
	teachers: [],
	id: 4656
},
{
	name: "ME 8881",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4657
},
{
	name: "ME 8882",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4658
},
{
	name: "ME 8883",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4659
},
{
	name: "ME 8884",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4660
},
{
	name: "ME 8885",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4661
},
{
	name: "ME 8886",
	description: "SP TOP-MECH OF MATERIALS",
	teachers: [],
	id: 4662
},
{
	name: "ME 8901",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4663
},
{
	name: "ME 8902",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4664
},
{
	name: "ME 8903",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4665
},
{
	name: "ME 8904",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4666
},
{
	name: "ME 8905",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4667
},
{
	name: "ME 8906",
	description: "SPEC PROB-MANUFACTURING",
	teachers: [],
	id: 4668
},
{
	name: "ME 8911",
	description: "SPEC PROB-CAE & DESIGN",
	teachers: [],
	id: 4669
},
{
	name: "ME 8912",
	description: "SPEC PROB-CAE & DESIGN",
	teachers: [],
	id: 4670
},
{
	name: "ME 8913",
	description: "SPEC PROB-CAE & DESIGN",
	teachers: [],
	id: 4671
},
{
	name: "ME 8914",
	description: "SPEC PROB-CAE & DESIGN",
	teachers: [],
	id: 4672
},
{
	name: "ME 8915",
	description: "SPEC PROB-CAE & DESGIN",
	teachers: [],
	id: 4673
},
{
	name: "ME 8916",
	description: "SPEC PROB-CAE & DESIGN",
	teachers: [],
	id: 4674
},
{
	name: "ME 8921",
	description: "SPEC PROBLEMS-TRIBOLOGY",
	teachers: [],
	id: 4675
},
{
	name: "ME 8922",
	description: "SPEC PROBLEMS-TRIBOLOGY",
	teachers: [],
	id: 4676
},
{
	name: "ME 8923",
	description: "SPEC PROBLEMS-TRIBOLOGY",
	teachers: [],
	id: 4677
},
{
	name: "ME 8924",
	description: "SPEC PROBLEM-TRIBOLOGY",
	teachers: [],
	id: 4678
},
{
	name: "ME 8925",
	description: "SPEC PROBLEMS-TRIBOLOGY",
	teachers: [],
	id: 4679
},
{
	name: "ME 8926",
	description: "SPEC PROBLEMS-TRIBOLOGY",
	teachers: [],
	id: 4680
},
{
	name: "ME 8931",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4681
},
{
	name: "ME 8932",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4682
},
{
	name: "ME 8933",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4683
},
{
	name: "ME 8934",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4684
},
{
	name: "ME 8935",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4685
},
{
	name: "ME 8936",
	description: "SPEC PROB-THERM SCIENCES",
	teachers: [],
	id: 4686
},
{
	name: "ME 8941",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4687
},
{
	name: "ME 8942",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4688
},
{
	name: "ME 8943",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4689
},
{
	name: "ME 8944",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4690
},
{
	name: "ME 8945",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4691
},
{
	name: "ME 8946",
	description: "SPECIAL PROB-AUTOMATION",
	teachers: [],
	id: 4692
},
{
	name: "ME 8951",
	description: "SP PROB-ACOUSTIC/DYNAMIC",
	teachers: [],
	id: 4693
},
{
	name: "ME 8952",
	description: "SP PROB-ACOUSTIC/DYMANIC",
	teachers: [],
	id: 4694
},
{
	name: "ME 8953",
	description: "SP PROB-ACOUSTIC/DYNAMIC",
	teachers: [],
	id: 4695
},
{
	name: "ME 8954",
	description: "SP PROB-ACOUSTIC/DYNAMIC",
	teachers: [],
	id: 4696
},
{
	name: "ME 8955",
	description: "SP PROB-ACOUSTIC/DYNAMIC",
	teachers: [],
	id: 4697
},
{
	name: "ME 8956",
	description: "SP PROB-ACOUSTIC/DYNAMIC",
	teachers: [],
	id: 4698
},
{
	name: "ME 8961",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4699
},
{
	name: "ME 8962",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4700
},
{
	name: "ME 8963",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4701
},
{
	name: "ME 8964",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4702
},
{
	name: "ME 8965",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4703
},
{
	name: "ME 8966",
	description: "SPEC PROB-FLUID MECHANIC",
	teachers: [],
	id: 4704
},
{
	name: "ME 8971",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4705
},
{
	name: "ME 8972",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4706
},
{
	name: "ME 8973",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4707
},
{
	name: "ME 8974",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4708
},
{
	name: "ME 8975",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4709
},
{
	name: "ME 8976",
	description: "SPEC PROB-BIOENGINEERING",
	teachers: [],
	id: 4710
},
{
	name: "ME 8981",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4711
},
{
	name: "ME 8982",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4712
},
{
	name: "ME 8983",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4713
},
{
	name: "ME 8984",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4714
},
{
	name: "ME 8985",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4715
},
{
	name: "ME 8986",
	description: "SP PROB-MECH OF MATERIAL",
	teachers: [],
	id: 4716
},
{
	name: "ME 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 4717
},
{
	name: "ME 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4718
},
{
	name: "ME 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 4719
},
{
	name: "MGT 1XXX",
	description: "MANAGEMENT ELECTIVE",
	teachers: [],
	id: 4720
},
{
	name: "MGT 2106",
	description: "LEGAL ASPECTS-BUSINESS",
	teachers: [],
	id: 4721
},
{
	name: "MGT 2200",
	description: "INFORMATION TECHNOLOGY",
	teachers: [],
	id: 4722
},
{
	name: "MGT 2250",
	description: "MANAGEMENT STATISTICS",
	teachers: [],
	id: 4723
},
{
	name: "MGT 2251",
	description: "MANAGEMENT SCIENCE",
	teachers: [],
	id: 4724
},
{
	name: "MGT 2598",
	description: "MANAGEMENT INTERNSHIP",
	teachers: [],
	id: 4725
},
{
	name: "MGT 2599",
	description: "INTERNSHIP&INDEPENDENT STUDY",
	teachers: [],
	id: 4726
},
{
	name: "MGT 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4727
},
{
	name: "MGT 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4728
},
{
	name: "MGT 2910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4729
},
{
	name: "MGT 2911",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4730
},
{
	name: "MGT 2912",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4731
},
{
	name: "MGT 2XXX",
	description: "MANAGEMENT ELECTIVE",
	teachers: [],
	id: 4732
},
{
	name: "MGT 3000",
	description: "FINANC & MANAGERIAL ACCT",
	teachers: [],
	id: 4733
},
{
	name: "MGT 3062",
	description: "FINANCIAL MANAGEMENT",
	teachers: [],
	id: 4734
},
{
	name: "MGT 3075",
	description: "SECURITY VALUATION",
	teachers: [],
	id: 4735
},
{
	name: "MGT 3076",
	description: "INVESTMENTS",
	teachers: [],
	id: 4736
},
{
	name: "MGT 3078",
	description: "FINANCE & INVESTMENTS",
	teachers: [],
	id: 4737
},
{
	name: "MGT 3079",
	description: "MGT OF FIN INSTITUTIONS",
	teachers: [],
	id: 4738
},
{
	name: "MGT 3082",
	description: "FUNDMNT REAL ESTATE DEV.",
	teachers: [],
	id: 4739
},
{
	name: "MGT 3084",
	description: "DERIVATIVE SECURITIES",
	teachers: [],
	id: 4740
},
{
	name: "MGT 3101",
	description: "ORGANIZATIONAL BEHAVIOR",
	teachers: [],
	id: 4741
},
{
	name: "MGT 3102",
	description: "MGT HUM RES-REG ENVIRON",
	teachers: [],
	id: 4742
},
{
	name: "MGT 3103",
	description: "LEADERSIP-CHANGING ENV",
	teachers: [],
	id: 4743
},
{
	name: "MGT 3150",
	description: "PRIN OF MANAGEMENT",
	teachers: [],
	id: 4744
},
{
	name: "MGT 3300",
	description: "MARKETING MANAGEMENT I",
	teachers: [],
	id: 4745
},
{
	name: "MGT 3310",
	description: "MARKETING RESEARCH",
	teachers: [],
	id: 4746
},
{
	name: "MGT 3325",
	description: "PRODUCT PLANNING",
	teachers: [],
	id: 4747
},
{
	name: "MGT 3501",
	description: "OPERATIONS MANAGEMENT",
	teachers: [],
	id: 4748
},
{
	name: "MGT 3510",
	description: "MANAGEMENT OF TECHNOLOGY",
	teachers: [],
	id: 4749
},
{
	name: "MGT 3599",
	description: "CAREER DEVELMNT WORKSHOP",
	teachers: [],
	id: 4750
},
{
	name: "MGT 3605",
	description: "PRINS OF COMMERCIAL LAW",
	teachers: [],
	id: 4751
},
{
	name: "MGT 3606",
	description: "INTL BUSINESS LAW",
	teachers: [],
	id: 4752
},
{
	name: "MGT 3607",
	description: "BUSINESS ETHICS",
	teachers: [],
	id: 4753
},
{
	name: "MGT 3608",
	description: "TECH LAW AND ETHICS",
	teachers: [],
	id: 4754
},
{
	name: "MGT 3609",
	description: "LEGAL ASPECTS REAL EST",
	teachers: [],
	id: 4755
},
{
	name: "MGT 3614",
	description: "LAW FOR ENTREPRENEURS",
	teachers: [],
	id: 4756
},
{
	name: "MGT 3660",
	description: "INTERNATIONAL BUSINESS",
	teachers: [],
	id: 4757
},
{
	name: "MGT 3661",
	description: "ADV CONCEPTS-INT'L BUS",
	teachers: [],
	id: 4758
},
{
	name: "MGT 3662",
	description: "MGT IN HEALTHCARE SECTOR",
	teachers: [],
	id: 4759
},
{
	name: "MGT 3663",
	description: "TECHNOLOGY STRATEGY",
	teachers: [],
	id: 4760
},
{
	name: "MGT 3743",
	description: "EMERGING TECHNOLOGIES",
	teachers: [],
	id: 4761
},
{
	name: "MGT 3744",
	description: "MANGN PROD SERV TECH DEV",
	teachers: [],
	id: 4762
},
{
	name: "MGT 3745",
	description: "BUSINESS PROGRAMMING",
	teachers: [],
	id: 4763
},
{
	name: "MGT 3XXX",
	description: "MANAGEMENT ELECTIVE",
	teachers: [],
	id: 4764
},
{
	name: "MGT 4010",
	description: "BUSINESS TAXATION",
	teachers: [],
	id: 4765
},
{
	name: "MGT 4015",
	description: "ADV MANAGERIAL ACCT",
	teachers: [],
	id: 4766
},
{
	name: "MGT 4026",
	description: "FIN REPORT & ANALYSIS I",
	teachers: [],
	id: 4767
},
{
	name: "MGT 4027",
	description: "FIN REPORT & ANALYSIS II",
	teachers: [],
	id: 4768
},
{
	name: "MGT 4028",
	description: "FIN ANALY&RPT-TECH FIRMS",
	teachers: [],
	id: 4769
},
{
	name: "MGT 4030",
	description: "INTERNATIONAL ACCOUNTING",
	teachers: [],
	id: 4770
},
{
	name: "MGT 4041",
	description: "AUDIT&FIN CONTROL SYS",
	teachers: [],
	id: 4771
},
{
	name: "MGT 4043",
	description: "ADVANCED FIN REPORTING",
	teachers: [],
	id: 4772
},
{
	name: "MGT 4045",
	description: "SEM-ADVANCED ACCOUNTING",
	teachers: [],
	id: 4773
},
{
	name: "MGT 4047",
	description: "ETHICS & ACCOUNTING",
	teachers: [],
	id: 4774
},
{
	name: "MGT 4050",
	description: "BUSINESS ANALYTICS",
	teachers: [],
	id: 4775
},
{
	name: "MGT 4051",
	description: "DECISION SUPP&EXPERT SYS",
	teachers: [],
	id: 4776
},
{
	name: "MGT 4052",
	description: "SYSTEMS ANALYSIS& DESIGN",
	teachers: [],
	id: 4777
},
{
	name: "MGT 4053",
	description: "BUS DATA COMMUNICATIONS",
	teachers: [],
	id: 4778
},
{
	name: "MGT 4055",
	description: "INTERNATIONAL IT ISSUES",
	teachers: [],
	id: 4779
},
{
	name: "MGT 4056",
	description: "ELECTRONIC COMMERCE",
	teachers: [],
	id: 4780
},
{
	name: "MGT 4057",
	description: "BUS PROCESS ANALY&DESIGN",
	teachers: [],
	id: 4781
},
{
	name: "MGT 4058",
	description: "DATABASE MANAGEMENT",
	teachers: [],
	id: 4782
},
{
	name: "MGT 4066",
	description: "CORPORATE RESTRUCTURING",
	teachers: [],
	id: 4783
},
{
	name: "MGT 4067",
	description: "FNCL MKTS TRADING&STRUCT",
	teachers: [],
	id: 4784
},
{
	name: "MGT 4068",
	description: "FIXED INCOME",
	teachers: [],
	id: 4785
},
{
	name: "MGT 4070",
	description: "INTERNATIONAL FINANCE",
	teachers: [],
	id: 4786
},
{
	name: "MGT 4071",
	description: "MULTINATIONAL FIN MGT",
	teachers: [],
	id: 4787
},
{
	name: "MGT 4072",
	description: "ENTREPRENEURIAL FINANCE",
	teachers: [],
	id: 4788
},
{
	name: "MGT 4102",
	description: "MANAGEMENT CONSULTING",
	teachers: [],
	id: 4789
},
{
	name: "MGT 4106",
	description: "TEAMS IN ORGANIZATIONS",
	teachers: [],
	id: 4790
},
{
	name: "MGT 4116",
	description: "GEND, RACE, ETHN ORG BEHAV",
	teachers: [],
	id: 4791
},
{
	name: "MGT 4117",
	description: "GLOBAL WORKFORCE MGT",
	teachers: [],
	id: 4792
},
{
	name: "MGT 4181",
	description: "BUSINESS FORECASTING",
	teachers: [],
	id: 4793
},
{
	name: "MGT 4190",
	description: "STRATEGIC QUALITY MGT",
	teachers: [],
	id: 4794
},
{
	name: "MGT 4191",
	description: "ENTREPRENEURSHIP FORUM",
	teachers: [],
	id: 4795
},
{
	name: "MGT 4192",
	description: "IMPACT FORUM",
	teachers: [],
	id: 4796
},
{
	name: "MGT 4193",
	description: "SERV LEAD VALUES SYSTEMS",
	teachers: [],
	id: 4797
},
{
	name: "MGT 4194",
	description: "SOCIAL ENTREPRENEURSHIP",
	teachers: [],
	id: 4798
},
{
	name: "MGT 4195",
	description: "STRATEGIC MANAGEMENT",
	teachers: [],
	id: 4799
},
{
	name: "MGT 4303",
	description: "PERSONAL SELL& SALES MGT",
	teachers: [],
	id: 4800
},
{
	name: "MGT 4304",
	description: "STRATEGIC BRAND MGT",
	teachers: [],
	id: 4801
},
{
	name: "MGT 4305",
	description: "BUSINESS TO BUSINESS MKT",
	teachers: [],
	id: 4802
},
{
	name: "MGT 4307",
	description: "STRATEGIC MARKETING",
	teachers: [],
	id: 4803
},
{
	name: "MGT 4308",
	description: "ADV&PROM: INTEG MKTG COMM",
	teachers: [],
	id: 4804
},
{
	name: "MGT 4309",
	description: "SERVICES MARKETING",
	teachers: [],
	id: 4805
},
{
	name: "MGT 4311",
	description: "DIGITAL MARKETING",
	teachers: [],
	id: 4806
},
{
	name: "MGT 4331",
	description: "CONSUMER BEHAVIOR",
	teachers: [],
	id: 4807
},
{
	name: "MGT 4332",
	description: "DATABASE & CRM STRATEGY",
	teachers: [],
	id: 4808
},
{
	name: "MGT 4335",
	description: "INTERNATIONAL MARKETING",
	teachers: [],
	id: 4809
},
{
	name: "MGT 4341",
	description: "MGT HEALTHCARE OPERATIONS",
	teachers: [],
	id: 4810
},
{
	name: "MGT 4352",
	description: "OPERATIONS RESOURCE PLAN",
	teachers: [],
	id: 4811
},
{
	name: "MGT 4353",
	description: "OPERATIONS STRATEGY",
	teachers: [],
	id: 4812
},
{
	name: "MGT 4360",
	description: "GLOBAL OPERATIONS",
	teachers: [],
	id: 4813
},
{
	name: "MGT 4365",
	description: "QUALITY CONTROL",
	teachers: [],
	id: 4814
},
{
	name: "MGT 4366",
	description: "SERVICE OPERATIONS MGT",
	teachers: [],
	id: 4815
},
{
	name: "MGT 4367",
	description: "REVENUE ANALYTICS",
	teachers: [],
	id: 4816
},
{
	name: "MGT 4401",
	description: "SUPPLY CHAIN MODELING",
	teachers: [],
	id: 4817
},
{
	name: "MGT 4450",
	description: "PROJECT MANAGEMENT",
	teachers: [],
	id: 4818
},
{
	name: "MGT 4598",
	description: "MANAGEMENT INTERNSHIP",
	teachers: [],
	id: 4819
},
{
	name: "MGT 4599",
	description: "INTERNSHIP&INDEPENDENT STUDY",
	teachers: [],
	id: 4820
},
{
	name: "MGT 4610",
	description: "LAW, MGT, & ECONOMICS",
	teachers: [],
	id: 4821
},
{
	name: "MGT 4611",
	description: "INTEGRATIVE MGT ANALYSIS",
	teachers: [],
	id: 4822
},
{
	name: "MGT 4670",
	description: "ENTREPRENEURSHIP",
	teachers: [],
	id: 4823
},
{
	name: "MGT 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4824
},
{
	name: "MGT 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 4825
},
{
	name: "MGT 4725",
	description: "INFO SECURITY POLICY",
	teachers: [],
	id: 4826
},
{
	name: "MGT 4726",
	description: "PRIVACY TECH POLICY LAW",
	teachers: [],
	id: 4827
},
{
	name: "MGT 4741",
	description: "INT MGT DEV-PROJ PREP",
	teachers: [],
	id: 4828
},
{
	name: "MGT 4742",
	description: "TECH & MGT CAP PROJ",
	teachers: [],
	id: 4829
},
{
	name: "MGT 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4830
},
{
	name: "MGT 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4831
},
{
	name: "MGT 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4832
},
{
	name: "MGT 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4833
},
{
	name: "MGT 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4834
},
{
	name: "MGT 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4835
},
{
	name: "MGT 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4836
},
{
	name: "MGT 4910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4837
},
{
	name: "MGT 4911",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4838
},
{
	name: "MGT 4912",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 4839
},
{
	name: "MGT 4XXX",
	description: "MANAGEMENT ELECTIVE",
	teachers: [],
	id: 4840
},
{
	name: "MGT 6000",
	description: "FINANCIAL & MGRL ACCT I",
	teachers: [],
	id: 4841
},
{
	name: "MGT 6010",
	description: "BUSINESS TAXATION",
	teachers: [],
	id: 4842
},
{
	name: "MGT 6015",
	description: "MANAGERIAL ACCOUNTING II",
	teachers: [],
	id: 4843
},
{
	name: "MGT 6020",
	description: "FIN REPORTING & ANALY I",
	teachers: [],
	id: 4844
},
{
	name: "MGT 6022",
	description: "FIN REPORTING & ANALY II",
	teachers: [],
	id: 4845
},
{
	name: "MGT 6028",
	description: "FIN ANALY&RPT-TECH FIRMS",
	teachers: [],
	id: 4846
},
{
	name: "MGT 6030",
	description: "INTERNATIONAL ACCOUNTING",
	teachers: [],
	id: 4847
},
{
	name: "MGT 6042",
	description: "AUDIT & FIN CONTROL SYS",
	teachers: [],
	id: 4848
},
{
	name: "MGT 6043",
	description: "ADVANCED FIN REPORTING",
	teachers: [],
	id: 4849
},
{
	name: "MGT 6045",
	description: "SEMINAR-ADV ACCOUNTING",
	teachers: [],
	id: 4850
},
{
	name: "MGT 6047",
	description: "ETHICS & ACCOUNTING",
	teachers: [],
	id: 4851
},
{
	name: "MGT 6051",
	description: "DATABASE DEVEL & APPL",
	teachers: [],
	id: 4852
},
{
	name: "MGT 6053",
	description: "BUS DATA COMMUNICATIONS",
	teachers: [],
	id: 4853
},
{
	name: "MGT 6056",
	description: "ELECTRONIC COMMERCE",
	teachers: [],
	id: 4854
},
{
	name: "MGT 6057",
	description: "BUS PROCESS ANALY&DESIGN",
	teachers: [],
	id: 4855
},
{
	name: "MGT 6058",
	description: "INFO TECH PRACTICUM",
	teachers: [],
	id: 4856
},
{
	name: "MGT 6059",
	description: "EMERGING TECHNOLOGIES",
	teachers: [],
	id: 4857
},
{
	name: "MGT 6060",
	description: "FINANCIAL MANAGEMENT",
	teachers: [],
	id: 4858
},
{
	name: "MGT 6066",
	description: "CORPORATE RESTRUCTURING",
	teachers: [],
	id: 4859
},
{
	name: "MGT 6067",
	description: "FIN COMMERICAL REAL EST",
	teachers: [],
	id: 4860
},
{
	name: "MGT 6070",
	description: "INTERNATIONAL FINANCE",
	teachers: [],
	id: 4861
},
{
	name: "MGT 6071",
	description: "MULTINATIONAL FIN MGT",
	teachers: [],
	id: 4862
},
{
	name: "MGT 6078",
	description: "FINANCE & INVESTMENTS",
	teachers: [],
	id: 4863
},
{
	name: "MGT 6080",
	description: "INVESTMENTS",
	teachers: [],
	id: 4864
},
{
	name: "MGT 6081",
	description: "DERIVATIVE SECURITIES",
	teachers: [],
	id: 4865
},
{
	name: "MGT 6082",
	description: "FUNDMNT REAL ESTATE DEV.",
	teachers: [],
	id: 4866
},
{
	name: "MGT 6083",
	description: "REAL ESTATE PRACTICUM",
	teachers: [],
	id: 4867
},
{
	name: "MGT 6086",
	description: "ENTREP FINANC&PVT EQUITY",
	teachers: [],
	id: 4868
},
{
	name: "MGT 6090",
	description: "MGT OF FIN INSTITUTIONS",
	teachers: [],
	id: 4869
},
{
	name: "MGT 6100",
	description: "ORGANIZATIONAL BEHAVIOR",
	teachers: [],
	id: 4870
},
{
	name: "MGT 6101",
	description: "MGING HUMAN RESOURCES",
	teachers: [],
	id: 4871
},
{
	name: "MGT 6106",
	description: "TEAMWORK-ORGANIZATIONS",
	teachers: [],
	id: 4872
},
{
	name: "MGT 6107",
	description: "LEADERSHIP & ORG CHANGE",
	teachers: [],
	id: 4873
},
{
	name: "MGT 6110",
	description: "NEGOTIATION AND CONFLICT",
	teachers: [],
	id: 4874
},
{
	name: "MGT 6111",
	description: "INNOV&ENTREPRENEUR BEHAV",
	teachers: [],
	id: 4875
},
{
	name: "MGT 6113",
	description: "NONPROFIT TEAM CONS PROJ",
	teachers: [],
	id: 4876
},
{
	name: "MGT 6114",
	description: "LEADERSHIP DEVELOPMENT",
	teachers: [],
	id: 4877
},
{
	name: "MGT 6116",
	description: "GEND, RACE, ETHN ORG BEHAV",
	teachers: [],
	id: 4878
},
{
	name: "MGT 6123",
	description: "INFORMATION TECH MGT",
	teachers: [],
	id: 4879
},
{
	name: "MGT 6124",
	description: "LEGAL ENVIRONMENT OF BUS",
	teachers: [],
	id: 4880
},
{
	name: "MGT 6125",
	description: "STRATEGIC MANAGEMENT",
	teachers: [],
	id: 4881
},
{
	name: "MGT 6126",
	description: "INTEGRATIVE MGT EXPER",
	teachers: [],
	id: 4882
},
{
	name: "MGT 6127",
	description: "BUSINESS COMMUNICATIONS",
	teachers: [],
	id: 4883
},
{
	name: "MGT 6128",
	description: "BUSINESS ETHICS",
	teachers: [],
	id: 4884
},
{
	name: "MGT 6130",
	description: "MANAGERIAL ECONOMICS",
	teachers: [],
	id: 4885
},
{
	name: "MGT 6134",
	description: "MANAGERIAL ECONOMICS II",
	teachers: [],
	id: 4886
},
{
	name: "MGT 6135",
	description: "MACROECONOMICS FOR MGRS",
	teachers: [],
	id: 4887
},
{
	name: "MGT 6165",
	description: "VENTURE CREATION",
	teachers: [],
	id: 4888
},
{
	name: "MGT 6176",
	description: "MANAGING GROWTH",
	teachers: [],
	id: 4889
},
{
	name: "MGT 6185",
	description: "INTL BUSINESS ENVIRON",
	teachers: [],
	id: 4890
},
{
	name: "MGT 6190",
	description: "CUR THINKING IN STRATEGY",
	teachers: [],
	id: 4891
},
{
	name: "MGT 6197",
	description: "GLOBAL STRATEGIC MGT",
	teachers: [],
	id: 4892
},
{
	name: "MGT 6198",
	description: "CORP ENTREPRENEURSHIP",
	teachers: [],
	id: 4893
},
{
	name: "MGT 6300",
	description: "MARKETING MANAGEMENT I",
	teachers: [],
	id: 4894
},
{
	name: "MGT 6302",
	description: "CONSUMER BEHAVIOR",
	teachers: [],
	id: 4895
},
{
	name: "MGT 6303",
	description: "SALES MANAGEMENT",
	teachers: [],
	id: 4896
},
{
	name: "MGT 6304",
	description: "CUSTOMER RELATIONSHP MGT",
	teachers: [],
	id: 4897
},
{
	name: "MGT 6306",
	description: "BUSINESS TO BUSINESS MKT",
	teachers: [],
	id: 4898
},
{
	name: "MGT 6308",
	description: "STRATEGIC BRAND MGT",
	teachers: [],
	id: 4899
},
{
	name: "MGT 6310",
	description: "MARKETING RESEARCH",
	teachers: [],
	id: 4900
},
{
	name: "MGT 6315",
	description: "MARKETING ANALYSIS",
	teachers: [],
	id: 4901
},
{
	name: "MGT 6320",
	description: "MARKET RESPONSE MODELS",
	teachers: [],
	id: 4902
},
{
	name: "MGT 6325",
	description: "PRODUCT PLANNING",
	teachers: [],
	id: 4903
},
{
	name: "MGT 6326",
	description: "COLLABORATIVE PROD DEV",
	teachers: [],
	id: 4904
},
{
	name: "MGT 6335",
	description: "INTERNATIONAL MARKETING",
	teachers: [],
	id: 4905
},
{
	name: "MGT 6350",
	description: "OPERATIONS MANAGEMENT",
	teachers: [],
	id: 4906
},
{
	name: "MGT 6351",
	description: "OPERATIONS RESOURCE PLAN",
	teachers: [],
	id: 4907
},
{
	name: "MGT 6352",
	description: "INTERNATIONAL PRACTICUM",
	teachers: [],
	id: 4908
},
{
	name: "MGT 6353",
	description: "OPERATIONS STRATEGY",
	teachers: [],
	id: 4909
},
{
	name: "MGT 6357",
	description: "SERVICE OPERATIONS MGT",
	teachers: [],
	id: 4910
},
{
	name: "MGT 6359",
	description: "BUS STR SUSTAINABILITY",
	teachers: [],
	id: 4911
},
{
	name: "MGT 6360",
	description: "GLOBAL OPERATIONS",
	teachers: [],
	id: 4912
},
{
	name: "MGT 6400",
	description: "PRICING ANALYTICS & REV",
	teachers: [],
	id: 4913
},
{
	name: "MGT 6401",
	description: "SUPPLY CHAIN MODELING",
	teachers: [],
	id: 4914
},
{
	name: "MGT 6450",
	description: "PROJECT MANAGEMENT",
	teachers: [],
	id: 4915
},
{
	name: "MGT 6451",
	description: "BUS INTELL & ANALYTICS",
	teachers: [],
	id: 4916
},
{
	name: "MGT 6500",
	description: "ANALYTIC TOOLS/DECISIONS",
	teachers: [],
	id: 4917
},
{
	name: "MGT 6501",
	description: "OPERATIONS MANAGEMENT",
	teachers: [],
	id: 4918
},
{
	name: "MGT 6502",
	description: "LEADING PEOPLE & ORG",
	teachers: [],
	id: 4919
},
{
	name: "MGT 6503",
	description: "MANAGING INFO RESOURCES",
	teachers: [],
	id: 4920
},
{
	name: "MGT 6504",
	description: "PRINCIPLES OF FINANCE",
	teachers: [],
	id: 4921
},
{
	name: "MGT 6505",
	description: "MARKETING MANAGEMENT",
	teachers: [],
	id: 4922
},
{
	name: "MGT 6506",
	description: "MANAGERIAL ECONOMICS",
	teachers: [],
	id: 4923
},
{
	name: "MGT 6507",
	description: "BUSINESS COMMUNICATIONS",
	teachers: [],
	id: 4924
},
{
	name: "MGT 6508",
	description: "STRATEGIC MANAGEMENT",
	teachers: [],
	id: 4925
},
{
	name: "MGT 6509",
	description: "LEGAL & ETHICAL BUSINESS",
	teachers: [],
	id: 4926
},
{
	name: "MGT 6510",
	description: "LEADER DEVELOP WORKSHOP",
	teachers: [],
	id: 4927
},
{
	name: "MGT 6510P",
	description: "LEADER DEVELOPMENT PREP",
	teachers: [],
	id: 4928
},
{
	name: "MGT 6600",
	description: "ANALYTICAL TOOLS",
	teachers: [],
	id: 4929
},
{
	name: "MGT 6663",
	description: "TECHNOLOGY STRATEGY",
	teachers: [],
	id: 4930
},
{
	name: "MGT 6664",
	description: "MANAGING INNOVATION",
	teachers: [],
	id: 4931
},
{
	name: "MGT 6725",
	description: "INFO SECURITY POLICIES",
	teachers: [],
	id: 4932
},
{
	name: "MGT 6726",
	description: "PRIVACY TECH POLICY LAW",
	teachers: [],
	id: 4933
},
{
	name: "MGT 6753",
	description: "PRIN-MGT FOR ENGINEERS",
	teachers: [],
	id: 4934
},
{
	name: "MGT 6769",
	description: "FIXED INCOME SECURITIES",
	teachers: [],
	id: 4935
},
{
	name: "MGT 6772",
	description: "MGT RESOURCES-TECH FIRMS",
	teachers: [],
	id: 4936
},
{
	name: "MGT 6780",
	description: "KNOWLEDGE MANAGEMENT",
	teachers: [],
	id: 4937
},
{
	name: "MGT 6785",
	description: "THE PRACTICE OF QCF",
	teachers: [],
	id: 4938
},
{
	name: "MGT 6789",
	description: "TECHNOLOGY VENTURES",
	teachers: [],
	id: 4939
},
{
	name: "MGT 6793",
	description: "ADV TOPICS IN QCF",
	teachers: [],
	id: 4940
},
{
	name: "MGT 6799",
	description: "LEGAL ISSUES-TECH TRANSF",
	teachers: [],
	id: 4941
},
{
	name: "MGT 6813",
	description: "ECONOMIC ANALYSIS",
	teachers: [],
	id: 4942
},
{
	name: "MGT 6830",
	description: "FUND OF INNOVATION I",
	teachers: [],
	id: 4943
},
{
	name: "MGT 6831",
	description: "FUND OF INNOVATION II",
	teachers: [],
	id: 4944
},
{
	name: "MGT 6832",
	description: "TECH COMMERCIALIZATION",
	teachers: [],
	id: 4945
},
{
	name: "MGT 6901",
	description: "CONSULTING",
	teachers: [],
	id: 4946
},
{
	name: "MGT 6XXX",
	description: "MANAGEMENT ELECTIVE",
	teachers: [],
	id: 4947
},
{
	name: "MGT 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 4948
},
{
	name: "MGT 7060",
	description: "THEORY OF FINANCE",
	teachers: [],
	id: 4949
},
{
	name: "MGT 7061",
	description: "EMPIRICAL FINANCE",
	teachers: [],
	id: 4950
},
{
	name: "MGT 7062",
	description: "CORPORATE RESTRUCTURING",
	teachers: [],
	id: 4951
},
{
	name: "MGT 7063",
	description: "INTERNATIONAL FINANCE",
	teachers: [],
	id: 4952
},
{
	name: "MGT 7064",
	description: "MICROECON THEORY FOR MGT",
	teachers: [],
	id: 4953
},
{
	name: "MGT 7101",
	description: "HUMAN RESOURCE MGT",
	teachers: [],
	id: 4954
},
{
	name: "MGT 7102",
	description: "ORG BEHAV RESEARCH METH",
	teachers: [],
	id: 4955
},
{
	name: "MGT 7105",
	description: "INDIVIDUAL BEHAV IN ORGS",
	teachers: [],
	id: 4956
},
{
	name: "MGT 7106",
	description: "GROUP DYNAMICS",
	teachers: [],
	id: 4957
},
{
	name: "MGT 7107",
	description: "ORGANIZATIONAL THEORY",
	teachers: [],
	id: 4958
},
{
	name: "MGT 7305",
	description: "MARKETING MGT & STRATEGY",
	teachers: [],
	id: 4959
},
{
	name: "MGT 7306",
	description: "BUYER BEHAVIOR",
	teachers: [],
	id: 4960
},
{
	name: "MGT 7308",
	description: "THEORY CONSTRUCTION",
	teachers: [],
	id: 4961
},
{
	name: "MGT 7320",
	description: "MARKETING SCIENCE",
	teachers: [],
	id: 4962
},
{
	name: "MGT 7350",
	description: "OPERATIONS STRATEGY I",
	teachers: [],
	id: 4963
},
{
	name: "MGT 7352",
	description: "OPERATION PLAN & CTRL I",
	teachers: [],
	id: 4964
},
{
	name: "MGT 7353",
	description: "OPERATION PLAN & CTRL II",
	teachers: [],
	id: 4965
},
{
	name: "MGT 7354",
	description: "RESEARCH METH-OPER MGT",
	teachers: [],
	id: 4966
},
{
	name: "MGT 7400",
	description: "PHD STRAT MGT RESEARCH I",
	teachers: [],
	id: 4967
},
{
	name: "MGT 7501",
	description: "MGM ECONOMETRIC MODELS",
	teachers: [],
	id: 4968
},
{
	name: "MGT 8803",
	description: "SPECIAL TOPICS IN MGT",
	teachers: [],
	id: 4969
},
{
	name: "MGT 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4970
},
{
	name: "MGT 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4971
},
{
	name: "MGT 8813",
	description: "SPECIAL TOPCIS",
	teachers: [],
	id: 4972
},
{
	name: "MGT 8853",
	description: "RESEARCH TOPIC-MARKETING",
	teachers: [],
	id: 4973
},
{
	name: "MGT 8873",
	description: "SPECIAL TOPICS-ORG BEHAV",
	teachers: [],
	id: 4974
},
{
	name: "MGT 8903",
	description: "SPECIAL PROB-MANAGEMENT",
	teachers: [],
	id: 4975
},
{
	name: "MGT 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 4976
},
{
	name: "MGT 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 4977
},
{
	name: "MGT 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 4978
},
{
	name: "ML 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4979
},
{
	name: "ML 1804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4980
},
{
	name: "ML 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4981
},
{
	name: "ML 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4982
},
{
	name: "ML 1815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4983
},
{
	name: "ML 1823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4984
},
{
	name: "ML 1824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4985
},
{
	name: "ML 1833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4986
},
{
	name: "ML 1834",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4987
},
{
	name: "ML 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4988
},
{
	name: "ML 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 4989
},
{
	name: "MLDR 6701",
	description: "FOUND FOREST BIOPRODUCTS",
	teachers: [],
	id: 4990
},
{
	name: "MLDR 6800",
	description: "MANUF LEADERSHIP CAPSTONE",
	teachers: [],
	id: 4991
},
{
	name: "MOT 6102",
	description: "ECON ANALY FOR MANAGERS",
	teachers: [],
	id: 4992
},
{
	name: "MOT 6103",
	description: "FIN & MANAGERIAL ACCOUNT",
	teachers: [],
	id: 4993
},
{
	name: "MOT 6104",
	description: "FINANCIAL MANAGEMENT",
	teachers: [],
	id: 4994
},
{
	name: "MOT 6105",
	description: "ANALYTICAL TOOLS",
	teachers: [],
	id: 4995
},
{
	name: "MOT 6106",
	description: "TECHNOLOGICAL INNOVATION",
	teachers: [],
	id: 4996
},
{
	name: "MOT 6107",
	description: "TECH STRATEGIES-INFO SYS",
	teachers: [],
	id: 4997
},
{
	name: "MOT 6109",
	description: "MANAGING PEOPLE",
	teachers: [],
	id: 4998
},
{
	name: "MOT 6110",
	description: "TECH & TRANSFORMATION",
	teachers: [],
	id: 4999
},
{
	name: "MOT 6111",
	description: "ORG TRANSFORMATION METH",
	teachers: [],
	id: 5000
},
{
	name: "MOT 6112",
	description: "MARKETING-TECH ENVIRON",
	teachers: [],
	id: 5001
},
{
	name: "MOT 6114",
	description: "SEMINAR IN MOT",
	teachers: [],
	id: 5002
},
{
	name: "MOT 6115",
	description: "TECHNOLOGY FORECASTING",
	teachers: [],
	id: 5003
},
{
	name: "MOT 6116",
	description: "STRATEGY IN MOT",
	teachers: [],
	id: 5004
},
{
	name: "MOT 6122",
	description: "MOT PROJECT III",
	teachers: [],
	id: 5005
},
{
	name: "MOT 6124",
	description: "BUS & LEADERSHIP SKILLS",
	teachers: [],
	id: 5006
},
{
	name: "MOT 6125",
	description: "CREATING TECH VENTURES",
	teachers: [],
	id: 5007
},
{
	name: "MOT 6126",
	description: "INT'L ISSUES IN MOT",
	teachers: [],
	id: 5008
},
{
	name: "MOT 6127",
	description: "BUILDING TECH VENTURES",
	teachers: [],
	id: 5009
},
{
	name: "MOT 6128",
	description: "VENTURE FINANCING",
	teachers: [],
	id: 5010
},
{
	name: "MOT 6129",
	description: "INT'L BUSINESS & FINANCE",
	teachers: [],
	id: 5011
},
{
	name: "MOT 6130",
	description: "MOT PROJECT I",
	teachers: [],
	id: 5012
},
{
	name: "MOT 6131",
	description: "MOT PROJECT II",
	teachers: [],
	id: 5013
},
{
	name: "MOT 6132",
	description: "MOT PROJECT I",
	teachers: [],
	id: 5014
},
{
	name: "MOT 6133",
	description: "ETHICAL DECISION MAKING",
	teachers: [],
	id: 5015
},
{
	name: "MOT 6134",
	description: "MOT PROJECT II",
	teachers: [],
	id: 5016
},
{
	name: "MP 4750",
	description: "DIAGNOSTIC IMAGING PHYS",
	teachers: [],
	id: 5017
},
{
	name: "MP 4XXX",
	description: "MEDICAL PHYSICS ELECTIVE",
	teachers: [],
	id: 5018
},
{
	name: "MP 6011",
	description: "SEMINAR IN MEDICAL PHYSICS I",
	teachers: [],
	id: 5019
},
{
	name: "MP 6012",
	description: "SEMINAR IN MEDICAL PHYSICS II",
	teachers: [],
	id: 5020
},
{
	name: "MP 6101",
	description: "NUCLEAR MEDICINE PHYSICS",
	teachers: [],
	id: 5021
},
{
	name: "MP 6201",
	description: "RADIATION THERAPY PHYS",
	teachers: [],
	id: 5022
},
{
	name: "MP 6203",
	description: "RAD THRPY TREAT PLAN LAB",
	teachers: [],
	id: 5023
},
{
	name: "MP 6204",
	description: "RADIATION THERAPY PHYS",
	teachers: [],
	id: 5024
},
{
	name: "MP 6300",
	description: "RADIOLOGICAL ANATOMY",
	teachers: [],
	id: 5025
},
{
	name: "MP 6401",
	description: "MEDICAL HEALTH PHYSICS",
	teachers: [],
	id: 5026
},
{
	name: "MP 6402",
	description: "RADIATION DOSIMETRY",
	teachers: [],
	id: 5027
},
{
	name: "MP 6403",
	description: "MONTE CARLO IN MED PHYS",
	teachers: [],
	id: 5028
},
{
	name: "MP 6405",
	description: "RAD PROTECTION&DOSIMETRY",
	teachers: [],
	id: 5029
},
{
	name: "MP 6407",
	description: "RADIATION BIOL& ONCOLOGY",
	teachers: [],
	id: 5030
},
{
	name: "MP 6756",
	description: "RADIATION PHYSICS",
	teachers: [],
	id: 5031
},
{
	name: "MP 6757",
	description: "RADIATION DETECTION",
	teachers: [],
	id: 5032
},
{
	name: "MP 6759",
	description: "RADIATION SHIELDING",
	teachers: [],
	id: 5033
},
{
	name: "MP 6XXX",
	description: "MEDICAL PHYSICS ELECTIVE",
	teachers: [],
	id: 5034
},
{
	name: "MP 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5035
},
{
	name: "MP 8011",
	description: "SEM-MEDICAL PHYSICS I",
	teachers: [],
	id: 5036
},
{
	name: "MP 8012",
	description: "SEM-MEDICAL PHYSICS II",
	teachers: [],
	id: 5037
},
{
	name: "MP 8101",
	description: "CLINICAL INTERN-NUCL MED",
	teachers: [],
	id: 5038
},
{
	name: "MP 8102",
	description: "CLINIC INTERN-DIAG IMAG",
	teachers: [],
	id: 5039
},
{
	name: "MP 8103",
	description: "CLINIC INTERN-RAD THERPY",
	teachers: [],
	id: 5040
},
{
	name: "MP 8104",
	description: "CLINIC ROTATION-MED PHYS",
	teachers: [],
	id: 5041
},
{
	name: "MP 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5042
},
{
	name: "MP 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5043
},
{
	name: "MP 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5044
},
{
	name: "MP 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5045
},
{
	name: "MP 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5046
},
{
	name: "MP 8806",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5047
},
{
	name: "MP 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5048
},
{
	name: "MP 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5049
},
{
	name: "MP 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5050
},
{
	name: "MP 8904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5051
},
{
	name: "MP 8905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5052
},
{
	name: "MP 8906",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5053
},
{
	name: "MP 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5054
},
{
	name: "MSE 1001",
	description: "INTRO TO ENGINEERING",
	teachers: [],
	id: 5055
},
{
	name: "MSE 1111",
	description: "INTRODUCTION TO MSE",
	teachers: [],
	id: 5056
},
{
	name: "MSE 1750",
	description: "INTRO TO BIOENGINEERING",
	teachers: [],
	id: 5057
},
{
	name: "MSE 1801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5058
},
{
	name: "MSE 1802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5059
},
{
	name: "MSE 1803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5060
},
{
	name: "MSE 1XXX",
	description: "MATE SCI ENGR ELECTIVE",
	teachers: [],
	id: 5061
},
{
	name: "MSE 2001",
	description: "PRIN&APPL-ENGR MATERIALS",
	teachers: [],
	id: 5062
},
{
	name: "MSE 2020",
	description: "CHARACTERIZATION-MATLS",
	teachers: [],
	id: 5063
},
{
	name: "MSE 2021",
	description: "MATLS CHARACTERIZATION",
	teachers: [],
	id: 5064
},
{
	name: "MSE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5065
},
{
	name: "MSE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5066
},
{
	name: "MSE 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5067
},
{
	name: "MSE 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5068
},
{
	name: "MSE 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5069
},
{
	name: "MSE 2XXX",
	description: "MATE SCI ENGR ELECTIVE",
	teachers: [],
	id: 5070
},
{
	name: "MSE 3000",
	description: "CHEM THERMODYN-MATERIALS",
	teachers: [],
	id: 5071
},
{
	name: "MSE 3001",
	description: "CHEMICAL THERMO-MATERIAL",
	teachers: [],
	id: 5072
},
{
	name: "MSE 3002",
	description: "STRCT TRANS-MET,CER&POLY",
	teachers: [],
	id: 5073
},
{
	name: "MSE 3003",
	description: "MECH BEHAVIOR-MATERIALS",
	teachers: [],
	id: 5074
},
{
	name: "MSE 3005",
	description: "MECH BEHAVIOR-MATERIALS",
	teachers: [],
	id: 5075
},
{
	name: "MSE 3012",
	description: "THERMAL&TRANSPORT PROPS",
	teachers: [],
	id: 5076
},
{
	name: "MSE 3015",
	description: "ELEC,OPTICAL&MAGNET PROP",
	teachers: [],
	id: 5077
},
{
	name: "MSE 3020",
	description: "MATERIALS LABORATORY",
	teachers: [],
	id: 5078
},
{
	name: "MSE 3021",
	description: "MATERIALS LABORATORY I",
	teachers: [],
	id: 5079
},
{
	name: "MSE 3025",
	description: "STATS&NUMERICAL METHODS",
	teachers: [],
	id: 5080
},
{
	name: "MSE 3210",
	description: "TRANSPORT PHENOMENA",
	teachers: [],
	id: 5081
},
{
	name: "MSE 3220",
	description: "OPERATIONS & MGT METHODS",
	teachers: [],
	id: 5082
},
{
	name: "MSE 3225",
	description: "RHEOLOGY",
	teachers: [],
	id: 5083
},
{
	name: "MSE 3230",
	description: "POLYMER & FIBER PROCESS",
	teachers: [],
	id: 5084
},
{
	name: "MSE 3720",
	description: "INTRO POLY/FIB ENTERPRIS",
	teachers: [],
	id: 5085
},
{
	name: "MSE 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5086
},
{
	name: "MSE 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5087
},
{
	name: "MSE 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5088
},
{
	name: "MSE 3XXX",
	description: "MATE SCI ENGR ELECTIVE",
	teachers: [],
	id: 5089
},
{
	name: "MSE 4002",
	description: "CER MATE-PROP,PROCES&APP",
	teachers: [],
	id: 5090
},
{
	name: "MSE 4004",
	description: "MATERIALS-ELECTRONIC APP",
	teachers: [],
	id: 5091
},
{
	name: "MSE 4006",
	description: "PROCESS&APPS-ENGR ALLOYS",
	teachers: [],
	id: 5092
},
{
	name: "MSE 4010",
	description: "ENVIRON DEGRADATION",
	teachers: [],
	id: 5093
},
{
	name: "MSE 4020",
	description: "DESIGN WITH MATERIALS I",
	teachers: [],
	id: 5094
},
{
	name: "MSE 4021",
	description: "DESIGN WITH MATERIALS II",
	teachers: [],
	id: 5095
},
{
	name: "MSE 4022",
	description: "MATERIALS LABORATORY II",
	teachers: [],
	id: 5096
},
{
	name: "MSE 4025",
	description: "FIBER PRODUCT MFG",
	teachers: [],
	id: 5097
},
{
	name: "MSE 4026",
	description: "PRODUCT TEST EVALUATION",
	teachers: [],
	id: 5098
},
{
	name: "MSE 4100",
	description: "CHEM APPL FIBER MATERIAL",
	teachers: [],
	id: 5099
},
{
	name: "MSE 4122",
	description: "FIBER CHEMISTRY LAB",
	teachers: [],
	id: 5100
},
{
	name: "MSE 4140",
	description: "POLYMER PHYSICS",
	teachers: [],
	id: 5101
},
{
	name: "MSE 4315",
	description: "NONDESTRUCTIVE EVAL",
	teachers: [],
	id: 5102
},
{
	name: "MSE 4320",
	description: "ELECTRONIC PKG & DESIGN",
	teachers: [],
	id: 5103
},
{
	name: "MSE 4325",
	description: "THIN FILM MATERIALS SCI",
	teachers: [],
	id: 5104
},
{
	name: "MSE 4330",
	description: "FUND NANOMATS&NANOSTRUCS",
	teachers: [],
	id: 5105
},
{
	name: "MSE 4335",
	description: "SOFT NANO BIO MATERIALS",
	teachers: [],
	id: 5106
},
{
	name: "MSE 4410",
	description: "CAPSTONE ENGR DESIGN I",
	teachers: [],
	id: 5107
},
{
	name: "MSE 4420",
	description: "CAPSTONE ENGR DESIGN II",
	teachers: [],
	id: 5108
},
{
	name: "MSE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5109
},
{
	name: "MSE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5110
},
{
	name: "MSE 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 5111
},
{
	name: "MSE 4751",
	description: "INTRO TO BIOMATERIALS",
	teachers: [],
	id: 5112
},
{
	name: "MSE 4754",
	description: "ELEC PACKAGING ASSEMBLY",
	teachers: [],
	id: 5113
},
{
	name: "MSE 4755",
	description: "PACKAGING SUBSTRATE FAB",
	teachers: [],
	id: 5114
},
{
	name: "MSE 4761",
	description: "INDUSTRIAL CTRLS & MFG",
	teachers: [],
	id: 5115
},
{
	name: "MSE 4766",
	description: "NANOSCALE DEVICES",
	teachers: [],
	id: 5116
},
{
	name: "MSE 4775",
	description: "POLYMER SCIENCE & ENGR I",
	teachers: [],
	id: 5117
},
{
	name: "MSE 4776",
	description: "POLYMER SCIENCE& ENGR II",
	teachers: [],
	id: 5118
},
{
	name: "MSE 4777",
	description: "INTRO-POLYMER SCI & ENGR",
	teachers: [],
	id: 5119
},
{
	name: "MSE 4790",
	description: "MATERIALS SELECT& DESIGN",
	teachers: [],
	id: 5120
},
{
	name: "MSE 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 5121
},
{
	name: "MSE 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 5122
},
{
	name: "MSE 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 5123
},
{
	name: "MSE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5124
},
{
	name: "MSE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5125
},
{
	name: "MSE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5126
},
{
	name: "MSE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5127
},
{
	name: "MSE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5128
},
{
	name: "MSE 4XXX",
	description: "MATE SCI ENGR ELECTIVE",
	teachers: [],
	id: 5129
},
{
	name: "MSE 6001",
	description: "WRITTEN & VISUAL COMM",
	teachers: [],
	id: 5130
},
{
	name: "MSE 6010",
	description: "FUNCTIONAL MATERIALS",
	teachers: [],
	id: 5131
},
{
	name: "MSE 6105",
	description: "DIFFRACTION STUDIES",
	teachers: [],
	id: 5132
},
{
	name: "MSE 6110",
	description: "TRANS ELECTRON MICROSCOP",
	teachers: [],
	id: 5133
},
{
	name: "MSE 6120",
	description: "QUANT CHARACT-MICROSTRUC",
	teachers: [],
	id: 5134
},
{
	name: "MSE 6130",
	description: "SURFACE ANALYSIS",
	teachers: [],
	id: 5135
},
{
	name: "MSE 6210",
	description: "DEFECTS",
	teachers: [],
	id: 5136
},
{
	name: "MSE 6310",
	description: "THERMO&KINETIC-TRANSFORM",
	teachers: [],
	id: 5137
},
{
	name: "MSE 6401",
	description: "THERMODYNAMICS OF MATLS",
	teachers: [],
	id: 5138
},
{
	name: "MSE 6402",
	description: "CRYS STRUCT AND DEFECTS",
	teachers: [],
	id: 5139
},
{
	name: "MSE 6403",
	description: "KINETICS OF PHASE TRANS",
	teachers: [],
	id: 5140
},
{
	name: "MSE 6404",
	description: "SCATTERING THEORY",
	teachers: [],
	id: 5141
},
{
	name: "MSE 6405",
	description: "ADVANCED NANOMATERIALS",
	teachers: [],
	id: 5142
},
{
	name: "MSE 6406",
	description: "CORROSION OF MATERIALS",
	teachers: [],
	id: 5143
},
{
	name: "MSE 6407",
	description: "BIOLOGICAL PROPERTIES",
	teachers: [],
	id: 5144
},
{
	name: "MSE 6500",
	description: "THERMO OF MATERIALS",
	teachers: [],
	id: 5145
},
{
	name: "MSE 6501",
	description: "PHASE EQUILIBRIA",
	teachers: [],
	id: 5146
},
{
	name: "MSE 6502",
	description: "THERMO ANALYSIS",
	teachers: [],
	id: 5147
},
{
	name: "MSE 6510",
	description: "POLYMER-ELEC&PHOTO APP I",
	teachers: [],
	id: 5148
},
{
	name: "MSE 6600",
	description: "ADV POLYMER PROCESSING",
	teachers: [],
	id: 5149
},
{
	name: "MSE 6601",
	description: "NANOCOMPOSITES",
	teachers: [],
	id: 5150
},
{
	name: "MSE 6602",
	description: "TENSOR ANAL & MATH TECH",
	teachers: [],
	id: 5151
},
{
	name: "MSE 6603",
	description: "NATURAL POLYMERS",
	teachers: [],
	id: 5152
},
{
	name: "MSE 6610",
	description: "BIOMATERIALS",
	teachers: [],
	id: 5153
},
{
	name: "MSE 6620",
	description: "ADVANCED CORROSION",
	teachers: [],
	id: 5154
},
{
	name: "MSE 6730",
	description: "MAT SCI CELL COMPONENTS",
	teachers: [],
	id: 5155
},
{
	name: "MSE 6750",
	description: "PREP& REACTIONS-POLYMERS",
	teachers: [],
	id: 5156
},
{
	name: "MSE 6751",
	description: "PHYS CHEM-POLY SOLUTIONS",
	teachers: [],
	id: 5157
},
{
	name: "MSE 6752",
	description: "POLYMER CHARACTERIZATION",
	teachers: [],
	id: 5158
},
{
	name: "MSE 6754",
	description: "ENGR COMMUNICATION",
	teachers: [],
	id: 5159
},
{
	name: "MSE 6755",
	description: "THEORETICAL CHEM-POLYMER",
	teachers: [],
	id: 5160
},
{
	name: "MSE 6759",
	description: "MATE-ENVIR CONSCIOUS DGN",
	teachers: [],
	id: 5161
},
{
	name: "MSE 6768",
	description: "POLYMER STRUCTURE& PROPS",
	teachers: [],
	id: 5162
},
{
	name: "MSE 6774",
	description: "BIOMATERIAL:STRUCT&FUNCT",
	teachers: [],
	id: 5163
},
{
	name: "MSE 6776",
	description: "MICROELEC SYS PACKAGING",
	teachers: [],
	id: 5164
},
{
	name: "MSE 6777",
	description: "ADVANCED BIOMATERIALS",
	teachers: [],
	id: 5165
},
{
	name: "MSE 6795",
	description: "MATH,STAT&COMP TECH-MATE",
	teachers: [],
	id: 5166
},
{
	name: "MSE 6796",
	description: "STRUCT-PROPERTY RELATION",
	teachers: [],
	id: 5167
},
{
	name: "MSE 6797",
	description: "THERM&KINETIC MICROSTRUC",
	teachers: [],
	id: 5168
},
{
	name: "MSE 6XXX",
	description: "MATE SCI ENGR ELECTIVE",
	teachers: [],
	id: 5169
},
{
	name: "MSE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5170
},
{
	name: "MSE 7010",
	description: "ELECTROCERAMICS",
	teachers: [],
	id: 5171
},
{
	name: "MSE 7110",
	description: "TRAN ELECTRON MICORSCOPY",
	teachers: [],
	id: 5172
},
{
	name: "MSE 7140",
	description: "IMPEDANCE&DIELEC SPECTRO",
	teachers: [],
	id: 5173
},
{
	name: "MSE 7210",
	description: "DISLOCAT&DEFORM MECHANIC",
	teachers: [],
	id: 5174
},
{
	name: "MSE 7420",
	description: "SOLIDIFICATION PROCESS",
	teachers: [],
	id: 5175
},
{
	name: "MSE 7510",
	description: "POLYM-ELEC&PHOTO APP II",
	teachers: [],
	id: 5176
},
{
	name: "MSE 7771",
	description: "MECH-POLYMER SOLID&FLUID",
	teachers: [],
	id: 5177
},
{
	name: "MSE 7772",
	description: "FUND-FRACTURE MECHANICS",
	teachers: [],
	id: 5178
},
{
	name: "MSE 7773",
	description: "ADV FRACTURE MECHANICS",
	teachers: [],
	id: 5179
},
{
	name: "MSE 7774",
	description: "FATIGUE-MATERIALS&STRUCT",
	teachers: [],
	id: 5180
},
{
	name: "MSE 7775",
	description: "FRACT&FATIGUE-STRUCTURES",
	teachers: [],
	id: 5181
},
{
	name: "MSE 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 5182
},
{
	name: "MSE 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 5183
},
{
	name: "MSE 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 5184
},
{
	name: "MSE 8001",
	description: "SEMINAR",
	teachers: [],
	id: 5185
},
{
	name: "MSE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5186
},
{
	name: "MSE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5187
},
{
	name: "MSE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5188
},
{
	name: "MSE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5189
},
{
	name: "MSE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5190
},
{
	name: "MSE 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5191
},
{
	name: "MSE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 5192
},
{
	name: "MSE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5193
},
{
	name: "MSE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5194
},
{
	name: "MSE 9999",
	description: "GT-PKU",
	teachers: [],
	id: 5195
},
{
	name: "MSL 1001",
	description: "LEADERSHIP&PERSONAL DEV",
	teachers: [],
	id: 5196
},
{
	name: "MSL 1002",
	description: "INTR TACTICAL LEADERSHIP",
	teachers: [],
	id: 5197
},
{
	name: "MSL 1XXX",
	description: "MILITARY SCI ELECTIVE",
	teachers: [],
	id: 5198
},
{
	name: "MSL 2001",
	description: "INNOVATIVE TEAM LEADRSHP",
	teachers: [],
	id: 5199
},
{
	name: "MSL 2002",
	description: "FOUND TATICAL LEADERSHIP",
	teachers: [],
	id: 5200
},
{
	name: "MSL 2XXX",
	description: "MILITARY SCI ELECTIVE",
	teachers: [],
	id: 5201
},
{
	name: "MSL 3001",
	description: "ADAPT TACTICAL LEADRSHP",
	teachers: [],
	id: 5202
},
{
	name: "MSL 3002",
	description: "LEADRSHP-CHANGING ENVIRO",
	teachers: [],
	id: 5203
},
{
	name: "MSL 3XXX",
	description: "MILITARY SCI ELECTIVE",
	teachers: [],
	id: 5204
},
{
	name: "MSL 4001",
	description: "DEVELOP ADAPTIVE LEADERS",
	teachers: [],
	id: 5205
},
{
	name: "MSL 4002",
	description: "LEADERSHIP-COMPLEX WORLD",
	teachers: [],
	id: 5206
},
{
	name: "MSL 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5207
},
{
	name: "MSL 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5208
},
{
	name: "MSL 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5209
},
{
	name: "MSL 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5210
},
{
	name: "MSL 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5211
},
{
	name: "MSL 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5212
},
{
	name: "MSL 4XXX",
	description: "MILITARY SCI ELECTIVE",
	teachers: [],
	id: 5213
},
{
	name: "MUSI 1008",
	description: "MARCHING BAND",
	teachers: [],
	id: 5214
},
{
	name: "MUSI 1009",
	description: "PEP BAND",
	teachers: [],
	id: 5215
},
{
	name: "MUSI 1102",
	description: "CONCERT BAND",
	teachers: [],
	id: 5216
},
{
	name: "MUSI 1103",
	description: "CONCERT BAND",
	teachers: [],
	id: 5217
},
{
	name: "MUSI 1112",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5218
},
{
	name: "MUSI 1113",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5219
},
{
	name: "MUSI 1114",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5220
},
{
	name: "MUSI 1201",
	description: "CHORALE",
	teachers: [],
	id: 5221
},
{
	name: "MUSI 1202",
	description: "CHORALE",
	teachers: [],
	id: 5222
},
{
	name: "MUSI 1203",
	description: "CHORALE",
	teachers: [],
	id: 5223
},
{
	name: "MUSI 1211",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5224
},
{
	name: "MUSI 1212",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5225
},
{
	name: "MUSI 1213",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5226
},
{
	name: "MUSI 1221",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5227
},
{
	name: "MUSI 1222",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5228
},
{
	name: "MUSI 1223",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5229
},
{
	name: "MUSI 1301",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5230
},
{
	name: "MUSI 1302",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5231
},
{
	name: "MUSI 1303",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5232
},
{
	name: "MUSI 1401",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5233
},
{
	name: "MUSI 1402",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5234
},
{
	name: "MUSI 1403",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5235
},
{
	name: "MUSI 1501",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5236
},
{
	name: "MUSI 1502",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5237
},
{
	name: "MUSI 1503",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5238
},
{
	name: "MUSI 1601",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5239
},
{
	name: "MUSI 1602",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5240
},
{
	name: "MUSI 1603",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5241
},
{
	name: "MUSI 2008",
	description: "MARCHING BAND",
	teachers: [],
	id: 5242
},
{
	name: "MUSI 2009",
	description: "PEP BAND",
	teachers: [],
	id: 5243
},
{
	name: "MUSI 2010",
	description: "FUNDS OF MUSICIANSHIP I",
	teachers: [],
	id: 5244
},
{
	name: "MUSI 2011",
	description: "FUNDS OF MUSICIANSHIP II",
	teachers: [],
	id: 5245
},
{
	name: "MUSI 2102",
	description: "CONCERT BAND",
	teachers: [],
	id: 5246
},
{
	name: "MUSI 2103",
	description: "CONCERT BAND",
	teachers: [],
	id: 5247
},
{
	name: "MUSI 2112",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5248
},
{
	name: "MUSI 2113",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5249
},
{
	name: "MUSI 2201",
	description: "CHORALE",
	teachers: [],
	id: 5250
},
{
	name: "MUSI 2202",
	description: "CHORALE",
	teachers: [],
	id: 5251
},
{
	name: "MUSI 2203",
	description: "CHORALE",
	teachers: [],
	id: 5252
},
{
	name: "MUSI 2211",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5253
},
{
	name: "MUSI 2212",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5254
},
{
	name: "MUSI 2213",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5255
},
{
	name: "MUSI 2221",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5256
},
{
	name: "MUSI 2222",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5257
},
{
	name: "MUSI 2223",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5258
},
{
	name: "MUSI 2301",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5259
},
{
	name: "MUSI 2302",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5260
},
{
	name: "MUSI 2303",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5261
},
{
	name: "MUSI 2401",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5262
},
{
	name: "MUSI 2402",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5263
},
{
	name: "MUSI 2403",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5264
},
{
	name: "MUSI 2501",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5265
},
{
	name: "MUSI 2502",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5266
},
{
	name: "MUSI 2503",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5267
},
{
	name: "MUSI 2521",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5268
},
{
	name: "MUSI 2522",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5269
},
{
	name: "MUSI 2600",
	description: "MUSIC THEORY I",
	teachers: [],
	id: 5270
},
{
	name: "MUSI 2601",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5271
},
{
	name: "MUSI 2602",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5272
},
{
	name: "MUSI 2603",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5273
},
{
	name: "MUSI 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5274
},
{
	name: "MUSI 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5275
},
{
	name: "MUSI 3008",
	description: "MARCHING BAND",
	teachers: [],
	id: 5276
},
{
	name: "MUSI 3009",
	description: "PEP BAND",
	teachers: [],
	id: 5277
},
{
	name: "MUSI 3018",
	description: "MARCHING BAND",
	teachers: [],
	id: 5278
},
{
	name: "MUSI 3019",
	description: "PEP BAND",
	teachers: [],
	id: 5279
},
{
	name: "MUSI 3102",
	description: "CONCERT BAND",
	teachers: [],
	id: 5280
},
{
	name: "MUSI 3103",
	description: "CONCERT BAND",
	teachers: [],
	id: 5281
},
{
	name: "MUSI 3112",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5282
},
{
	name: "MUSI 3113",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5283
},
{
	name: "MUSI 3121",
	description: "CONCERT BAND",
	teachers: [],
	id: 5284
},
{
	name: "MUSI 3131",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5285
},
{
	name: "MUSI 3201",
	description: "CHORALE",
	teachers: [],
	id: 5286
},
{
	name: "MUSI 3202",
	description: "CHORALE",
	teachers: [],
	id: 5287
},
{
	name: "MUSI 3203",
	description: "CHORALE",
	teachers: [],
	id: 5288
},
{
	name: "MUSI 3211",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5289
},
{
	name: "MUSI 3212",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5290
},
{
	name: "MUSI 3213",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5291
},
{
	name: "MUSI 3221",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5292
},
{
	name: "MUSI 3222",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5293
},
{
	name: "MUSI 3223",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5294
},
{
	name: "MUSI 3231",
	description: "CHAMBER CHOIR",
	teachers: [],
	id: 5295
},
{
	name: "MUSI 3241",
	description: "CHORALE",
	teachers: [],
	id: 5296
},
{
	name: "MUSI 3251",
	description: "GLEE CLUB",
	teachers: [],
	id: 5297
},
{
	name: "MUSI 3261",
	description: "WOMEN'S CHOIR",
	teachers: [],
	id: 5298
},
{
	name: "MUSI 3301",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5299
},
{
	name: "MUSI 3302",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5300
},
{
	name: "MUSI 3303",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5301
},
{
	name: "MUSI 3311",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5302
},
{
	name: "MUSI 3321",
	description: "JAZZ COMBO",
	teachers: [],
	id: 5303
},
{
	name: "MUSI 3401",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5304
},
{
	name: "MUSI 3402",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5305
},
{
	name: "MUSI 3403",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5306
},
{
	name: "MUSI 3450",
	description: "SURVEY-MUSIC TECHNOLOGY",
	teachers: [],
	id: 5307
},
{
	name: "MUSI 3500",
	description: "INTRO-COMPUTER MUSIC",
	teachers: [],
	id: 5308
},
{
	name: "MUSI 3501",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5309
},
{
	name: "MUSI 3502",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5310
},
{
	name: "MUSI 3503",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5311
},
{
	name: "MUSI 3511",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5312
},
{
	name: "MUSI 3521",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5313
},
{
	name: "MUSI 3522",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5314
},
{
	name: "MUSI 3531",
	description: "NEW MUSIC ENSEMBLE",
	teachers: [],
	id: 5315
},
{
	name: "MUSI 3551",
	description: "ROCK AND POP ENSEMBLE",
	teachers: [],
	id: 5316
},
{
	name: "MUSI 3600",
	description: "MUSIC THEORY II",
	teachers: [],
	id: 5317
},
{
	name: "MUSI 3601",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5318
},
{
	name: "MUSI 3602",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5319
},
{
	name: "MUSI 3603",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5320
},
{
	name: "MUSI 3610",
	description: "COMPOSERS 1500-1800",
	teachers: [],
	id: 5321
},
{
	name: "MUSI 3611",
	description: "SYMPHONY ORCHESTRA",
	teachers: [],
	id: 5322
},
{
	name: "MUSI 3620",
	description: "COMPOSERS 1800-PRESENT",
	teachers: [],
	id: 5323
},
{
	name: "MUSI 3630",
	description: "HISTORY OF JAZZ",
	teachers: [],
	id: 5324
},
{
	name: "MUSI 3710",
	description: "IND APPLIED INSTRUCTION",
	teachers: [],
	id: 5325
},
{
	name: "MUSI 3720",
	description: "IND APPLIED INSTRUCTION",
	teachers: [],
	id: 5326
},
{
	name: "MUSI 3730",
	description: "IND APPLIED INSTRUCTION",
	teachers: [],
	id: 5327
},
{
	name: "MUSI 3740",
	description: "IND APPLIED INSTRUCTION",
	teachers: [],
	id: 5328
},
{
	name: "MUSI 3750",
	description: "IND APPLIED INSTRUCTION",
	teachers: [],
	id: 5329
},
{
	name: "MUSI 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5330
},
{
	name: "MUSI 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5331
},
{
	name: "MUSI 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5332
},
{
	name: "MUSI 4008",
	description: "MARCHING BAND",
	teachers: [],
	id: 5333
},
{
	name: "MUSI 4009",
	description: "PEP BAND",
	teachers: [],
	id: 5334
},
{
	name: "MUSI 4102",
	description: "CONCERT BAND",
	teachers: [],
	id: 5335
},
{
	name: "MUSI 4103",
	description: "CONCERT BAND",
	teachers: [],
	id: 5336
},
{
	name: "MUSI 4112",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5337
},
{
	name: "MUSI 4113",
	description: "SYMPHONIC BAND",
	teachers: [],
	id: 5338
},
{
	name: "MUSI 4201",
	description: "CHORALE",
	teachers: [],
	id: 5339
},
{
	name: "MUSI 4202",
	description: "CHORALE",
	teachers: [],
	id: 5340
},
{
	name: "MUSI 4203",
	description: "CHORALE",
	teachers: [],
	id: 5341
},
{
	name: "MUSI 4211",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5342
},
{
	name: "MUSI 4212",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5343
},
{
	name: "MUSI 4213",
	description: "VOCAL ENSEMBLE",
	teachers: [],
	id: 5344
},
{
	name: "MUSI 4221",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5345
},
{
	name: "MUSI 4222",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5346
},
{
	name: "MUSI 4223",
	description: "MEN'S GLEE CLUB",
	teachers: [],
	id: 5347
},
{
	name: "MUSI 4301",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5348
},
{
	name: "MUSI 4302",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5349
},
{
	name: "MUSI 4303",
	description: "JAZZ ENSEMBLE",
	teachers: [],
	id: 5350
},
{
	name: "MUSI 4401",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5351
},
{
	name: "MUSI 4402",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5352
},
{
	name: "MUSI 4403",
	description: "CHAMBER ENSEMBLE",
	teachers: [],
	id: 5353
},
{
	name: "MUSI 4450",
	description: "INTEGRAT MUS MULTIMEDIA",
	teachers: [],
	id: 5354
},
{
	name: "MUSI 4455",
	description: "STREAMING MEDIA",
	teachers: [],
	id: 5355
},
{
	name: "MUSI 4501",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5356
},
{
	name: "MUSI 4502",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5357
},
{
	name: "MUSI 4503",
	description: "PERCUSSION ENSEMBLE",
	teachers: [],
	id: 5358
},
{
	name: "MUSI 4521",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5359
},
{
	name: "MUSI 4522",
	description: "ELEC PERCUSS STUDIO/ENS.",
	teachers: [],
	id: 5360
},
{
	name: "MUSI 4601",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5361
},
{
	name: "MUSI 4602",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5362
},
{
	name: "MUSI 4603",
	description: "UNIVERSITY ORCHESTRA",
	teachers: [],
	id: 5363
},
{
	name: "MUSI 4630",
	description: "MUSIC RECORDING & MIXING",
	teachers: [],
	id: 5364
},
{
	name: "MUSI 4650",
	description: "MUSIC & SOUND DESIGN",
	teachers: [],
	id: 5365
},
{
	name: "MUSI 4670",
	description: "MUSIC INTERFACE DESIGN",
	teachers: [],
	id: 5366
},
{
	name: "MUSI 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5367
},
{
	name: "MUSI 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5368
},
{
	name: "MUSI 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5369
},
{
	name: "MUSI 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5370
},
{
	name: "MUSI 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5371
},
{
	name: "MUSI 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5372
},
{
	name: "MUSI 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5373
},
{
	name: "MUSI 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5374
},
{
	name: "MUSI 6001",
	description: "MUS PERCEPTION&COGNITION",
	teachers: [],
	id: 5375
},
{
	name: "MUSI 6002",
	description: "INTERACTIVE MUSIC",
	teachers: [],
	id: 5376
},
{
	name: "MUSI 6003",
	description: "MUS TECH HIST&REPERTOIRE",
	teachers: [],
	id: 5377
},
{
	name: "MUSI 6004",
	description: "TECHNOLOGY ENSEMBLE",
	teachers: [],
	id: 5378
},
{
	name: "MUSI 6005",
	description: "MUSIC ENSEMBLE",
	teachers: [],
	id: 5379
},
{
	name: "MUSI 6103",
	description: "MUSIC RECORDING & MIXING",
	teachers: [],
	id: 5380
},
{
	name: "MUSI 6104",
	description: "INTEGRAT MUSI-MULTIMEDIA",
	teachers: [],
	id: 5381
},
{
	name: "MUSI 6105",
	description: "DIG MEDIA PROD&MASTERING",
	teachers: [],
	id: 5382
},
{
	name: "MUSI 6201",
	description: "COMPUTATIONAL MUSIC ANLY",
	teachers: [],
	id: 5383
},
{
	name: "MUSI 6202",
	description: "DIG SIGNAL PROCESS-MUSIC",
	teachers: [],
	id: 5384
},
{
	name: "MUSI 6203",
	description: "PROJ STUDIO-MUSIC TECH",
	teachers: [],
	id: 5385
},
{
	name: "MUSI 6301",
	description: "MUSIC INTERFACE DESIGN",
	teachers: [],
	id: 5386
},
{
	name: "MUSI 6302",
	description: "THE MUSICAL MIND",
	teachers: [],
	id: 5387
},
{
	name: "MUSI 6303",
	description: "NETWORK MUSIC",
	teachers: [],
	id: 5388
},
{
	name: "MUSI 6304",
	description: "COMP MUSIC COMPOSITION",
	teachers: [],
	id: 5389
},
{
	name: "MUSI 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5390
},
{
	name: "MUSI 7100",
	description: "MUSIC TECH RESEARCH LAB",
	teachers: [],
	id: 5391
},
{
	name: "MUSI 7998",
	description: "PREP-DOCT QUAL PAPER",
	teachers: [],
	id: 5392
},
{
	name: "MUSI 7999",
	description: "PREP-DOCT QUAL EXAMS",
	teachers: [],
	id: 5393
},
{
	name: "MUSI 8001",
	description: "RESEARCH METHODS",
	teachers: [],
	id: 5394
},
{
	name: "MUSI 8002",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 5395
},
{
	name: "MUSI 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5396
},
{
	name: "MUSI 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5397
},
{
	name: "MUSI 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5398
},
{
	name: "MUSI 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5399
},
{
	name: "MUSI 8805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5400
},
{
	name: "MUSI 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5401
},
{
	name: "MUSI 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5402
},
{
	name: "MUSI 8903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5403
},
{
	name: "MUSI 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5404
},
{
	name: "NRE 2110",
	description: "INTRO TO NRE",
	teachers: [],
	id: 5405
},
{
	name: "NRE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5406
},
{
	name: "NRE 2699",
	description: "UNDEREGRADUATE RESEARCH",
	teachers: [],
	id: 5407
},
{
	name: "NRE 3112",
	description: "RADIATION DETECTION",
	teachers: [],
	id: 5408
},
{
	name: "NRE 3208",
	description: "NUCLEAR REACTOR PHYS I",
	teachers: [],
	id: 5409
},
{
	name: "NRE 3212",
	description: "FUNDAMENTALS OF NRE",
	teachers: [],
	id: 5410
},
{
	name: "NRE 3301",
	description: "RADIATION PHYSICS",
	teachers: [],
	id: 5411
},
{
	name: "NRE 3316",
	description: "RADIATION PROTECTION ENG",
	teachers: [],
	id: 5412
},
{
	name: "NRE 3XXX",
	description: "NUCLEAR&RAD ENG ELECTIVE",
	teachers: [],
	id: 5413
},
{
	name: "NRE 4206",
	description: "RADIATION PHYSICS LAB",
	teachers: [],
	id: 5414
},
{
	name: "NRE 4208",
	description: "NUCLEAR REACTOR PHYS II",
	teachers: [],
	id: 5415
},
{
	name: "NRE 4214",
	description: "REACTOR ENGINEERING",
	teachers: [],
	id: 5416
},
{
	name: "NRE 4232",
	description: "NRE DESIGN",
	teachers: [],
	id: 5417
},
{
	name: "NRE 4234",
	description: "NUC CRITICALITY SAFE ENG",
	teachers: [],
	id: 5418
},
{
	name: "NRE 4266",
	description: "LIGHT WATER REACTOR TECH",
	teachers: [],
	id: 5419
},
{
	name: "NRE 4328",
	description: "RADIATION SOURCES & APPL",
	teachers: [],
	id: 5420
},
{
	name: "NRE 4404",
	description: "RAD ASSESSMENT&WASTE MGT",
	teachers: [],
	id: 5421
},
{
	name: "NRE 4430",
	description: "NUCL REGULATORY REQUIRE",
	teachers: [],
	id: 5422
},
{
	name: "NRE 4610",
	description: "PLASMA PHYS& FUSION ENGR",
	teachers: [],
	id: 5423
},
{
	name: "NRE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5424
},
{
	name: "NRE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5425
},
{
	name: "NRE 4750",
	description: "DIAGNOSTIC IMAGING PHYS",
	teachers: [],
	id: 5426
},
{
	name: "NRE 4770",
	description: "NUCLEAR CHEMICAL ENGR",
	teachers: [],
	id: 5427
},
{
	name: "NRE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5428
},
{
	name: "NRE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5429
},
{
	name: "NRE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5430
},
{
	name: "NRE 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5431
},
{
	name: "NRE 4805",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5432
},
{
	name: "NRE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5433
},
{
	name: "NRE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5434
},
{
	name: "NRE 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5435
},
{
	name: "NRE 4XXX",
	description: "NUCLEAR&RAD ENG ELECTIVE",
	teachers: [],
	id: 5436
},
{
	name: "NRE 6101",
	description: "TRANSPORT FUNDAMENTALS",
	teachers: [],
	id: 5437
},
{
	name: "NRE 6102",
	description: "PLASMA PHYSICS",
	teachers: [],
	id: 5438
},
{
	name: "NRE 6103",
	description: "COMPUTATIONAL TRANSPORT",
	teachers: [],
	id: 5439
},
{
	name: "NRE 6201",
	description: "REACTOR PHYSICS",
	teachers: [],
	id: 5440
},
{
	name: "NRE 6301",
	description: "REACTOR ENGINEERING",
	teachers: [],
	id: 5441
},
{
	name: "NRE 6401",
	description: "ADV NUCLEAR ENGR DESIGN",
	teachers: [],
	id: 5442
},
{
	name: "NRE 6434",
	description: "NUCL CRIT SAFETY ENGR",
	teachers: [],
	id: 5443
},
{
	name: "NRE 6501",
	description: "NUCLEAR FUEL CYCLE",
	teachers: [],
	id: 5444
},
{
	name: "NRE 6502",
	description: "NUCLEAR MATERIALS",
	teachers: [],
	id: 5445
},
{
	name: "NRE 6755",
	description: "RAD ASSESSMENT&WASTE MGT",
	teachers: [],
	id: 5446
},
{
	name: "NRE 6756",
	description: "RADIATION PHYSICS",
	teachers: [],
	id: 5447
},
{
	name: "NRE 6757",
	description: "RADIATION DETECTION",
	teachers: [],
	id: 5448
},
{
	name: "NRE 6758",
	description: "NUMERICAL METHODS IN ME",
	teachers: [],
	id: 5449
},
{
	name: "NRE 6759",
	description: "RADIATION SHIELDING",
	teachers: [],
	id: 5450
},
{
	name: "NRE 6XXX",
	description: "NUCLEAR&RAD ENG ELECTIVE",
	teachers: [],
	id: 5451
},
{
	name: "NRE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5452
},
{
	name: "NRE 7103",
	description: "ADVANCED PLASMA PHYSICS",
	teachers: [],
	id: 5453
},
{
	name: "NRE 7203",
	description: "ADVANCED REACTOR PHYSICS",
	teachers: [],
	id: 5454
},
{
	name: "NRE 7757",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 5455
},
{
	name: "NRE 8011",
	description: "SEMINAR-NUCLEAR ENGR",
	teachers: [],
	id: 5456
},
{
	name: "NRE 8012",
	description: "SEMINAR-NUCLEAR ENGR",
	teachers: [],
	id: 5457
},
{
	name: "NRE 8801",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5458
},
{
	name: "NRE 8802",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5459
},
{
	name: "NRE 8803",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5460
},
{
	name: "NRE 8804",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5461
},
{
	name: "NRE 8805",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5462
},
{
	name: "NRE 8806",
	description: "SPEC TOPIC-NUCLEAR ENGR",
	teachers: [],
	id: 5463
},
{
	name: "NRE 8901",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5464
},
{
	name: "NRE 8902",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5465
},
{
	name: "NRE 8903",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5466
},
{
	name: "NRE 8904",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5467
},
{
	name: "NRE 8905",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5468
},
{
	name: "NRE 8906",
	description: "SPEC PROB-NUCLEAR ENGR",
	teachers: [],
	id: 5469
},
{
	name: "NRE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 5470
},
{
	name: "NRE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5471
},
{
	name: "NRE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5472
},
{
	name: "NS 1321",
	description: "INTRO TO NAVAL SCIENCES",
	teachers: [],
	id: 5473
},
{
	name: "NS 1323",
	description: "NAVAL HISTORY",
	teachers: [],
	id: 5474
},
{
	name: "NS 2321",
	description: "NAVAL LEADERSHIP I",
	teachers: [],
	id: 5475
},
{
	name: "NS 2323",
	description: "NAVIGATION",
	teachers: [],
	id: 5476
},
{
	name: "NS 3323",
	description: "EVOLUTION OF WARFARE",
	teachers: [],
	id: 5477
},
{
	name: "NS 3324",
	description: "MARINE WEAPONS & TACTICS",
	teachers: [],
	id: 5478
},
{
	name: "NS 3325",
	description: "NAVAL WEAPONS SYSTEMS",
	teachers: [],
	id: 5479
},
{
	name: "NS 3326",
	description: "NAVAL ENGINEERING SYS",
	teachers: [],
	id: 5480
},
{
	name: "NS 4320",
	description: "NAVAL OPERATIONS",
	teachers: [],
	id: 5481
},
{
	name: "NS 4322",
	description: "NAVAL LEADERSHIP II",
	teachers: [],
	id: 5482
},
{
	name: "NS 4323",
	description: "AMPHIBIOUS WARFARE",
	teachers: [],
	id: 5483
},
{
	name: "PERS 1001",
	description: "ELEMENTARY PERSIAN I",
	teachers: [],
	id: 5484
},
{
	name: "PERS 1002",
	description: "ELEMENTARY PERSIAN II",
	teachers: [],
	id: 5485
},
{
	name: "PERS 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5486
},
{
	name: "PERS 1824",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5487
},
{
	name: "PERS 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5488
},
{
	name: "PERS 2823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5489
},
{
	name: "PERS 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5490
},
{
	name: "PERS 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5491
},
{
	name: "PERS 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5492
},
{
	name: "PHIL 1XXX",
	description: "PHILOSOPHY, SCI& TECH ELEC",
	teachers: [],
	id: 5493
},
{
	name: "PHIL 2010",
	description: "INTRO PHILOSOPHY",
	teachers: [],
	id: 5494
},
{
	name: "PHIL 2025",
	description: "PHILOSOPHICAL ANALYSIS",
	teachers: [],
	id: 5495
},
{
	name: "PHIL 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5496
},
{
	name: "PHIL 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5497
},
{
	name: "PHIL 2XXX",
	description: "PHILOSOPHY, SCI&TECH ELEC",
	teachers: [],
	id: 5498
},
{
	name: "PHIL 3050",
	description: "POLITICAL PHILOSOPHY",
	teachers: [],
	id: 5499
},
{
	name: "PHIL 3102",
	description: "ANCIENT PHILOSOPHY",
	teachers: [],
	id: 5500
},
{
	name: "PHIL 3103",
	description: "MODERN PHILOSOPHY",
	teachers: [],
	id: 5501
},
{
	name: "PHIL 3105",
	description: "ETHICAL THEORIES",
	teachers: [],
	id: 5502
},
{
	name: "PHIL 3109",
	description: "ENGINEERING ETHICS",
	teachers: [],
	id: 5503
},
{
	name: "PHIL 3113",
	description: "LOGIC& CRITICAL THINKING",
	teachers: [],
	id: 5504
},
{
	name: "PHIL 3115",
	description: "PHILOSOPHY OF SCIENCE",
	teachers: [],
	id: 5505
},
{
	name: "PHIL 3127",
	description: "SCI, TECH & HUMAN VALUES",
	teachers: [],
	id: 5506
},
{
	name: "PHIL 3135",
	description: "PHILOSOPHY OF TECHNOLOGY",
	teachers: [],
	id: 5507
},
{
	name: "PHIL 3140",
	description: "PHILOSOPHY OF FOOD",
	teachers: [],
	id: 5508
},
{
	name: "PHIL 3790",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 5509
},
{
	name: "PHIL 3XXX",
	description: "PHILOSOPHY, SCI&TECH ELEC",
	teachers: [],
	id: 5510
},
{
	name: "PHIL 4110",
	description: "THEORIES OF KNOWLEDGE",
	teachers: [],
	id: 5511
},
{
	name: "PHIL 4174",
	description: "PERSPECTIVES-SCI & TECH",
	teachers: [],
	id: 5512
},
{
	name: "PHIL 4176",
	description: "ENVIRONMENTAL ETHICS",
	teachers: [],
	id: 5513
},
{
	name: "PHIL 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5514
},
{
	name: "PHIL 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5515
},
{
	name: "PHIL 4752",
	description: "PHIL ISSUES-COMPUTATION",
	teachers: [],
	id: 5516
},
{
	name: "PHIL 4790",
	description: "SEMI-COGNITIVE SCIENCE",
	teachers: [],
	id: 5517
},
{
	name: "PHIL 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5518
},
{
	name: "PHIL 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5519
},
{
	name: "PHIL 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5520
},
{
	name: "PHIL 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5521
},
{
	name: "PHIL 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5522
},
{
	name: "PHIL 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5523
},
{
	name: "PHIL 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5524
},
{
	name: "PHIL 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5525
},
{
	name: "PHIL 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5526
},
{
	name: "PHIL 4XXX",
	description: "PHILOSOPHY, SCI&TECH ELEC",
	teachers: [],
	id: 5527
},
{
	name: "PHIL 6000",
	description: "RESPONSIBLE CONDUCT-RES",
	teachers: [],
	id: 5528
},
{
	name: "PHIL 6010",
	description: "BIOTECH RESEARCH ETHICS",
	teachers: [],
	id: 5529
},
{
	name: "PHYS 1000",
	description: "PHYSICS ORIENTATION",
	teachers: [],
	id: 5530
},
{
	name: "PHYS 11X1",
	description: "TRANSFER NON-CALC PHYS I",
	teachers: [],
	id: 5531
},
{
	name: "PHYS 11X2",
	description: "TRANSFER NON-CALC PHYSII",
	teachers: [],
	id: 5532
},
{
	name: "PHYS 1XXX",
	description: "PHYSICS ELECTIVE",
	teachers: [],
	id: 5533
},
{
	name: "PHYS 2001",
	description: "EVOLUTION OF PHYSICS",
	teachers: [],
	id: 5534
},
{
	name: "PHYS 2021",
	description: "SOLAR SYSTEM",
	teachers: [],
	id: 5535
},
{
	name: "PHYS 2022",
	description: "STARS, GALAXY & UNIVERSE",
	teachers: [],
	id: 5536
},
{
	name: "PHYS 2030",
	description: "PHYSICS OF MUSIC",
	teachers: [],
	id: 5537
},
{
	name: "PHYS 2211",
	description: "INTRO PHYSICS I",
	teachers: [],
	id: 5538
},
{
	name: "PHYS 2212",
	description: "INTRO PHYSICS II",
	teachers: [],
	id: 5539
},
{
	name: "PHYS 2213",
	description: "INTRO TO MODERN PHYSICS",
	teachers: [],
	id: 5540
},
{
	name: "PHYS 2231",
	description: "HONORS PHYSICS I",
	teachers: [],
	id: 5541
},
{
	name: "PHYS 2232",
	description: "HONORS PHYSICS II",
	teachers: [],
	id: 5542
},
{
	name: "PHYS 25X1",
	description: "TRANSFER PHYSICS I",
	teachers: [],
	id: 5543
},
{
	name: "PHYS 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5544
},
{
	name: "PHYS 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5545
},
{
	name: "PHYS 2750",
	description: "PHYSICS OF THE WEATHER",
	teachers: [],
	id: 5546
},
{
	name: "PHYS 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5547
},
{
	name: "PHYS 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5548
},
{
	name: "PHYS 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5549
},
{
	name: "PHYS 2804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5550
},
{
	name: "PHYS 2814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5551
},
{
	name: "PHYS 2900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5552
},
{
	name: "PHYS 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5553
},
{
	name: "PHYS 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5554
},
{
	name: "PHYS 2XXX",
	description: "PHYSICS ELECTIVE",
	teachers: [],
	id: 5555
},
{
	name: "PHYS 3021",
	description: "STELLAR ASTROPHYSICS",
	teachers: [],
	id: 5556
},
{
	name: "PHYS 3043",
	description: "WAVE MECHANICS",
	teachers: [],
	id: 5557
},
{
	name: "PHYS 3122",
	description: "ELECTRO & MAGNETOSTATICS",
	teachers: [],
	id: 5558
},
{
	name: "PHYS 3123",
	description: "ELECTRODYNAMICS",
	teachers: [],
	id: 5559
},
{
	name: "PHYS 3141",
	description: "THERMODYNAMICS",
	teachers: [],
	id: 5560
},
{
	name: "PHYS 3143",
	description: "QUANTUM MECHANICS I",
	teachers: [],
	id: 5561
},
{
	name: "PHYS 3151",
	description: "MATHEMATICAL PHYSICS",
	teachers: [],
	id: 5562
},
{
	name: "PHYS 3201",
	description: "CLASSICAL MECHANICS I",
	teachers: [],
	id: 5563
},
{
	name: "PHYS 3202",
	description: "CLASSICAL MECHANICS II",
	teachers: [],
	id: 5564
},
{
	name: "PHYS 3211",
	description: "ELECTRONICS I",
	teachers: [],
	id: 5565
},
{
	name: "PHYS 3223",
	description: "GEOMETRIC OPTICS",
	teachers: [],
	id: 5566
},
{
	name: "PHYS 3224",
	description: "GEOMETRICAL OPTICS LAB",
	teachers: [],
	id: 5567
},
{
	name: "PHYS 3225",
	description: "MODERN OPTICS",
	teachers: [],
	id: 5568
},
{
	name: "PHYS 3226",
	description: "MODERN OPTICS LAB",
	teachers: [],
	id: 5569
},
{
	name: "PHYS 3232",
	description: "OPTICS I",
	teachers: [],
	id: 5570
},
{
	name: "PHYS 3265",
	description: "ACOUSTICS",
	teachers: [],
	id: 5571
},
{
	name: "PHYS 3266",
	description: "COMPUTATIONAL PHYSICS",
	teachers: [],
	id: 5572
},
{
	name: "PHYS 3801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5573
},
{
	name: "PHYS 3802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5574
},
{
	name: "PHYS 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5575
},
{
	name: "PHYS 3804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5576
},
{
	name: "PHYS 3900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5577
},
{
	name: "PHYS 3901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5578
},
{
	name: "PHYS 3902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5579
},
{
	name: "PHYS 3XXX",
	description: "PHYSICS ELECTIVE",
	teachers: [],
	id: 5580
},
{
	name: "PHYS 4142",
	description: "STATISTICAL MECHANICS",
	teachers: [],
	id: 5581
},
{
	name: "PHYS 4143",
	description: "QUANTUM MECHANICS II",
	teachers: [],
	id: 5582
},
{
	name: "PHYS 4147",
	description: "RELATIVITY",
	teachers: [],
	id: 5583
},
{
	name: "PHYS 4206",
	description: "ELECTRONICS II",
	teachers: [],
	id: 5584
},
{
	name: "PHYS 4220",
	description: "OPTICAL DESIGN",
	teachers: [],
	id: 5585
},
{
	name: "PHYS 4222",
	description: "SOLID STATE DEVICES",
	teachers: [],
	id: 5586
},
{
	name: "PHYS 4247",
	description: "COSMOLOGY",
	teachers: [],
	id: 5587
},
{
	name: "PHYS 4251",
	description: "BIOPHYSICS",
	teachers: [],
	id: 5588
},
{
	name: "PHYS 4261",
	description: "ATOMIC PHYSICS",
	teachers: [],
	id: 5589
},
{
	name: "PHYS 4262",
	description: "SOLID STATE PHYSICS",
	teachers: [],
	id: 5590
},
{
	name: "PHYS 4263",
	description: "NUCLEI,PARTICLES&FIELDS",
	teachers: [],
	id: 5591
},
{
	name: "PHYS 4267",
	description: "NONLINEAR DYNAMICS&CHAOS",
	teachers: [],
	id: 5592
},
{
	name: "PHYS 4321",
	description: "ADVANCED LAB I",
	teachers: [],
	id: 5593
},
{
	name: "PHYS 4322",
	description: "ADVANCED LAB II",
	teachers: [],
	id: 5594
},
{
	name: "PHYS 4347",
	description: "FUND OF ASTROPHYSICS",
	teachers: [],
	id: 5595
},
{
	name: "PHYS 4421",
	description: "INTRO-CONTINUUM PHYS",
	teachers: [],
	id: 5596
},
{
	name: "PHYS 4601",
	description: "SENIOR SEMINAR I",
	teachers: [],
	id: 5597
},
{
	name: "PHYS 4602",
	description: "SENIOR SEMINAR II",
	teachers: [],
	id: 5598
},
{
	name: "PHYS 4655",
	description: "INTRO-DIFFRACTION STUDY",
	teachers: [],
	id: 5599
},
{
	name: "PHYS 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5600
},
{
	name: "PHYS 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5601
},
{
	name: "PHYS 4751",
	description: "LASER THEORY&APPLICATION",
	teachers: [],
	id: 5602
},
{
	name: "PHYS 4782",
	description: "QUANTUM INFO&QUANT COMP",
	teachers: [],
	id: 5603
},
{
	name: "PHYS 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5604
},
{
	name: "PHYS 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5605
},
{
	name: "PHYS 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5606
},
{
	name: "PHYS 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5607
},
{
	name: "PHYS 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5608
},
{
	name: "PHYS 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5609
},
{
	name: "PHYS 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5610
},
{
	name: "PHYS 4XXX",
	description: "PHYSICS ELECTIVE",
	teachers: [],
	id: 5611
},
{
	name: "PHYS 6011",
	description: "NUCLEAR&PARTICLE PHYS",
	teachers: [],
	id: 5612
},
{
	name: "PHYS 6101",
	description: "CLASSICAL MECHANICS I",
	teachers: [],
	id: 5613
},
{
	name: "PHYS 6102",
	description: "CLASSICAL MECHANICS II",
	teachers: [],
	id: 5614
},
{
	name: "PHYS 6103",
	description: "ELECTROMAGNETISM I",
	teachers: [],
	id: 5615
},
{
	name: "PHYS 6104",
	description: "ELECTROMAGNETISM II",
	teachers: [],
	id: 5616
},
{
	name: "PHYS 6105",
	description: "QUANTUM MECHANICS I",
	teachers: [],
	id: 5617
},
{
	name: "PHYS 6106",
	description: "QUANTUM MECHANICS II",
	teachers: [],
	id: 5618
},
{
	name: "PHYS 6107",
	description: "STATISTICAL MECHANICS I",
	teachers: [],
	id: 5619
},
{
	name: "PHYS 6110",
	description: "SURVEY OF PHYSICS",
	teachers: [],
	id: 5620
},
{
	name: "PHYS 6124",
	description: "MATH METHODS-PHYS I",
	teachers: [],
	id: 5621
},
{
	name: "PHYS 6125",
	description: "MATH METHODS-PHYS II",
	teachers: [],
	id: 5622
},
{
	name: "PHYS 6201",
	description: "APPLIED QUANTUM MECH",
	teachers: [],
	id: 5623
},
{
	name: "PHYS 6202",
	description: "APPLIED ELECTROMAGNETISM",
	teachers: [],
	id: 5624
},
{
	name: "PHYS 6203",
	description: "SOLID STATE PHYSICS",
	teachers: [],
	id: 5625
},
{
	name: "PHYS 6204",
	description: "ELECTRONICS I",
	teachers: [],
	id: 5626
},
{
	name: "PHYS 6206",
	description: "ELECTRONICS II",
	teachers: [],
	id: 5627
},
{
	name: "PHYS 6210",
	description: "CONDENSED MATTER PHYS I",
	teachers: [],
	id: 5628
},
{
	name: "PHYS 6211",
	description: "CONDENSED MATTER PHYS II",
	teachers: [],
	id: 5629
},
{
	name: "PHYS 6265",
	description: "ATOMIC PHYSICS I",
	teachers: [],
	id: 5630
},
{
	name: "PHYS 6267",
	description: "ATOMIC PHYSICS II",
	teachers: [],
	id: 5631
},
{
	name: "PHYS 6268",
	description: "NONLINEAR DYNAMICS",
	teachers: [],
	id: 5632
},
{
	name: "PHYS 6300",
	description: "GRADUATE LABORATORY",
	teachers: [],
	id: 5633
},
{
	name: "PHYS 6567",
	description: "ULTRAFAST OPTICS",
	teachers: [],
	id: 5634
},
{
	name: "PHYS 6771",
	description: "OPTOELECTRONICS",
	teachers: [],
	id: 5635
},
{
	name: "PHYS 6787",
	description: "QUANTITATIVE ELECTROPHYS",
	teachers: [],
	id: 5636
},
{
	name: "PHYS 6XXX",
	description: "PHYSICS ELECTIVE",
	teachers: [],
	id: 5637
},
{
	name: "PHYS 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5638
},
{
	name: "PHYS 7123",
	description: "STATISTICAL MECHANICS II",
	teachers: [],
	id: 5639
},
{
	name: "PHYS 7125",
	description: "GRAVITY",
	teachers: [],
	id: 5640
},
{
	name: "PHYS 7141",
	description: "MANY-PARTICLE QUANT MECH",
	teachers: [],
	id: 5641
},
{
	name: "PHYS 7143",
	description: "GROUP THEORY&QUANTUM MEC",
	teachers: [],
	id: 5642
},
{
	name: "PHYS 7147",
	description: "QUANTUM FIELD THEORY",
	teachers: [],
	id: 5643
},
{
	name: "PHYS 7150",
	description: "QUANTUM LOGICS",
	teachers: [],
	id: 5644
},
{
	name: "PHYS 7221",
	description: "STATISTICAL OPTICS",
	teachers: [],
	id: 5645
},
{
	name: "PHYS 7222",
	description: "QUANTUM OPTICS I",
	teachers: [],
	id: 5646
},
{
	name: "PHYS 7223",
	description: "QUANTUM OPTICS II",
	teachers: [],
	id: 5647
},
{
	name: "PHYS 7224",
	description: "NONLINEAR DYNAMICS",
	teachers: [],
	id: 5648
},
{
	name: "PHYS 7268",
	description: "PATTERN FORMATION",
	teachers: [],
	id: 5649
},
{
	name: "PHYS 8001",
	description: "SEMINAR",
	teachers: [],
	id: 5650
},
{
	name: "PHYS 8002",
	description: "SEMINAR",
	teachers: [],
	id: 5651
},
{
	name: "PHYS 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5652
},
{
	name: "PHYS 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5653
},
{
	name: "PHYS 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5654
},
{
	name: "PHYS 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5655
},
{
	name: "PHYS 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5656
},
{
	name: "PHYS 8991",
	description: "MASTER'S PRACTICUM",
	teachers: [],
	id: 5657
},
{
	name: "PHYS 8992",
	description: "MASTER'S PRACTICUM",
	teachers: [],
	id: 5658
},
{
	name: "PHYS 8993",
	description: "MASTER'S PRACTICUM",
	teachers: [],
	id: 5659
},
{
	name: "PHYS 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 5660
},
{
	name: "PHYS 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5661
},
{
	name: "PHYS 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5662
},
{
	name: "POL 1101",
	description: "GOVERNMENT OF THE U.S.",
	teachers: [],
	id: 5663
},
{
	name: "POL 2101",
	description: "STATE & LOCAL GOVERNMENT",
	teachers: [],
	id: 5664
},
{
	name: "PSY 1XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5665
},
{
	name: "PSY 2XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5666
},
{
	name: "PSY 3XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5667
},
{
	name: "PSY 4XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5668
},
{
	name: "PSY 6XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5669
},
{
	name: "PSYC 1101",
	description: "GENERAL PSYCHOLOGY",
	teachers: [],
	id: 5670
},
{
	name: "PSYC 1XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5671
},
{
	name: "PSYC 2005",
	description: "EXPL MULTICULTURAL IDENT",
	teachers: [],
	id: 5672
},
{
	name: "PSYC 2015",
	description: "RESEARCH METHODS",
	teachers: [],
	id: 5673
},
{
	name: "PSYC 2020",
	description: "PSYCHOLOGICAL STATISTICS",
	teachers: [],
	id: 5674
},
{
	name: "PSYC 2103",
	description: "HUMAN DEVELOPMENT",
	teachers: [],
	id: 5675
},
{
	name: "PSYC 2210",
	description: "SOCIAL PSYCHOLOGY",
	teachers: [],
	id: 5676
},
{
	name: "PSYC 2220",
	description: "INDUSTRIAL/ORGANIZ PSY",
	teachers: [],
	id: 5677
},
{
	name: "PSYC 2230",
	description: "ABNORMAL PSYCHOLOGY",
	teachers: [],
	id: 5678
},
{
	name: "PSYC 2240",
	description: "PERSONALITY THEORY",
	teachers: [],
	id: 5679
},
{
	name: "PSYC 2250",
	description: "CROSS-CULTURAL PSYC",
	teachers: [],
	id: 5680
},
{
	name: "PSYC 2270",
	description: "ENGINEERING PSYCHOLOGY",
	teachers: [],
	id: 5681
},
{
	name: "PSYC 2280",
	description: "PSYC OF CREATIVITY & ART",
	teachers: [],
	id: 5682
},
{
	name: "PSYC 2300",
	description: "PSY OF ADVERTISING",
	teachers: [],
	id: 5683
},
{
	name: "PSYC 2400",
	description: "PSY& CONTEMPORARY ISSUES",
	teachers: [],
	id: 5684
},
{
	name: "PSYC 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5685
},
{
	name: "PSYC 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5686
},
{
	name: "PSYC 2760",
	description: "HUMAN LANGUAGE PROCESS",
	teachers: [],
	id: 5687
},
{
	name: "PSYC 2801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5688
},
{
	name: "PSYC 2802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5689
},
{
	name: "PSYC 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5690
},
{
	name: "PSYC 2901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5691
},
{
	name: "PSYC 2902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5692
},
{
	name: "PSYC 2903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5693
},
{
	name: "PSYC 2XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5694
},
{
	name: "PSYC 3011",
	description: "COGNITIVE PSYCHOLOGY",
	teachers: [],
	id: 5695
},
{
	name: "PSYC 3012",
	description: "INTRO COGNITIVE PSYC",
	teachers: [],
	id: 5696
},
{
	name: "PSYC 3020",
	description: "BIOPSYCHOLOGY",
	teachers: [],
	id: 5697
},
{
	name: "PSYC 3031",
	description: "EXPER ANALYS OF BEHAVIOR",
	teachers: [],
	id: 5698
},
{
	name: "PSYC 3040",
	description: "SENSATION & PERCEPTION",
	teachers: [],
	id: 5699
},
{
	name: "PSYC 3041",
	description: "HUMAN SENSATION&PERCEPT",
	teachers: [],
	id: 5700
},
{
	name: "PSYC 3060",
	description: "COMPARATIVE PSYCHOLOGY",
	teachers: [],
	id: 5701
},
{
	name: "PSYC 3750",
	description: "USER INTERFACE AND DESIGN",
	teachers: [],
	id: 5702
},
{
	name: "PSYC 3790",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 5703
},
{
	name: "PSYC 3XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5704
},
{
	name: "PSYC 4010",
	description: "HUMAN ABILITIES",
	teachers: [],
	id: 5705
},
{
	name: "PSYC 4031",
	description: "APPLIED EXPERIMENTAL PSY",
	teachers: [],
	id: 5706
},
{
	name: "PSYC 4050",
	description: "HISTORY AND SYSTEMS",
	teachers: [],
	id: 5707
},
{
	name: "PSYC 4090",
	description: "COGNITIVE NEUROSCIENCE",
	teachers: [],
	id: 5708
},
{
	name: "PSYC 4100",
	description: "BEHAVIORAL PHARMACOLOGY",
	teachers: [],
	id: 5709
},
{
	name: "PSYC 4200",
	description: "ADV TOPICS-COGNITIVE PSY",
	teachers: [],
	id: 5710
},
{
	name: "PSYC 4260",
	description: "PSYCHOLOGY OF AGING",
	teachers: [],
	id: 5711
},
{
	name: "PSYC 4270",
	description: "PSYCHOLOGICAL TESTING",
	teachers: [],
	id: 5712
},
{
	name: "PSYC 4310",
	description: "ANIMAL BEHAVIOR I",
	teachers: [],
	id: 5713
},
{
	name: "PSYC 4320",
	description: "ANIMAL BEHAVIOR II",
	teachers: [],
	id: 5714
},
{
	name: "PSYC 4600",
	description: "SENIOR THESIS I",
	teachers: [],
	id: 5715
},
{
	name: "PSYC 4601",
	description: "SENIOR THESIS II",
	teachers: [],
	id: 5716
},
{
	name: "PSYC 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5717
},
{
	name: "PSYC 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5718
},
{
	name: "PSYC 4770",
	description: "ENVIRONMENTAL DESIGN",
	teachers: [],
	id: 5719
},
{
	name: "PSYC 4790",
	description: "SEM-COGNITIVE SCIENCE",
	teachers: [],
	id: 5720
},
{
	name: "PSYC 4791",
	description: "INTEGRATIVE PROJ-COG SCI",
	teachers: [],
	id: 5721
},
{
	name: "PSYC 4792",
	description: "DSGN PROJ-COGNITIVE SCI",
	teachers: [],
	id: 5722
},
{
	name: "PSYC 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5723
},
{
	name: "PSYC 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5724
},
{
	name: "PSYC 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5725
},
{
	name: "PSYC 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5726
},
{
	name: "PSYC 4900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5727
},
{
	name: "PSYC 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5728
},
{
	name: "PSYC 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5729
},
{
	name: "PSYC 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5730
},
{
	name: "PSYC 4904",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5731
},
{
	name: "PSYC 4905",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5732
},
{
	name: "PSYC 4906",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5733
},
{
	name: "PSYC 4907",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5734
},
{
	name: "PSYC 4908",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5735
},
{
	name: "PSYC 4909",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5736
},
{
	name: "PSYC 4910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5737
},
{
	name: "PSYC 4XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5738
},
{
	name: "PSYC 6000",
	description: "RESP. CONDUCT RESEARCH",
	teachers: [],
	id: 5739
},
{
	name: "PSYC 6011",
	description: "COGNITIVE PSYCHOLOGY",
	teachers: [],
	id: 5740
},
{
	name: "PSYC 6012",
	description: "SOCIAL PSYCHOLOGY",
	teachers: [],
	id: 5741
},
{
	name: "PSYC 6013",
	description: "BIOPSYCHOLOGY",
	teachers: [],
	id: 5742
},
{
	name: "PSYC 6014",
	description: "SENSATION & PERCEPTION",
	teachers: [],
	id: 5743
},
{
	name: "PSYC 6015",
	description: "DEVELOPMENTAL PSYCHOLOGY",
	teachers: [],
	id: 5744
},
{
	name: "PSYC 6016",
	description: "ANALYSIS OF BEHAVIOR",
	teachers: [],
	id: 5745
},
{
	name: "PSYC 6017",
	description: "HUMAN ABILITIES",
	teachers: [],
	id: 5746
},
{
	name: "PSYC 6018",
	description: "RESEARCH DESIGN",
	teachers: [],
	id: 5747
},
{
	name: "PSYC 6019",
	description: "STATISTICAL ANALYSIS I",
	teachers: [],
	id: 5748
},
{
	name: "PSYC 6020",
	description: "STATISTICAL ANALAYSIS II",
	teachers: [],
	id: 5749
},
{
	name: "PSYC 6021",
	description: "PERSONALITY THEORIES",
	teachers: [],
	id: 5750
},
{
	name: "PSYC 6022",
	description: "PSYC STAT FOR HCI",
	teachers: [],
	id: 5751
},
{
	name: "PSYC 6023",
	description: "PSYC RES METHODS FOR HCI",
	teachers: [],
	id: 5752
},
{
	name: "PSYC 6031",
	description: "ENG PSYC ANALYSIS TECH",
	teachers: [],
	id: 5753
},
{
	name: "PSYC 6032",
	description: "ENG PSYC STRESSORS",
	teachers: [],
	id: 5754
},
{
	name: "PSYC 6033",
	description: "ENG PSYC COGNITIVE ERGO",
	teachers: [],
	id: 5755
},
{
	name: "PSYC 6034",
	description: "ENG PSYC DISPLAYS",
	teachers: [],
	id: 5756
},
{
	name: "PSYC 6035",
	description: "ENG PSYC CNTRL&WORKSPACE",
	teachers: [],
	id: 5757
},
{
	name: "PSYC 6040",
	description: "TOPICS IN COG & BRAIN SC",
	teachers: [],
	id: 5758
},
{
	name: "PSYC 6041",
	description: "TOPICS IN COG AGING",
	teachers: [],
	id: 5759
},
{
	name: "PSYC 6042",
	description: "NEUROIMAGING",
	teachers: [],
	id: 5760
},
{
	name: "PSYC 6043",
	description: "ENGR PSYC RES SEMINAR",
	teachers: [],
	id: 5761
},
{
	name: "PSYC 6060",
	description: "PSYC OF AGING",
	teachers: [],
	id: 5762
},
{
	name: "PSYC 6090",
	description: "COGNITIVE NEUROSCIENCE",
	teachers: [],
	id: 5763
},
{
	name: "PSYC 6270",
	description: "PSYCHOLOGICAL TESTING",
	teachers: [],
	id: 5764
},
{
	name: "PSYC 6750",
	description: "HUMAN-COMPUTER INTERACT",
	teachers: [],
	id: 5765
},
{
	name: "PSYC 6753",
	description: "HCI PROF PREP & PRACTICE",
	teachers: [],
	id: 5766
},
{
	name: "PSYC 6795",
	description: "INTRO-COGNITIVE SCIENCE",
	teachers: [],
	id: 5767
},
{
	name: "PSYC 6998",
	description: "HCI MASTER'S PROJECT",
	teachers: [],
	id: 5768
},
{
	name: "PSYC 6XXX",
	description: "PSYCHOLOGY ELECTIVE",
	teachers: [],
	id: 5769
},
{
	name: "PSYC 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5770
},
{
	name: "PSYC 7020",
	description: "COGNITIVE AGING",
	teachers: [],
	id: 5771
},
{
	name: "PSYC 7101",
	description: "ENGINEERING PSY I",
	teachers: [],
	id: 5772
},
{
	name: "PSYC 7102",
	description: "ENGINEERING PSY II",
	teachers: [],
	id: 5773
},
{
	name: "PSYC 7103",
	description: "ENGINEERING PSY III",
	teachers: [],
	id: 5774
},
{
	name: "PSYC 7104",
	description: "PSYCHOMOTOR & COG SKILL",
	teachers: [],
	id: 5775
},
{
	name: "PSYC 7105",
	description: "FIRST YR RESEARCH I",
	teachers: [],
	id: 5776
},
{
	name: "PSYC 7106",
	description: "FIRST YR RESEARCH II",
	teachers: [],
	id: 5777
},
{
	name: "PSYC 7201",
	description: "INDUSTRIAL/ORGANIZ PSY",
	teachers: [],
	id: 5778
},
{
	name: "PSYC 7202",
	description: "EMPLOYEE SELECTION",
	teachers: [],
	id: 5779
},
{
	name: "PSYC 7203",
	description: "MOTIVATION&JOB ATTITUDES",
	teachers: [],
	id: 5780
},
{
	name: "PSYC 7204",
	description: "TRAINING & DEVELOPMENT",
	teachers: [],
	id: 5781
},
{
	name: "PSYC 7301",
	description: "MULTIVARIATE STATISTICS",
	teachers: [],
	id: 5782
},
{
	name: "PSYC 7302",
	description: "EQUATION MODELING",
	teachers: [],
	id: 5783
},
{
	name: "PSYC 7303",
	description: "PSYCHOMETRIC THEORY",
	teachers: [],
	id: 5784
},
{
	name: "PSYC 7700",
	description: "PROFESSIONAL PROBLEMS",
	teachers: [],
	id: 5785
},
{
	name: "PSYC 7701",
	description: "TEACHING PRACTICUM",
	teachers: [],
	id: 5786
},
{
	name: "PSYC 7790",
	description: "COGNITIVE MODELING",
	teachers: [],
	id: 5787
},
{
	name: "PSYC 7999",
	description: "PREP DOCTORAL QUAL EXAM",
	teachers: [],
	id: 5788
},
{
	name: "PSYC 8000",
	description: "SEM-EXPERIMENTAL PSY",
	teachers: [],
	id: 5789
},
{
	name: "PSYC 8010",
	description: "SEMINAR-COGNITIVE PSY",
	teachers: [],
	id: 5790
},
{
	name: "PSYC 8020",
	description: "SEMINAR-COGNITIVE AGING",
	teachers: [],
	id: 5791
},
{
	name: "PSYC 8030",
	description: "SEM-COMPARATIVE PSY",
	teachers: [],
	id: 5792
},
{
	name: "PSYC 8040",
	description: "SEMINAR-ENGINEERING PSY",
	teachers: [],
	id: 5793
},
{
	name: "PSYC 8050",
	description: "SEM-INDUST/ORGANIZ PSY",
	teachers: [],
	id: 5794
},
{
	name: "PSYC 8060",
	description: "SEM-QUANTITATIVE PSY",
	teachers: [],
	id: 5795
},
{
	name: "PSYC 8070",
	description: "SEMINAR COGNEURO",
	teachers: [],
	id: 5796
},
{
	name: "PSYC 8080",
	description: "SEMINAR COG & BRAIN",
	teachers: [],
	id: 5797
},
{
	name: "PSYC 8795",
	description: "COLLOQUIUM-COGNITIVE SCI",
	teachers: [],
	id: 5798
},
{
	name: "PSYC 8802",
	description: "TOPICS IN COGNEURO",
	teachers: [],
	id: 5799
},
{
	name: "PSYC 8803",
	description: "SPEC TOP-APPLIED STAT",
	teachers: [],
	id: 5800
},
{
	name: "PSYC 8804",
	description: "TOPICS IN COG AGING",
	teachers: [],
	id: 5801
},
{
	name: "PSYC 8805",
	description: "TOPICS IN COGNEURO",
	teachers: [],
	id: 5802
},
{
	name: "PSYC 8806",
	description: "TOPICS IN COG PSYC",
	teachers: [],
	id: 5803
},
{
	name: "PSYC 8807",
	description: "SPECIAL TOPICS ENGR PSYC",
	teachers: [],
	id: 5804
},
{
	name: "PSYC 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5805
},
{
	name: "PSYC 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5806
},
{
	name: "PSYC 8890",
	description: "SPEC TOPIC-COGNITIVE SCI",
	teachers: [],
	id: 5807
},
{
	name: "PSYC 8900",
	description: "SPEC PROB-EXPERIMENT PSY",
	teachers: [],
	id: 5808
},
{
	name: "PSYC 8901",
	description: "SPEC PROB-ENGR PSY",
	teachers: [],
	id: 5809
},
{
	name: "PSYC 8902",
	description: "SPE PROB-IND/ORGANIZ PSY",
	teachers: [],
	id: 5810
},
{
	name: "PSYC 8903",
	description: "SPECIAL PROBLEMS IN HCI",
	teachers: [],
	id: 5811
},
{
	name: "PSYC 8904",
	description: "SPEC PROBLEMS: COG AGING",
	teachers: [],
	id: 5812
},
{
	name: "PSYC 8905",
	description: "SPECIAL PRBLEMS: COGNEURO",
	teachers: [],
	id: 5813
},
{
	name: "PSYC 8906",
	description: "SPECIAL PROBLEMS: COGPSYC",
	teachers: [],
	id: 5814
},
{
	name: "PSYC 8907",
	description: "SPEC PROBLEMS: COG&BRAIN",
	teachers: [],
	id: 5815
},
{
	name: "PSYC 8908",
	description: "SPEC PROBLEMS: QUANT PSYC",
	teachers: [],
	id: 5816
},
{
	name: "PSYC 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 5817
},
{
	name: "PSYC 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5818
},
{
	name: "PSYC 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5819
},
{
	name: "PTFE 1100",
	description: "INTRO-POLYMER&FIBER ENGR",
	teachers: [],
	id: 5820
},
{
	name: "PTFE 1XXX",
	description: "PTFE ELECTIVES",
	teachers: [],
	id: 5821
},
{
	name: "PTFE 2200",
	description: "STRUCT&PROP-FIBERS&POLYM",
	teachers: [],
	id: 5822
},
{
	name: "PTFE 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5823
},
{
	name: "PTFE 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5824
},
{
	name: "PTFE 2XXX",
	description: "PTFE ELECTIVES",
	teachers: [],
	id: 5825
},
{
	name: "PTFE 3200",
	description: "YARN & FABRIC FORMATION",
	teachers: [],
	id: 5826
},
{
	name: "PTFE 3210",
	description: "TRANSPORT-POLYMERS&FIBER",
	teachers: [],
	id: 5827
},
{
	name: "PTFE 3220",
	description: "TEXT OPERATIONS&MGT METH",
	teachers: [],
	id: 5828
},
{
	name: "PTFE 3221",
	description: "TEXTILE FORMATION&TEST",
	teachers: [],
	id: 5829
},
{
	name: "PTFE 3230",
	description: "POLYMER&FIBER PROCESSING",
	teachers: [],
	id: 5830
},
{
	name: "PTFE 3720",
	description: "INTRO-FIBER ENTERPRISE",
	teachers: [],
	id: 5831
},
{
	name: "PTFE 3XXX",
	description: "PTFE ELECTIVES",
	teachers: [],
	id: 5832
},
{
	name: "PTFE 4020",
	description: "TEXTILE MGT INTERNSHIP",
	teachers: [],
	id: 5833
},
{
	name: "PTFE 4043",
	description: "SAFETY AND ETHICS",
	teachers: [],
	id: 5834
},
{
	name: "PTFE 4100",
	description: "CHEM PROC-TEXT MATERIALS",
	teachers: [],
	id: 5835
},
{
	name: "PTFE 4101",
	description: "CARPET TECHNOLOGY",
	teachers: [],
	id: 5836
},
{
	name: "PTFE 4102",
	description: "NONWOVENS TECHNOLOGY",
	teachers: [],
	id: 5837
},
{
	name: "PTFE 4103",
	description: "KNITTING TECHNOLOGY",
	teachers: [],
	id: 5838
},
{
	name: "PTFE 4104",
	description: "INDUSTRIAL TEXTILES",
	teachers: [],
	id: 5839
},
{
	name: "PTFE 4105",
	description: "SURVEY-APPAREL INDUSTRY",
	teachers: [],
	id: 5840
},
{
	name: "PTFE 4106",
	description: "SCIENCE OF COLOR",
	teachers: [],
	id: 5841
},
{
	name: "PTFE 4107",
	description: "APP OF MECH-TEXT STRUCT",
	teachers: [],
	id: 5842
},
{
	name: "PTFE 4108",
	description: "TEX PRODUCTION ECONOMICS",
	teachers: [],
	id: 5843
},
{
	name: "PTFE 4110",
	description: "POLY&FIBER ENGR DESIGN I",
	teachers: [],
	id: 5844
},
{
	name: "PTFE 4122",
	description: "TEXTILE CHEMISTRY LAB",
	teachers: [],
	id: 5845
},
{
	name: "PTFE 4140",
	description: "POLY SOLUTIONS&SURFACES",
	teachers: [],
	id: 5846
},
{
	name: "PTFE 4141",
	description: "POLYMER CHARACTERIZATION",
	teachers: [],
	id: 5847
},
{
	name: "PTFE 4210",
	description: "POLY&FIBER ENG DESIGN II",
	teachers: [],
	id: 5848
},
{
	name: "PTFE 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5849
},
{
	name: "PTFE 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5850
},
{
	name: "PTFE 4720",
	description: "FIBER PROC FOR MANAGERS",
	teachers: [],
	id: 5851
},
{
	name: "PTFE 4721",
	description: "FABRIC-COLOR&PERFORMANCE",
	teachers: [],
	id: 5852
},
{
	name: "PTFE 4723",
	description: "PROP-TEXTILE MATERIAL",
	teachers: [],
	id: 5853
},
{
	name: "PTFE 4740",
	description: "BIO-INSPIRED DESIGN",
	teachers: [],
	id: 5854
},
{
	name: "PTFE 4761",
	description: "INDUSTRIAL CTRLS & MFG",
	teachers: [],
	id: 5855
},
{
	name: "PTFE 4775",
	description: "POLYMER SCIENCE & ENGR I",
	teachers: [],
	id: 5856
},
{
	name: "PTFE 4776",
	description: "POLYMER SCIENCE & ENGR II",
	teachers: [],
	id: 5857
},
{
	name: "PTFE 4777",
	description: "INTRO-POLYMER SCI & ENGR",
	teachers: [],
	id: 5858
},
{
	name: "PTFE 4791",
	description: "MECH BEHAVIOR-COMPOSITES",
	teachers: [],
	id: 5859
},
{
	name: "PTFE 4793",
	description: "COMPOSITE MATER& PROCESS",
	teachers: [],
	id: 5860
},
{
	name: "PTFE 4794",
	description: "COMPOSITE MATERIALS& MFG",
	teachers: [],
	id: 5861
},
{
	name: "PTFE 4801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5862
},
{
	name: "PTFE 4802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5863
},
{
	name: "PTFE 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5864
},
{
	name: "PTFE 4804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5865
},
{
	name: "PTFE 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5866
},
{
	name: "PTFE 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5867
},
{
	name: "PTFE 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5868
},
{
	name: "PTFE 4XXX",
	description: "PTFE ELECTIVES",
	teachers: [],
	id: 5869
},
{
	name: "PTFE 6100",
	description: "MECH-FIBROUS MATERIALS",
	teachers: [],
	id: 5870
},
{
	name: "PTFE 6101",
	description: "DYNAMIC-TEXT DRY PROCESS",
	teachers: [],
	id: 5871
},
{
	name: "PTFE 6200",
	description: "INDUSTRIAL CHEM PROCESS",
	teachers: [],
	id: 5872
},
{
	name: "PTFE 6201",
	description: "DYE SYNTHESIS",
	teachers: [],
	id: 5873
},
{
	name: "PTFE 6202",
	description: "PHYS CHEM-POLYM SORPTION",
	teachers: [],
	id: 5874
},
{
	name: "PTFE 6301",
	description: "NATURAL POLYMERS",
	teachers: [],
	id: 5875
},
{
	name: "PTFE 6751",
	description: "PHYS CHEM-POLY SOLUTIONS",
	teachers: [],
	id: 5876
},
{
	name: "PTFE 6752",
	description: "POLYMER CHARACTERIZATION",
	teachers: [],
	id: 5877
},
{
	name: "PTFE 6755",
	description: "THEORETICAL CHEM-POLYMER",
	teachers: [],
	id: 5878
},
{
	name: "PTFE 6759",
	description: "MATE-ENVIR CONSCIOUS DGN",
	teachers: [],
	id: 5879
},
{
	name: "PTFE 6768",
	description: "POLYMER STRUCTURE& PROPS",
	teachers: [],
	id: 5880
},
{
	name: "PTFE 6778",
	description: "INTRO TO BIOMATERIALS",
	teachers: [],
	id: 5881
},
{
	name: "PTFE 6795",
	description: "MATH,STAT&COMP TECH-MATE",
	teachers: [],
	id: 5882
},
{
	name: "PTFE 6796",
	description: "STRUCT-PROPERTY RELATION",
	teachers: [],
	id: 5883
},
{
	name: "PTFE 6797",
	description: "THERM&KINETIC MICROSTRUC",
	teachers: [],
	id: 5884
},
{
	name: "PTFE 6998",
	description: "SAFETY AND ETHICS",
	teachers: [],
	id: 5885
},
{
	name: "PTFE 6999",
	description: "TFE COLLOQUIUM",
	teachers: [],
	id: 5886
},
{
	name: "PTFE 6XXX",
	description: "TEXT&FIBER ENG ELECTIVE",
	teachers: [],
	id: 5887
},
{
	name: "PTFE 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 5888
},
{
	name: "PTFE 7100",
	description: "ADV FIBER FORMAT&STRUCT",
	teachers: [],
	id: 5889
},
{
	name: "PTFE 7771",
	description: "MECH-POLYMER SOLID&FLUID",
	teachers: [],
	id: 5890
},
{
	name: "PTFE 7791",
	description: "DAMAGE & FAIL-COMPOSITES",
	teachers: [],
	id: 5891
},
{
	name: "PTFE 7792",
	description: "MECHANICS OF COMPOSITES",
	teachers: [],
	id: 5892
},
{
	name: "PTFE 7793",
	description: "MANUFACTURE-COMPOSITES",
	teachers: [],
	id: 5893
},
{
	name: "PTFE 7999",
	description: "PREP-DOCTORAL QUAL EXAMS",
	teachers: [],
	id: 5894
},
{
	name: "PTFE 8001",
	description: "TFE SEMINAR",
	teachers: [],
	id: 5895
},
{
	name: "PTFE 8002",
	description: "TFE SEMINAR",
	teachers: [],
	id: 5896
},
{
	name: "PTFE 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5897
},
{
	name: "PTFE 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5898
},
{
	name: "PTFE 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5899
},
{
	name: "PTFE 8804",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5900
},
{
	name: "PTFE 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5901
},
{
	name: "PTFE 8814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5902
},
{
	name: "PTFE 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5903
},
{
	name: "PTFE 8901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5904
},
{
	name: "PTFE 8902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5905
},
{
	name: "PTFE 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 5906
},
{
	name: "PTFE 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5907
},
{
	name: "PTFE 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 5908
},
{
	name: "PUBJ 8000",
	description: "JOINT GT/GSU PHD PROGRAM",
	teachers: [],
	id: 5909
},
{
	name: "PUBJ 8801",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5910
},
{
	name: "PUBJ 8802",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5911
},
{
	name: "PUBJ 8803",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5912
},
{
	name: "PUBJ 8811",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5913
},
{
	name: "PUBJ 8812",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5914
},
{
	name: "PUBJ 8813",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5915
},
{
	name: "PUBJ 8821",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5916
},
{
	name: "PUBJ 8822",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5917
},
{
	name: "PUBJ 8823",
	description: "SPEC TOP-JOINT PRGM GSU",
	teachers: [],
	id: 5918
},
{
	name: "PUBP 1142",
	description: "TEAMS AND COLLABORATION",
	teachers: [],
	id: 5919
},
{
	name: "PUBP 1XXX",
	description: "PUBLIC POLICY ELECTIVE",
	teachers: [],
	id: 5920
},
{
	name: "PUBP 2010",
	description: "POLITICAL PROCESSES",
	teachers: [],
	id: 5921
},
{
	name: "PUBP 2012",
	description: "FOUNDATION-PUBLIC POLICY",
	teachers: [],
	id: 5922
},
{
	name: "PUBP 2030",
	description: "ORGANIZATIONS AND POLICY",
	teachers: [],
	id: 5923
},
{
	name: "PUBP 2142",
	description: "TEAMS AND COLLAB CONTEXT",
	teachers: [],
	id: 5924
},
{
	name: "PUBP 2651",
	description: "PUBLIC POLICY INTERNSHIP",
	teachers: [],
	id: 5925
},
{
	name: "PUBP 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5926
},
{
	name: "PUBP 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5927
},
{
	name: "PUBP 2803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5928
},
{
	name: "PUBP 2XXX",
	description: "PUBLIC POLICY ELECTIVE",
	teachers: [],
	id: 5929
},
{
	name: "PUBP 3000",
	description: "US CONSTITUTIONAL ISSUES",
	teachers: [],
	id: 5930
},
{
	name: "PUBP 3016",
	description: "JUDICIAL PROCESS",
	teachers: [],
	id: 5931
},
{
	name: "PUBP 3020",
	description: "APPLIED POLITICAL ECON",
	teachers: [],
	id: 5932
},
{
	name: "PUBP 3030",
	description: "POLICY ANALYSIS",
	teachers: [],
	id: 5933
},
{
	name: "PUBP 3120",
	description: "STAT ANALYSIS-PUB POLICY",
	teachers: [],
	id: 5934
},
{
	name: "PUBP 3130",
	description: "RESEARCH METHODS",
	teachers: [],
	id: 5935
},
{
	name: "PUBP 3141",
	description: "LEADING SOCIAL ORGS",
	teachers: [],
	id: 5936
},
{
	name: "PUBP 3201",
	description: "INTRO TO SOCIAL POLICY",
	teachers: [],
	id: 5937
},
{
	name: "PUBP 3214",
	description: "AFRICAN-AMER POLITICS",
	teachers: [],
	id: 5938
},
{
	name: "PUBP 3244",
	description: "STEM CELL POLICY ETHICS",
	teachers: [],
	id: 5939
},
{
	name: "PUBP 3315",
	description: "ENVIRON POLICY& POLITICS",
	teachers: [],
	id: 5940
},
{
	name: "PUBP 3320",
	description: "CLIMATE POLICY",
	teachers: [],
	id: 5941
},
{
	name: "PUBP 3350",
	description: "ENERGY POLICY",
	teachers: [],
	id: 5942
},
{
	name: "PUBP 3502",
	description: "IT/COMM/TELECOM POLICY",
	teachers: [],
	id: 5943
},
{
	name: "PUBP 3600",
	description: "SUSTAIN,TECH & POLICY",
	teachers: [],
	id: 5944
},
{
	name: "PUBP 3610",
	description: "PRE-LAW SEMINAR",
	teachers: [],
	id: 5945
},
{
	name: "PUBP 3XXX",
	description: "PUBLIC POLICY ELECTIVE",
	teachers: [],
	id: 5946
},
{
	name: "PUBP 4010",
	description: "POLICY TASK FORCE I",
	teachers: [],
	id: 5947
},
{
	name: "PUBP 4020",
	description: "POLICY TASK FORCE II",
	teachers: [],
	id: 5948
},
{
	name: "PUBP 4111",
	description: "INTERNET & PUBLIC POLICY",
	teachers: [],
	id: 5949
},
{
	name: "PUBP 4120",
	description: "SURVEY RESEARCH METHODS",
	teachers: [],
	id: 5950
},
{
	name: "PUBP 4130",
	description: "POL ANALY & PROGRAM EVAL",
	teachers: [],
	id: 5951
},
{
	name: "PUBP 4140",
	description: "FOUNDATIONS LEADERSHIP",
	teachers: [],
	id: 5952
},
{
	name: "PUBP 4200",
	description: "SOCIAL POLICY ISSUES",
	teachers: [],
	id: 5953
},
{
	name: "PUBP 4211",
	description: "URBAN POLICY",
	teachers: [],
	id: 5954
},
{
	name: "PUBP 4212",
	description: "WOMEN AND PUBLIC POLICY",
	teachers: [],
	id: 5955
},
{
	name: "PUBP 4214",
	description: "GENDER,SCI,TECH&PUB PLCY",
	teachers: [],
	id: 5956
},
{
	name: "PUBP 4226",
	description: "BUSINESS AND GOVERNMENT",
	teachers: [],
	id: 5957
},
{
	name: "PUBP 4260",
	description: "ECON DEV POLICY & PLAN",
	teachers: [],
	id: 5958
},
{
	name: "PUBP 4338",
	description: "ENVIRON IMPACT ASSESMENT",
	teachers: [],
	id: 5959
},
{
	name: "PUBP 4410",
	description: "SCIENCE,TECH& PUB POLICY",
	teachers: [],
	id: 5960
},
{
	name: "PUBP 4414",
	description: "TECH,INNOVATION&POLICY",
	teachers: [],
	id: 5961
},
{
	name: "PUBP 4416",
	description: "CRITICAL ISSUES-SCI&TECH",
	teachers: [],
	id: 5962
},
{
	name: "PUBP 4440",
	description: "SCI TECH & REGULATION",
	teachers: [],
	id: 5963
},
{
	name: "PUBP 4501",
	description: "INFO POLICY & MANAGEMENT",
	teachers: [],
	id: 5964
},
{
	name: "PUBP 4514",
	description: "MASS COMMUNICATIONS POL",
	teachers: [],
	id: 5965
},
{
	name: "PUBP 4530",
	description: "GEOGRAPHIC INFO SYSTEMS",
	teachers: [],
	id: 5966
},
{
	name: "PUBP 4532",
	description: "ADVANCED GIS TOPICS",
	teachers: [],
	id: 5967
},
{
	name: "PUBP 4600",
	description: "SENIOR THESIS",
	teachers: [],
	id: 5968
},
{
	name: "PUBP 4609",
	description: "LEGAL PRACTICE",
	teachers: [],
	id: 5969
},
{
	name: "PUBP 4620",
	description: "ENVIRONMENTAL LAW",
	teachers: [],
	id: 5970
},
{
	name: "PUBP 4640",
	description: "TECH LAW, POLICY, MGMT",
	teachers: [],
	id: 5971
},
{
	name: "PUBP 4650",
	description: "INTERNET LAW",
	teachers: [],
	id: 5972
},
{
	name: "PUBP 4651",
	description: "PUBLIC POLICY INTERNSHIP",
	teachers: [],
	id: 5973
},
{
	name: "PUBP 4652",
	description: "OLA LEGAL INTERNSHIP",
	teachers: [],
	id: 5974
},
{
	name: "PUBP 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 5975
},
{
	name: "PUBP 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 5976
},
{
	name: "PUBP 4756",
	description: "TECHNOLOGY FORECASTING",
	teachers: [],
	id: 5977
},
{
	name: "PUBP 4803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5978
},
{
	name: "PUBP 4811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5979
},
{
	name: "PUBP 4812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5980
},
{
	name: "PUBP 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5981
},
{
	name: "PUBP 4814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5982
},
{
	name: "PUBP 4815",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5983
},
{
	name: "PUBP 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5984
},
{
	name: "PUBP 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5985
},
{
	name: "PUBP 4843",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 5986
},
{
	name: "PUBP 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5987
},
{
	name: "PUBP 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5988
},
{
	name: "PUBP 4903",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 5989
},
{
	name: "PUBP 4951",
	description: "GEORGIA INTERNSHIP PROG",
	teachers: [],
	id: 5990
},
{
	name: "PUBP 4952",
	description: "LEGISLATIVE INTERN PROG",
	teachers: [],
	id: 5991
},
{
	name: "PUBP 4XXX",
	description: "PUBLIC POLICY ELECTIVE",
	teachers: [],
	id: 5992
},
{
	name: "PUBP 6001",
	description: "INTRO TO PUBLIC POLICY",
	teachers: [],
	id: 5993
},
{
	name: "PUBP 6010",
	description: "ETHIC,EPISTEM&PUBLIC POL",
	teachers: [],
	id: 5994
},
{
	name: "PUBP 6012",
	description: "FUND OF POLICY PROCESSES",
	teachers: [],
	id: 5995
},
{
	name: "PUBP 6014",
	description: "ORGANIZATION THEORY",
	teachers: [],
	id: 5996
},
{
	name: "PUBP 6017",
	description: "PUBLIC MANAGEMENT",
	teachers: [],
	id: 5997
},
{
	name: "PUBP 6018",
	description: "POLICY IMPLEMENT & ADMIN",
	teachers: [],
	id: 5998
},
{
	name: "PUBP 6111",
	description: "INTERNET & PUBLIC POLICY",
	teachers: [],
	id: 5999
},
{
	name: "PUBP 6112",
	description: "RESEARCH DSGN-POLCY SCI",
	teachers: [],
	id: 6000
},
{
	name: "PUBP 6114",
	description: "APPLIED POLICY METHODS",
	teachers: [],
	id: 6001
},
{
	name: "PUBP 6116",
	description: "MICROECON-POLICY ANALY",
	teachers: [],
	id: 6002
},
{
	name: "PUBP 6118",
	description: "PUBLIC FINANCE & POLICY",
	teachers: [],
	id: 6003
},
{
	name: "PUBP 6201",
	description: "PUBLIC POLICY ANALYSIS",
	teachers: [],
	id: 6004
},
{
	name: "PUBP 6218",
	description: "QUANTITATIVE MODELS-PUBP",
	teachers: [],
	id: 6005
},
{
	name: "PUBP 6221",
	description: "POL & PROGRAM EVALUATION",
	teachers: [],
	id: 6006
},
{
	name: "PUBP 6226",
	description: "BUSINESS & GOVERNMENT'",
	teachers: [],
	id: 6007
},
{
	name: "PUBP 6300",
	description: "EARTH SYSTEMS",
	teachers: [],
	id: 6008
},
{
	name: "PUBP 6310",
	description: "ENVIRONMENTAL ISSUES",
	teachers: [],
	id: 6009
},
{
	name: "PUBP 6312",
	description: "ECONOMICS-ENVIRON POLCY",
	teachers: [],
	id: 6010
},
{
	name: "PUBP 6314",
	description: "POLICY TOOLS-ENVIRON MGT",
	teachers: [],
	id: 6011
},
{
	name: "PUBP 6326",
	description: "ENVIRON VALUES&POL GOALS",
	teachers: [],
	id: 6012
},
{
	name: "PUBP 6327",
	description: "SUSTAINABILITY & ENV POL",
	teachers: [],
	id: 6013
},
{
	name: "PUBP 6330",
	description: "ENVIRONMENTAL LAW",
	teachers: [],
	id: 6014
},
{
	name: "PUBP 6350",
	description: "ENERGY POLICY & MARKETS",
	teachers: [],
	id: 6015
},
{
	name: "PUBP 6401",
	description: "SCI,TECH & PUBLIC POLICY",
	teachers: [],
	id: 6016
},
{
	name: "PUBP 6402",
	description: "RESEARCH POLICY & MGT",
	teachers: [],
	id: 6017
},
{
	name: "PUBP 6403",
	description: "SCI CAREERS/WORKPLACES",
	teachers: [],
	id: 6018
},
{
	name: "PUBP 6414",
	description: "TECH INNOVATION&GOV PLCY",
	teachers: [],
	id: 6019
},
{
	name: "PUBP 6415",
	description: "TECH REGIONS & POLICY",
	teachers: [],
	id: 6020
},
{
	name: "PUBP 6417",
	description: "CRITIC PERSPECT-SCI&TECH",
	teachers: [],
	id: 6021
},
{
	name: "PUBP 6421",
	description: "LARGE-SCALE SOC-TECH SYS",
	teachers: [],
	id: 6022
},
{
	name: "PUBP 6440",
	description: "SCI TECH & REGULATION",
	teachers: [],
	id: 6023
},
{
	name: "PUBP 6501",
	description: "INFORMATION POLICY & MGT",
	teachers: [],
	id: 6024
},
{
	name: "PUBP 6502",
	description: "IT/COMM/TELECOM POLICY",
	teachers: [],
	id: 6025
},
{
	name: "PUBP 6514",
	description: "MASS COMMUNICATIONS PLCY",
	teachers: [],
	id: 6026
},
{
	name: "PUBP 6530",
	description: "INTRO TO GIS",
	teachers: [],
	id: 6027
},
{
	name: "PUBP 6600",
	description: "LOCAL ECON DEV PLAN&PLCY",
	teachers: [],
	id: 6028
},
{
	name: "PUBP 6602",
	description: "ECON DEV ANALY& PRACTICE",
	teachers: [],
	id: 6029
},
{
	name: "PUBP 6604",
	description: "URBAN POLICY ANALY& PLAN",
	teachers: [],
	id: 6030
},
{
	name: "PUBP 6606",
	description: "URBAN DEVELOPMENT POLICY",
	teachers: [],
	id: 6031
},
{
	name: "PUBP 6701",
	description: "ENERGY TECHNOL & POLICY",
	teachers: [],
	id: 6032
},
{
	name: "PUBP 6740",
	description: "INNOVATION AND THE STATE",
	teachers: [],
	id: 6033
},
{
	name: "PUBP 6741",
	description: "GEOGRAPHY OF INNOVATION",
	teachers: [],
	id: 6034
},
{
	name: "PUBP 6743",
	description: "STS CORE SEMINAR",
	teachers: [],
	id: 6035
},
{
	name: "PUBP 6748",
	description: "SOCIAL JUSTICE & DESIGN",
	teachers: [],
	id: 6036
},
{
	name: "PUBP 6749",
	description: "FEMINIST THEORY STS",
	teachers: [],
	id: 6037
},
{
	name: "PUBP 6753",
	description: "COMP SCIENCE&TECH POLICY",
	teachers: [],
	id: 6038
},
{
	name: "PUBP 6760",
	description: "NEGOTIATION&CONFLICT MGT",
	teachers: [],
	id: 6039
},
{
	name: "PUBP 6777",
	description: "ANALYSIS-EMERGING TECH",
	teachers: [],
	id: 6040
},
{
	name: "PUBP 6801",
	description: "RESEARCH PAPER",
	teachers: [],
	id: 6041
},
{
	name: "PUBP 6XXX",
	description: "PUBLIC POLICY ELECTIVE",
	teachers: [],
	id: 6042
},
{
	name: "PUBP 7000",
	description: "MASTER'S THESIS",
	teachers: [],
	id: 6043
},
{
	name: "PUBP 8101",
	description: "WORKSHOP PUB POL RES I",
	teachers: [],
	id: 6044
},
{
	name: "PUBP 8102",
	description: "WORKSHOP PUB POL RES II",
	teachers: [],
	id: 6045
},
{
	name: "PUBP 8200",
	description: "ADV RESEARCH METHODS I",
	teachers: [],
	id: 6046
},
{
	name: "PUBP 8205",
	description: "ADV RESEARCH METHODS II",
	teachers: [],
	id: 6047
},
{
	name: "PUBP 8211",
	description: "MICROECONOMIC THEORY",
	teachers: [],
	id: 6048
},
{
	name: "PUBP 8500",
	description: "RESEARCH SEMINAR",
	teachers: [],
	id: 6049
},
{
	name: "PUBP 8510",
	description: "LOGIC OF POLICY INQUIRY",
	teachers: [],
	id: 6050
},
{
	name: "PUBP 8520",
	description: "SCOPE&THEORY-PUBLIC PLCY",
	teachers: [],
	id: 6051
},
{
	name: "PUBP 8530",
	description: "ADV SCIENCE& TECH POLICY",
	teachers: [],
	id: 6052
},
{
	name: "PUBP 8540",
	description: "ADV ENVIRONMENTAL POLICY",
	teachers: [],
	id: 6053
},
{
	name: "PUBP 8550",
	description: "ADV URB&REGION ECON DEV",
	teachers: [],
	id: 6054
},
{
	name: "PUBP 8590",
	description: "DISSERTATION COLLOQUIUM",
	teachers: [],
	id: 6055
},
{
	name: "PUBP 8801",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6056
},
{
	name: "PUBP 8802",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6057
},
{
	name: "PUBP 8803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6058
},
{
	name: "PUBP 8811",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6059
},
{
	name: "PUBP 8812",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6060
},
{
	name: "PUBP 8813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6061
},
{
	name: "PUBP 8821",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6062
},
{
	name: "PUBP 8822",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6063
},
{
	name: "PUBP 8823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6064
},
{
	name: "PUBP 8831",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6065
},
{
	name: "PUBP 8832",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6066
},
{
	name: "PUBP 8833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6067
},
{
	name: "PUBP 8900",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6068
},
{
	name: "PUBP 8910",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6069
},
{
	name: "PUBP 8920",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6070
},
{
	name: "PUBP 8930",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6071
},
{
	name: "PUBP 8940",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6072
},
{
	name: "PUBP 8950",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6073
},
{
	name: "PUBP 8997",
	description: "TEACHING ASSISTANTSHIP",
	teachers: [],
	id: 6074
},
{
	name: "PUBP 8998",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 6075
},
{
	name: "PUBP 8999",
	description: "PREP-DOCTORAL QUAL EXAM",
	teachers: [],
	id: 6076
},
{
	name: "PUBP 9000",
	description: "DOCTORAL THESIS",
	teachers: [],
	id: 6077
},
{
	name: "RUSS 1001",
	description: "ELEMENTARY RUSSIAN I",
	teachers: [],
	id: 6078
},
{
	name: "RUSS 1002",
	description: "ELEMENTARY RUSSIAN II",
	teachers: [],
	id: 6079
},
{
	name: "RUSS 10X1",
	description: "TRANS ELEMENTARY RUSSIAN I",
	teachers: [],
	id: 6080
},
{
	name: "RUSS 10X2",
	description: "TRANS ELEMENTARY RUSSIAN II",
	teachers: [],
	id: 6081
},
{
	name: "RUSS 1250",
	description: "VAMPIRES INTERNATIONAL",
	teachers: [],
	id: 6082
},
{
	name: "RUSS 1692",
	description: "INTENS ELEMENT RUSS II",
	teachers: [],
	id: 6083
},
{
	name: "RUSS 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6084
},
{
	name: "RUSS 1814",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6085
},
{
	name: "RUSS 1XXX",
	description: "RUSSIAN ELECTIVE",
	teachers: [],
	id: 6086
},
{
	name: "RUSS 2001",
	description: "INTERMEDIATE RUSSIAN I",
	teachers: [],
	id: 6087
},
{
	name: "RUSS 2002",
	description: "INTERMEDIATE RUSSIAN II",
	teachers: [],
	id: 6088
},
{
	name: "RUSS 2691",
	description: "INTENS INTERM RUSSIAN I",
	teachers: [],
	id: 6089
},
{
	name: "RUSS 2692",
	description: "INTENS INTERM RUSSIAN II",
	teachers: [],
	id: 6090
},
{
	name: "RUSS 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 6091
},
{
	name: "RUSS 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 6092
},
{
	name: "RUSS 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6093
},
{
	name: "RUSS 2XXX",
	description: "RUSSIAN ELECTIVE",
	teachers: [],
	id: 6094
},
{
	name: "RUSS 3001",
	description: "ADVANCED RUSSIAN I",
	teachers: [],
	id: 6095
},
{
	name: "RUSS 3002",
	description: "ADVANCED RUSSIAN II",
	teachers: [],
	id: 6096
},
{
	name: "RUSS 3005",
	description: "RUSSIAN FOR HERIT SPKRS",
	teachers: [],
	id: 6097
},
{
	name: "RUSS 3222",
	description: "RUSS 20TH CENT LIT&FILM",
	teachers: [],
	id: 6098
},
{
	name: "RUSS 3242",
	description: "URBAN MYTH IN RUSS LIT",
	teachers: [],
	id: 6099
},
{
	name: "RUSS 3350",
	description: "RUSSIAN-US MASS CULTURES",
	teachers: [],
	id: 6100
},
{
	name: "RUSS 3691",
	description: "INTENSIVE ADV RUSSIAN",
	teachers: [],
	id: 6101
},
{
	name: "RUSS 3692",
	description: "READ&COMP:BUS,SCI & TECH",
	teachers: [],
	id: 6102
},
{
	name: "RUSS 3695",
	description: "CONTEMPORARY RUSSIA",
	teachers: [],
	id: 6103
},
{
	name: "RUSS 3698",
	description: "RUSSIA YESTERDAY & TODAY",
	teachers: [],
	id: 6104
},
{
	name: "RUSS 3803",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6105
},
{
	name: "RUSS 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6106
},
{
	name: "RUSS 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6107
},
{
	name: "RUSS 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6108
},
{
	name: "RUSS 3XXX",
	description: "RUSSIAN ELECTIVE",
	teachers: [],
	id: 6109
},
{
	name: "RUSS 4320",
	description: "19TH CENT RUSS WRITERS",
	teachers: [],
	id: 6110
},
{
	name: "RUSS 4335",
	description: "TECH, SOC&CULT-USSR&RUSS",
	teachers: [],
	id: 6111
},
{
	name: "RUSS 4340",
	description: "BUSINESS DISCOURSE 1990-",
	teachers: [],
	id: 6112
},
{
	name: "RUSS 4360",
	description: "RUSS CULT THROUGH SONG",
	teachers: [],
	id: 6113
},
{
	name: "RUSS 4380",
	description: "RUSSIAN CULTURE IN EXILE",
	teachers: [],
	id: 6114
},
{
	name: "RUSS 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 6115
},
{
	name: "RUSS 4695",
	description: "RUSSIAN INTERNSHIP",
	teachers: [],
	id: 6116
},
{
	name: "RUSS 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 6117
},
{
	name: "RUSS 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 6118
},
{
	name: "RUSS 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6119
},
{
	name: "RUSS 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6120
},
{
	name: "RUSS 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6121
},
{
	name: "RUSS 4901",
	description: "SPECIAL PROB - RUSSIAN",
	teachers: [],
	id: 6122
},
{
	name: "RUSS 4902",
	description: "SPECIAL PROB - RUSSIAN",
	teachers: [],
	id: 6123
},
{
	name: "RUSS 4XXX",
	description: "RUSSIAN ELECTIVE",
	teachers: [],
	id: 6124
},
{
	name: "SCI 1XXX",
	description: "SCIENCE ELECTIVE",
	teachers: [],
	id: 6125
},
{
	name: "SCI 2XXX",
	description: "SCIENCE ELECTIVE",
	teachers: [],
	id: 6126
},
{
	name: "SOC 1101",
	description: "INTRO TO SOCIOLOGY",
	teachers: [],
	id: 6127
},
{
	name: "SPAN 1001",
	description: "ELEMENTARY SPANISH I",
	teachers: [],
	id: 6128
},
{
	name: "SPAN 1002",
	description: "ELEMENTARY SPANISH II",
	teachers: [],
	id: 6129
},
{
	name: "SPAN 1101",
	description: "PATTERNS OF SPANISH I",
	teachers: [],
	id: 6130
},
{
	name: "SPAN 1102",
	description: "PATTERNS OF SPANISH II",
	teachers: [],
	id: 6131
},
{
	name: "SPAN 1813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6132
},
{
	name: "SPAN 1XXX",
	description: "SPANISH ELECTIVE",
	teachers: [],
	id: 6133
},
{
	name: "SPAN 2001",
	description: "INTERMEDIATE SPANISH I",
	teachers: [],
	id: 6134
},
{
	name: "SPAN 2002",
	description: "INTERMEDIATE SPANISH II",
	teachers: [],
	id: 6135
},
{
	name: "SPAN 2690",
	description: "INTERMED SPAN ABROAD",
	teachers: [],
	id: 6136
},
{
	name: "SPAN 2698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 6137
},
{
	name: "SPAN 2699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 6138
},
{
	name: "SPAN 2813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6139
},
{
	name: "SPAN 2XXX",
	description: "SPANISH ELECTIVE",
	teachers: [],
	id: 6140
},
{
	name: "SPAN 3040",
	description: "PRACT. APP. SPAN GRAMMAR",
	teachers: [],
	id: 6141
},
{
	name: "SPAN 3050",
	description: "INTRO-READ HISPANIC LIT",
	teachers: [],
	id: 6142
},
{
	name: "SPAN 3061",
	description: "BUSINESS SPANISH I",
	teachers: [],
	id: 6143
},
{
	name: "SPAN 3062",
	description: "BUSINESS SPANISH II",
	teachers: [],
	id: 6144
},
{
	name: "SPAN 3064",
	description: "MEDICAL SPANISH",
	teachers: [],
	id: 6145
},
{
	name: "SPAN 3101",
	description: "CONVERSATION I",
	teachers: [],
	id: 6146
},
{
	name: "SPAN 3102",
	description: "CONVERSATION II",
	teachers: [],
	id: 6147
},
{
	name: "SPAN 3111",
	description: "COMPOSITION I",
	teachers: [],
	id: 6148
},
{
	name: "SPAN 3112",
	description: "COMPOSITION II",
	teachers: [],
	id: 6149
},
{
	name: "SPAN 3122",
	description: "CULTURAL HIST-SPAIN II",
	teachers: [],
	id: 6150
},
{
	name: "SPAN 3170",
	description: "SPANISH PHONETICS",
	teachers: [],
	id: 6151
},
{
	name: "SPAN 3211",
	description: "SPAIN TODAY",
	teachers: [],
	id: 6152
},
{
	name: "SPAN 3235",
	description: "LATIN AMERICA TODAY",
	teachers: [],
	id: 6153
},
{
	name: "SPAN 3241",
	description: "INDIV&FAMILY IN HISP LIT",
	teachers: [],
	id: 6154
},
{
	name: "SPAN 3242",
	description: "SOCIETY IN HISPANIC LIT",
	teachers: [],
	id: 6155
},
{
	name: "SPAN 3254",
	description: "HISPANIC FILM",
	teachers: [],
	id: 6156
},
{
	name: "SPAN 3260",
	description: "IDENTITY IN HISP. LIT.",
	teachers: [],
	id: 6157
},
{
	name: "SPAN 3500",
	description: "SCI-FI IN LATIN AMERICA",
	teachers: [],
	id: 6158
},
{
	name: "SPAN 3590",
	description: "ISSUES IN ANDEAN DEVMT",
	teachers: [],
	id: 6159
},
{
	name: "SPAN 3591",
	description: "PERU CULTURAL PATRIMONY",
	teachers: [],
	id: 6160
},
{
	name: "SPAN 3690",
	description: "COMMERCE SUSTAIN COMMUN",
	teachers: [],
	id: 6161
},
{
	name: "SPAN 3691",
	description: "BUS COMM& CORRESPONDENCE",
	teachers: [],
	id: 6162
},
{
	name: "SPAN 3692",
	description: "BUSINESS AND CULTURE",
	teachers: [],
	id: 6163
},
{
	name: "SPAN 3693",
	description: "SCIENCE AND TECHNOLOGY",
	teachers: [],
	id: 6164
},
{
	name: "SPAN 3694",
	description: "SEMINAR ABROAD",
	teachers: [],
	id: 6165
},
{
	name: "SPAN 3697",
	description: "SPAN HEALTH PROFESSIONLS",
	teachers: [],
	id: 6166
},
{
	name: "SPAN 3698",
	description: "SPAIN HEALTH INDUSTRY",
	teachers: [],
	id: 6167
},
{
	name: "SPAN 3813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6168
},
{
	name: "SPAN 3823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6169
},
{
	name: "SPAN 3833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6170
},
{
	name: "SPAN 3XXX",
	description: "SPANISH ELECITVE",
	teachers: [],
	id: 6171
},
{
	name: "SPAN 4061",
	description: "SCIENCE & TECHNOLOGY I",
	teachers: [],
	id: 6172
},
{
	name: "SPAN 4062",
	description: "SCIENCE & TECHNOLOGY II",
	teachers: [],
	id: 6173
},
{
	name: "SPAN 4065",
	description: "SPANISH LINGUISTICS",
	teachers: [],
	id: 6174
},
{
	name: "SPAN 4070",
	description: "INTRO-SPAN/ENGL TRANSLAT",
	teachers: [],
	id: 6175
},
{
	name: "SPAN 4071",
	description: "TRANSLATION & INTERPRET",
	teachers: [],
	id: 6176
},
{
	name: "SPAN 4101",
	description: "ADV COMMUNICATION WKSHOP",
	teachers: [],
	id: 6177
},
{
	name: "SPAN 4150",
	description: "SPANISH SERVICE LEARNING",
	teachers: [],
	id: 6178
},
{
	name: "SPAN 4160",
	description: "US SPANISH-LANG&CULTURES",
	teachers: [],
	id: 6179
},
{
	name: "SPAN 4165",
	description: "BILINGUALISM-SPAN WORLD",
	teachers: [],
	id: 6180
},
{
	name: "SPAN 4170",
	description: "SPAN APPLIED LINGUISTICS",
	teachers: [],
	id: 6181
},
{
	name: "SPAN 4220",
	description: "NATION/NARRATION IN LA",
	teachers: [],
	id: 6182
},
{
	name: "SPAN 4235",
	description: "FOOD CULTURE & SOCIETY",
	teachers: [],
	id: 6183
},
{
	name: "SPAN 4236",
	description: "MEDIA,MARKET&ADVERTISING",
	teachers: [],
	id: 6184
},
{
	name: "SPAN 4242",
	description: "LATINAM ART: VISION&VOICE",
	teachers: [],
	id: 6185
},
{
	name: "SPAN 4251",
	description: "HISPANIC INTERNSHIP",
	teachers: [],
	id: 6186
},
{
	name: "SPAN 4255",
	description: "HISPANIC DRAMA WORKSHOP",
	teachers: [],
	id: 6187
},
{
	name: "SPAN 4350",
	description: "IBEROAMERICAN CITIES",
	teachers: [],
	id: 6188
},
{
	name: "SPAN 4400",
	description: "IMMIGRATION THROUGH FILM",
	teachers: [],
	id: 6189
},
{
	name: "SPAN 4500",
	description: "INTERCULTURAL SEMINAR",
	teachers: [],
	id: 6190
},
{
	name: "SPAN 4693",
	description: "SUSTAINABILITY IN SPAN",
	teachers: [],
	id: 6191
},
{
	name: "SPAN 4695",
	description: "SPANISH INTERNSHIP",
	teachers: [],
	id: 6192
},
{
	name: "SPAN 4698",
	description: "RESEARCH ASSISTANTSHIP",
	teachers: [],
	id: 6193
},
{
	name: "SPAN 4699",
	description: "UNDERGRADUATE RESEARCH",
	teachers: [],
	id: 6194
},
{
	name: "SPAN 4813",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6195
},
{
	name: "SPAN 4823",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6196
},
{
	name: "SPAN 4833",
	description: "SPECIAL TOPICS",
	teachers: [],
	id: 6197
},
{
	name: "SPAN 4901",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6198
},
{
	name: "SPAN 4902",
	description: "SPECIAL PROBLEMS",
	teachers: [],
	id: 6199
},
{
	name: "SPAN 4XXX",
	description: "SPANISH ELECTIVE",
	teachers: [],
	id: 6200
},
{
	name: "UCGA 1001",
	description: "CROSS ENROLL-AGNES SCOTT",
	teachers: [],
	id: 6201
},
{
	name: "UCGA 1002",
	description: "CROSS ENROLL-ATL COL ART",
	teachers: [],
	id: 6202
},
{
	name: "UCGA 1003",
	description: "CROSS ENROLL-AU CLARK",
	teachers: [],
	id: 6203
},
{
	name: "UCGA 1004",
	description: "CROSS ENROL-AU MOREHOUSE",
	teachers: [],
	id: 6204
},
{
	name: "UCGA 1005",
	description: "CROSS ENRL-AU MORRIS BRN",
	teachers: [],
	id: 6205
},
{
	name: "UCGA 1006",
	description: "CROSS ENROLL-AU SPELMAN",
	teachers: [],
	id: 6206
},
{
	name: "UCGA 1007",
	description: "CROSS ENROLL-CLAYTON",
	teachers: [],
	id: 6207
},
{
	name: "UCGA 1008",
	description: "CROSS ENROL-COLUMBIA SEM",
	teachers: [],
	id: 6208
},
{
	name: "UCGA 1009",
	description: "CROSS ENROLL-EMORY UNIV",
	teachers: [],
	id: 6209
},
{
	name: "UCGA 1010",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6210
},
{
	name: "UCGA 1011",
	description: "CROSS ENROLL-KENNESAW",
	teachers: [],
	id: 6211
},
{
	name: "UCGA 1012",
	description: "CROSS ENROLL-MERCER UNIV",
	teachers: [],
	id: 6212
},
{
	name: "UCGA 1013",
	description: "CROSS ENROLL-OGLETHORPE",
	teachers: [],
	id: 6213
},
{
	name: "UCGA 1014",
	description: "CROSS ENRL-SOUTHERN POLY",
	teachers: [],
	id: 6214
},
{
	name: "UCGA 1015",
	description: "CROSS ENROLL-UNIV OF GA",
	teachers: [],
	id: 6215
},
{
	name: "UCGA 1017",
	description: "CROSS ENROL-WEST GEORGIA",
	teachers: [],
	id: 6216
},
{
	name: "UCGA 1018",
	description: "CROSS ENROLL - BRENAU",
	teachers: [],
	id: 6217
},
{
	name: "UCGA 1019",
	description: "CROSS ENROLL-SAV COL ART",
	teachers: [],
	id: 6218
},
{
	name: "UCGA 1021",
	description: "CROSS ENROLL-GAGWINNETT",
	teachers: [],
	id: 6219
},
{
	name: "UCGA 2001",
	description: "CROSS ENROLL-AGNES SCOTT",
	teachers: [],
	id: 6220
},
{
	name: "UCGA 2002",
	description: "CROSS ENROLL-ATL COL ART",
	teachers: [],
	id: 6221
},
{
	name: "UCGA 2003",
	description: "CROSS ENROLL-AU CLARK",
	teachers: [],
	id: 6222
},
{
	name: "UCGA 2004",
	description: "CROSS ENROL-AU MOREHOUSE",
	teachers: [],
	id: 6223
},
{
	name: "UCGA 2005",
	description: "CROSS ENRL-AU MORRIS BRN",
	teachers: [],
	id: 6224
},
{
	name: "UCGA 2006",
	description: "CROSS ENROLL-AU SPELMAN",
	teachers: [],
	id: 6225
},
{
	name: "UCGA 2007",
	description: "CROSS ENROLL-CLAYTON",
	teachers: [],
	id: 6226
},
{
	name: "UCGA 2008",
	description: "CROSS ENROL-COLUMBIA SEM",
	teachers: [],
	id: 6227
},
{
	name: "UCGA 2009",
	description: "CROSS ENROLL-EMORY UNIV",
	teachers: [],
	id: 6228
},
{
	name: "UCGA 2010",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6229
},
{
	name: "UCGA 2011",
	description: "CROSS ENROLL-KENNESAW",
	teachers: [],
	id: 6230
},
{
	name: "UCGA 2012",
	description: "CROSS ENROLL-MERCER UNIV",
	teachers: [],
	id: 6231
},
{
	name: "UCGA 2013",
	description: "CROSS ENROLL-OGLETHORPE",
	teachers: [],
	id: 6232
},
{
	name: "UCGA 2014",
	description: "CROSS ENRL-SOUTHERN POLY",
	teachers: [],
	id: 6233
},
{
	name: "UCGA 2015",
	description: "CROSS ENROLL-UNIV OF GA",
	teachers: [],
	id: 6234
},
{
	name: "UCGA 2017",
	description: "CROSS ENROL-WEST GEORGIA",
	teachers: [],
	id: 6235
},
{
	name: "UCGA 2018",
	description: "CROSS ENROLL - BRENAU",
	teachers: [],
	id: 6236
},
{
	name: "UCGA 2019",
	description: "CROSS ENROLL-SAV COL ART",
	teachers: [],
	id: 6237
},
{
	name: "UCGA 2021",
	description: "CROSS ENROLL-GAGWINNETT",
	teachers: [],
	id: 6238
},
{
	name: "UCGA 2110",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6239
},
{
	name: "UCGA 2210",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6240
},
{
	name: "UCGA 2310",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6241
},
{
	name: "UCGA 3001",
	description: "CROSS ENROLL-AGNES SCOTT",
	teachers: [],
	id: 6242
},
{
	name: "UCGA 3002",
	description: "CROSS ENROLL-ATL COL ART",
	teachers: [],
	id: 6243
},
{
	name: "UCGA 3003",
	description: "CROSS ENROLL-AU CLARK",
	teachers: [],
	id: 6244
},
{
	name: "UCGA 3004",
	description: "CROSS ENROL-AU MOREHOUSE",
	teachers: [],
	id: 6245
},
{
	name: "UCGA 3005",
	description: "CROSS ENRL-AU MORRIS BRN",
	teachers: [],
	id: 6246
},
{
	name: "UCGA 3006",
	description: "CROSS ENROLL-AU SPELMAN",
	teachers: [],
	id: 6247
},
{
	name: "UCGA 3007",
	description: "CROSS ENROLL-CLAYTON",
	teachers: [],
	id: 6248
},
{
	name: "UCGA 3008",
	description: "CROSS ENROL-COLUMBIA SEM",
	teachers: [],
	id: 6249
},
{
	name: "UCGA 3009",
	description: "CROSS ENROLL-EMORY UNIV",
	teachers: [],
	id: 6250
},
{
	name: "UCGA 3010",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6251
},
{
	name: "UCGA 3011",
	description: "CROSS ENROLL-KENNESAW",
	teachers: [],
	id: 6252
},
{
	name: "UCGA 3012",
	description: "CROSS ENROLL-MERCER UNIV",
	teachers: [],
	id: 6253
},
{
	name: "UCGA 3013",
	description: "CROSS ENROLL-OGLETHORPE",
	teachers: [],
	id: 6254
},
{
	name: "UCGA 3014",
	description: "CROSS ENRL-SOUTHERN POLY",
	teachers: [],
	id: 6255
},
{
	name: "UCGA 3015",
	description: "CROSS ENROLL-UNIV OF GA",
	teachers: [],
	id: 6256
},
{
	name: "UCGA 3017",
	description: "CROSS ENROL-WEST GEORGIA",
	teachers: [],
	id: 6257
},
{
	name: "UCGA 3018",
	description: "CROSS ENROLL - BRENAU",
	teachers: [],
	id: 6258
},
{
	name: "UCGA 3019",
	description: "CROSS ENROLL-SAV COL ART",
	teachers: [],
	id: 6259
},
{
	name: "UCGA 3021",
	description: "CROSS ENROLL-GAGWINNETT",
	teachers: [],
	id: 6260
},
{
	name: "UCGA 3110",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6261
},
{
	name: "UCGA 3210",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6262
},
{
	name: "UCGA 3310",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6263
},
{
	name: "UCGA 4001",
	description: "CROSS ENROLL-AGNES SCOTT",
	teachers: [],
	id: 6264
},
{
	name: "UCGA 4002",
	description: "CROSS ENROLL-ATL COL ART",
	teachers: [],
	id: 6265
},
{
	name: "UCGA 4003",
	description: "CROSS ENROLL-AU CLARK",
	teachers: [],
	id: 6266
},
{
	name: "UCGA 4004",
	description: "CROSS ENROL-AU MOREHOUSE",
	teachers: [],
	id: 6267
},
{
	name: "UCGA 4005",
	description: "CROSS ENRL-AU MORRIS BRN",
	teachers: [],
	id: 6268
},
{
	name: "UCGA 4006",
	description: "CROSS ENROLL-AU SPELMAN",
	teachers: [],
	id: 6269
},
{
	name: "UCGA 4007",
	description: "CROSS ENROLL-CLAYTON",
	teachers: [],
	id: 6270
},
{
	name: "UCGA 4008",
	description: "CROSS ENROL-COLUMBIA SEM",
	teachers: [],
	id: 6271
},
{
	name: "UCGA 4009",
	description: "CROSS ENROLL-EMORY UNIV",
	teachers: [],
	id: 6272
},
{
	name: "UCGA 4010",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6273
},
{
	name: "UCGA 4011",
	description: "CROSS ENROLL-KENNESAW",
	teachers: [],
	id: 6274
},
{
	name: "UCGA 4012",
	description: "CROSS ENROLL-MERCER UNIV",
	teachers: [],
	id: 6275
},
{
	name: "UCGA 4013",
	description: "CROSS ENROLL-OGLETHORPE",
	teachers: [],
	id: 6276
},
{
	name: "UCGA 4014",
	description: "CROSS ENROL-SOUTHERN POLY",
	teachers: [],
	id: 6277
},
{
	name: "UCGA 4015",
	description: "CROSS ENROLL-UNIV OF GA",
	teachers: [],
	id: 6278
},
{
	name: "UCGA 4017",
	description: "CROSS ENROL-WEST GEORGIA",
	teachers: [],
	id: 6279
},
{
	name: "UCGA 4018",
	description: "CROSS ENROLL - BRENAU",
	teachers: [],
	id: 6280
},
{
	name: "UCGA 4019",
	description: "CROSS ENROLL-SAV COL ART",
	teachers: [],
	id: 6281
},
{
	name: "UCGA 4021",
	description: "CROSS ENROLL-GAGWINNETT",
	teachers: [],
	id: 6282
},
{
	name: "UCGA 4210",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6283
},
{
	name: "UCGA 4310",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6284
},
{
	name: "UCGA 4410",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6285
},
{
	name: "UCGA 4510",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6286
},
{
	name: "UCGA 4610",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6287
},
{
	name: "UCGA 4710",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6288
},
{
	name: "UCGA 4810",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6289
},
{
	name: "UCGA 4910",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6290
},
{
	name: "UCGA 6001",
	description: "CROSS ENROLL-AGNES SCOTT",
	teachers: [],
	id: 6291
},
{
	name: "UCGA 6002",
	description: "CROSS ENROLL-ATL COL ART",
	teachers: [],
	id: 6292
},
{
	name: "UCGA 6003",
	description: "CROSS ENROLL-AU CLARK",
	teachers: [],
	id: 6293
},
{
	name: "UCGA 6004",
	description: "CROSS ENROL-AU MOREHOUSE",
	teachers: [],
	id: 6294
},
{
	name: "UCGA 6005",
	description: "CROSS ENRL-AU MORRIS BRN",
	teachers: [],
	id: 6295
},
{
	name: "UCGA 6006",
	description: "CROSS ENROLL-AU SPELMAN",
	teachers: [],
	id: 6296
},
{
	name: "UCGA 6007",
	description: "CROSS ENROLL-CLAYTON",
	teachers: [],
	id: 6297
},
{
	name: "UCGA 6008",
	description: "CROSS ENROL-COLUMBIA SEM",
	teachers: [],
	id: 6298
},
{
	name: "UCGA 6009",
	description: "CROSS ENROLL-EMORY UNIV",
	teachers: [],
	id: 6299
},
{
	name: "UCGA 6010",
	description: "CROSS ENROLL-GA ST UNIV",
	teachers: [],
	id: 6300
},
{
	name: "UCGA 6011",
	description: "CROSS ENROLL-KENNESAW",
	teachers: [],
	id: 6301
},
{
	name: "UCGA 6012",
	description: "CROSS ENROLL-MERCER UNIV",
	teachers: [],
	id: 6302
},
{
	name: "UCGA 6013",
	description: "CROSS ENROLL-OGLETHORPE",
	teachers: [],
	id: 6303
},
{
	name: "UCGA 6014",
	description: "CROSS ENRL-SOUTHERN POLY",
	teachers: [],
	id: 6304
},
{
	name: "UCGA 6015",
	description: "CROSS ENROLL-UNIV OF GA",
	teachers: [],
	id: 6305
},
{
	name: "UCGA 6016",
	description: "CROSS ENROLL-PAPER INST",
	teachers: [],
	id: 6306
},
{
	name: "UCGA 6017",
	description: "CROSS ENROL-WEST GEORGIA",
	teachers: [],
	id: 6307
},
{
	name: "UCGA 6018",
	description: "CROSS ENROLL - BRENAU",
	teachers: [],
	id: 6308
},
{
	name: "UCGA 6019",
	description: "CROSS ENROLL-SAV COL ART",
	teachers: [],
	id: 6309
},
{
	name: "UCGA 6021",
	description: "CROSS ENROLL-GAGWINNETT",
	teachers: [],
	id: 6310
},

	];
	return o;
}]).factory('documents', [function() {
	var o = {
		documents: []
	};
	return o;
}]).factory('users', [function() {
	var o = {
		users: [


		]
	};
	return o;
}])