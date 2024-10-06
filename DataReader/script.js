
const jsonData = `[
     {
      "Date": "07-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.05371,
      "TopLeftLon": 71.54613,
      "TopRightLat": 14.07475,
      "TopRIghtLon": 73.66715,
      "BotRightLat": 11.95933,
      "BotRightLon": 73.67841,
      "BotLeftLat": 11.94155,
      "BotLeftLon": 71.57525
     },
     {
      "Date": "15-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05109,
      "TopLeftLon": 71.55172,
      "TopRightLat": 14.07207,
      "TopRIghtLon": 73.67273,
      "BotRightLat": 11.95935,
      "BotRightLon": 73.68392,
      "BotLeftLat": 11.94162,
      "BotLeftLon": 71.58075
     },
     {
      "Date": "01-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05113,
      "TopLeftLon": 71.55449,
      "TopRightLat": 14.07208,
      "TopRIghtLon": 73.6755,
      "BotRightLat": 11.95937,
      "BotRightLon": 73.68668,
      "BotLeftLat": 11.94165,
      "BotLeftLon": 71.5835
     },
     {
      "Date": "23-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.05399,
      "TopLeftLon": 71.56555,
      "TopRightLat": 14.07485,
      "TopRIghtLon": 73.6866,
      "BotRightLat": 11.95942,
      "BotRightLon": 73.6977,
      "BotLeftLat": 11.94179,
      "BotLeftLon": 71.5945
     },
     {
      "Date": "19-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05107,
      "TopLeftLon": 77.74593,
      "TopRightLat": 14.07034,
      "TopRIghtLon": 79.86722,
      "BotRightLat": 11.96019,
      "BotRightLon": 79.87676,
      "BotLeftLat": 11.9439,
      "BotLeftLon": 77.77329
     },
     {
      "Date": "05-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05367,
      "TopLeftLon": 77.73757,
      "TopRightLat": 14.07302,
      "TopRIghtLon": 79.85887,
      "BotRightLat": 11.96016,
      "BotRightLon": 79.8685,
      "BotLeftLat": 11.9438,
      "BotLeftLon": 77.76504
     },
     {
      "Date": "11-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.05367,
      "TopLeftLon": 77.73757,
      "TopRightLat": 14.07302,
      "TopRIghtLon": 79.85887,
      "BotRightLat": 11.95744,
      "BotRightLon": 79.86851,
      "BotLeftLat": 11.94109,
      "BotLeftLon": 77.76507
     },
     {
      "Date": "16-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 16.94678,
      "TopLeftLon": 73.73592,
      "TopRightLat": 16.9488,
      "TopRIghtLon": 75.8772,
      "BotRightLat": 14.84442,
      "BotRightLon": 75.86812,
      "BotLeftLat": 14.84266,
      "BotLeftLon": 73.74899
     },
     {
      "Date": "08-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 16.94415,
      "TopLeftLon": 73.75002,
      "TopRightLat": 16.94603,
      "TopRIghtLon": 75.89127,
      "BotRightLat": 14.84437,
      "BotRightLon": 75.88206,
      "BotLeftLat": 14.84273,
      "BotLeftLon": 73.76293
     },
     {
      "Date": "02-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 16.94431,
      "TopLeftLon": 73.77537,
      "TopRightLat": 16.94592,
      "TopRIghtLon": 75.91663,
      "BotRightLat": 14.84427,
      "BotRightLon": 75.90716,
      "BotLeftLat": 14.84287,
      "BotLeftLon": 73.78802
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 8.27772,
      "TopLeftLon": 74.97367,
      "TopRightLat": 8.27253,
      "TopRIghtLon": 77.03546,
      "BotRightLat": 6.17612,
      "BotRightLon": 77.0261,
      "BotLeftLat": 6.17998,
      "BotLeftLon": 74.97379
     },
     {
      "Date": "10-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 8.27772,
      "TopLeftLon": 74.97639,
      "TopRightLat": 8.27252,
      "TopRIghtLon": 77.03818,
      "BotRightLat": 6.17611,
      "BotRightLon": 77.02881,
      "BotLeftLat": 6.17998,
      "BotLeftLon": 74.9765
     },
     {
      "Date": "28-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 8.27503,
      "TopLeftLon": 78.06002,
      "TopRightLat": 8.28491,
      "TopRIghtLon": 80.1319,
      "BotRightLat": 6.17928,
      "BotRightLon": 80.13591,
      "BotLeftLat": 6.17193,
      "BotLeftLon": 78.07359
     },
     {
      "Date": "20-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 8.27501,
      "TopLeftLon": 78.0573,
      "TopRightLat": 8.28491,
      "TopRIghtLon": 80.12917,
      "BotRightLat": 6.17656,
      "BotRightLon": 80.1332,
      "BotLeftLat": 6.1692,
      "BotLeftLon": 78.07089
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 8.27772,
      "TopLeftLon": 74.99274,
      "TopRightLat": 8.27243,
      "TopRIghtLon": 77.05452,
      "BotRightLat": 6.17605,
      "BotRightLon": 77.04507,
      "BotLeftLat": 6.17998,
      "BotLeftLon": 74.99277
     },
     {
      "Date": "12-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 8.27224,
      "TopLeftLon": 78.04916,
      "TopRightLat": 8.28218,
      "TopRIghtLon": 80.12101,
      "BotRightLat": 6.17926,
      "BotRightLon": 80.12507,
      "BotLeftLat": 6.17187,
      "BotLeftLon": 78.06276
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 8.27772,
      "TopLeftLon": 75.00636,
      "TopRightLat": 8.27236,
      "TopRIghtLon": 77.06813,
      "BotRightLat": 6.176,
      "BotRightLon": 77.05862,
      "BotLeftLat": 6.17998,
      "BotLeftLon": 75.00633
     },
     {
      "Date": "16-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.60987,
      "TopLeftLon": 72.7944,
      "TopRightLat": 12.61895,
      "TopRIghtLon": 74.89595,
      "BotRightLat": 10.51359,
      "BotRightLon": 74.89673,
      "BotLeftLat": 10.50606,
      "BotLeftLon": 72.81081
     },
     {
      "Date": "08-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.60996,
      "TopLeftLon": 72.8054,
      "TopRightLat": 12.61896,
      "TopRIghtLon": 74.90976,
      "BotRightLat": 10.5136,
      "BotRightLon": 74.91044,
      "BotLeftLat": 10.50613,
      "BotLeftLon": 72.82177
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 16.95009,
      "TopLeftLon": 76.88848,
      "TopRightLat": 16.9195,
      "TopRIghtLon": 79.00709,
      "BotRightLat": 14.83893,
      "BotRightLon": 78.96609,
      "BotLeftLat": 14.86558,
      "BotLeftLon": 76.86912
     },
     {
      "Date": "02-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.61018,
      "TopLeftLon": 72.83305,
      "TopRightLat": 12.61897,
      "TopRIghtLon": 74.93463,
      "BotRightLat": 10.5136,
      "BotRightLon": 74.93511,
      "BotLeftLat": 10.50632,
      "BotLeftLon": 72.84916
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 16.95022,
      "TopLeftLon": 76.8744,
      "TopRightLat": 16.91977,
      "TopRIghtLon": 78.99303,
      "BotRightLat": 14.8391,
      "BotRightLon": 78.95218,
      "BotLeftLat": 14.86569,
      "BotLeftLon": 76.8551
     },
     {
      "Date": "10-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 16.95037,
      "TopLeftLon": 76.85751,
      "TopRightLat": 16.92005,
      "TopRIghtLon": 78.97898,
      "BotRightLat": 14.83941,
      "BotRightLon": 78.93827,
      "BotLeftLat": 14.86582,
      "BotLeftLon": 76.83845
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 16.9504,
      "TopLeftLon": 76.85469,
      "TopRightLat": 16.9201,
      "TopRIghtLon": 78.97617,
      "BotRightLat": 14.83945,
      "BotRightLon": 78.93549,
      "BotLeftLat": 14.86585,
      "BotLeftLon": 76.83567
     },
     {
      "Date": "07-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.49909,
      "TopLeftLon": 71.85835,
      "TopRightLat": 15.51914,
      "TopRIghtLon": 73.99392,
      "BotRightLat": 13.40372,
      "BotRightLon": 74.0034,
      "BotLeftLat": 13.38651,
      "BotLeftLon": 71.8879
     },
     {
      "Date": "09-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 16.94777,
      "TopLeftLon": 75.29397,
      "TopRightLat": 16.9336,
      "TopRIghtLon": 77.42331,
      "BotRightLat": 14.84168,
      "BotRightLon": 77.39839,
      "BotLeftLat": 14.85402,
      "BotLeftLon": 75.2919
     },
     {
      "Date": "11-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.6086,
      "TopLeftLon": 77.42597,
      "TopRightLat": 12.62851,
      "TopRIghtLon": 79.53422,
      "BotRightLat": 10.51299,
      "BotRightLon": 79.54519,
      "BotLeftLat": 10.49649,
      "BotLeftLon": 77.45267
     },
     {
      "Date": "11-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 8.2775,
      "TopLeftLon": 76.52902,
      "TopRightLat": 8.26433,
      "TopRIghtLon": 78.58632,
      "BotRightLat": 6.17342,
      "BotRightLon": 78.56987,
      "BotLeftLat": 6.18323,
      "BotLeftLon": 76.52199
     },
     {
      "Date": "17-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 11.16598,
      "TopLeftLon": 74.04476,
      "TopRightLat": 11.16538,
      "TopRIghtLon": 76.1274,
      "BotRightLat": 9.06836,
      "BotRightLon": 76.12011,
      "BotLeftLat": 9.06885,
      "BotLeftLon": 74.05094
     },
     {
      "Date": "19-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.60875,
      "TopLeftLon": 77.437,
      "TopRightLat": 12.62856,
      "TopRIghtLon": 79.54251,
      "BotRightLat": 10.51574,
      "BotRightLon": 79.5534,
      "BotLeftLat": 10.49933,
      "BotLeftLon": 77.46358
     },
     {
      "Date": "25-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 11.0608,
      "TopLeftLon": 74.27031,
      "TopRightLat": 11.0596,
      "TopRIghtLon": 76.1215,
      "BotRightLat": 10.03147,
      "BotRightLon": 76.11779,
      "BotLeftLat": 10.03255,
      "BotLeftLon": 74.27273
     },
     {
      "Date": "27-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.60897,
      "TopLeftLon": 77.45354,
      "TopRightLat": 12.62866,
      "TopRIghtLon": 79.56184,
      "BotRightLat": 10.51311,
      "BotRightLon": 79.5726,
      "BotLeftLat": 10.4968,
      "BotLeftLon": 77.48003
     },
     {
      "Date": "03-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 11.16597,
      "TopLeftLon": 74.04201,
      "TopRightLat": 11.16539,
      "TopRIghtLon": 76.12466,
      "BotRightLat": 9.06837,
      "BotRightLon": 76.11738,
      "BotLeftLat": 9.06884,
      "BotLeftLon": 74.04821
     },
     {
      "Date": "05-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.60864,
      "TopLeftLon": 77.42873,
      "TopRightLat": 12.62851,
      "TopRIghtLon": 79.53422,
      "BotRightLat": 10.5157,
      "BotRightLon": 79.54518,
      "BotLeftLat": 10.49923,
      "BotLeftLon": 77.45538
     },
     {
      "Date": "19-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 8.27747,
      "TopLeftLon": 76.53719,
      "TopRightLat": 8.26426,
      "TopRIghtLon": 78.59448,
      "BotRightLat": 6.17607,
      "BotRightLon": 78.578,
      "BotLeftLat": 6.18592,
      "BotLeftLon": 76.53013
     },
     {
      "Date": "27-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 8.28011,
      "TopLeftLon": 76.55626,
      "TopRightLat": 8.2668,
      "TopRIghtLon": 78.61353,
      "BotRightLat": 6.17324,
      "BotRightLon": 78.59693,
      "BotLeftLat": 6.18315,
      "BotLeftLon": 76.5491
     },
     {
      "Date": "10-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05905,
      "TopLeftLon": 76.22348,
      "TopRightLat": 14.03935,
      "TopRIghtLon": 78.31957,
      "BotRightLat": 11.95398,
      "BotRightLon": 78.29194,
      "BotLeftLat": 11.97067,
      "BotLeftLon": 76.21328
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05898,
      "TopLeftLon": 76.23737,
      "TopRightLat": 14.03916,
      "TopRIghtLon": 78.33344,
      "BotRightLat": 11.95382,
      "BotRightLon": 78.30569,
      "BotLeftLat": 11.97061,
      "BotLeftLon": 76.22706
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.06161,
      "TopLeftLon": 76.25406,
      "TopRightLat": 14.04167,
      "TopRIghtLon": 78.34735,
      "BotRightLat": 11.95365,
      "BotRightLon": 78.31945,
      "BotLeftLat": 11.97053,
      "BotLeftLon": 76.24358
     },
     {
      "Date": "25-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.61281,
      "TopLeftLon": 74.37114,
      "TopRightLat": 12.60953,
      "TopRIghtLon": 76.46475,
      "BotRightLat": 10.51028,
      "BotRightLon": 76.45388,
      "BotLeftLat": 10.513,
      "BotLeftLon": 74.37581
     },
     {
      "Date": "17-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.61277,
      "TopLeftLon": 74.35457,
      "TopRightLat": 12.60961,
      "TopRIghtLon": 76.45094,
      "BotRightLat": 10.51034,
      "BotRightLon": 76.44018,
      "BotLeftLat": 10.51296,
      "BotLeftLon": 74.35936
     },
     {
      "Date": "03-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.61276,
      "TopLeftLon": 74.3518,
      "TopRightLat": 12.60964,
      "TopRIghtLon": 76.44542,
      "BotRightLat": 10.51308,
      "BotRightLon": 76.43471,
      "BotLeftLat": 10.51567,
      "BotLeftLon": 74.35661
     },
     {
      "Date": "09-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.61275,
      "TopLeftLon": 74.34628,
      "TopRightLat": 12.60967,
      "TopRIghtLon": 76.4399,
      "BotRightLat": 10.51039,
      "BotRightLon": 76.42921,
      "BotLeftLat": 10.51295,
      "BotLeftLon": 74.35113
     },
     {
      "Date": "27-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 9.72436,
      "TopLeftLon": 76.86591,
      "TopRightLat": 9.70685,
      "TopRIghtLon": 78.9308,
      "BotRightLat": 7.61961,
      "BotRightLon": 78.90915,
      "BotLeftLat": 7.63331,
      "BotLeftLon": 76.85561
     },
     {
      "Date": "19-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 9.72446,
      "TopLeftLon": 76.84678,
      "TopRightLat": 9.70707,
      "TopRIghtLon": 78.9117,
      "BotRightLat": 7.61978,
      "BotRightLon": 78.89015,
      "BotLeftLat": 7.63339,
      "BotLeftLon": 76.83658
     },
     {
      "Date": "02-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.49979,
      "TopLeftLon": 73.45989,
      "TopRightLat": 15.50438,
      "TopRIghtLon": 75.58553,
      "BotRightLat": 13.3996,
      "BotRightLon": 75.58005,
      "BotLeftLat": 13.39565,
      "BotLeftLon": 73.4743
     },
     {
      "Date": "08-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 15.4996,
      "TopLeftLon": 73.43193,
      "TopRightLat": 15.50445,
      "TopRIghtLon": 75.56036,
      "BotRightLat": 13.40237,
      "BotRightLon": 75.55512,
      "BotLeftLat": 13.3982,
      "BotLeftLon": 73.44659
     },
     {
      "Date": "16-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.49952,
      "TopLeftLon": 73.42074,
      "TopRightLat": 15.50448,
      "TopRIghtLon": 75.54637,
      "BotRightLat": 13.39968,
      "BotRightLon": 75.54126,
      "BotLeftLat": 13.39542,
      "BotLeftLon": 73.43553
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.50524,
      "TopLeftLon": 76.53643,
      "TopRightLat": 15.48056,
      "TopRIghtLon": 78.6431,
      "BotRightLat": 13.39614,
      "BotRightLon": 78.6093,
      "BotLeftLat": 13.41737,
      "BotLeftLon": 76.52214
     },
     {
      "Date": "19-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 11.16142,
      "TopLeftLon": 77.12672,
      "TopRightLat": 11.18122,
      "TopRIghtLon": 79.22333,
      "BotRightLat": 9.07124,
      "BotRightLon": 79.2349,
      "BotLeftLat": 9.05525,
      "BotLeftLon": 77.1519
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 15.5051,
      "TopLeftLon": 76.556,
      "TopRightLat": 15.48023,
      "TopRIghtLon": 78.66264,
      "BotRightLat": 13.39586,
      "BotRightLon": 78.62866,
      "BotLeftLat": 13.41725,
      "BotLeftLon": 76.54153
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.50501,
      "TopLeftLon": 76.56998,
      "TopRightLat": 15.48,
      "TopRIghtLon": 78.6766,
      "BotRightLat": 13.39566,
      "BotRightLon": 78.64249,
      "BotLeftLat": 13.41717,
      "BotLeftLon": 76.55538
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.06178,
      "TopLeftLon": 76.22072,
      "TopRightLat": 14.04209,
      "TopRIghtLon": 78.31683,
      "BotRightLat": 11.9513,
      "BotRightLon": 78.28916,
      "BotLeftLat": 11.96796,
      "BotLeftLon": 76.21051
     },
     {
      "Date": "09-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.50244,
      "TopLeftLon": 74.97576,
      "TopRightLat": 15.49254,
      "TopRIghtLon": 77.09269,
      "BotRightLat": 13.39718,
      "BotRightLon": 77.07318,
      "BotLeftLat": 13.40569,
      "BotLeftLon": 74.97598
     },
     {
      "Date": "03-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 15.50245,
      "TopLeftLon": 74.98135,
      "TopRightLat": 15.49249,
      "TopRIghtLon": 77.09828,
      "BotRightLat": 13.39984,
      "BotRightLon": 77.07875,
      "BotLeftLat": 13.4084,
      "BotLeftLon": 74.98153
     },
     {
      "Date": "17-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 15.50245,
      "TopLeftLon": 74.98415,
      "TopRightLat": 15.49246,
      "TopRIghtLon": 77.10108,
      "BotRightLat": 13.39982,
      "BotRightLon": 77.08151,
      "BotLeftLat": 13.4084,
      "BotLeftLon": 74.9843
     },
     {
      "Date": "25-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 15.50245,
      "TopLeftLon": 75.00093,
      "TopRightLat": 15.4923,
      "TopRIghtLon": 77.11785,
      "BotRightLat": 13.39697,
      "BotRightLon": 77.09811,
      "BotLeftLat": 13.40569,
      "BotLeftLon": 75.00092
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 11.16962,
      "TopLeftLon": 75.59442,
      "TopRightLat": 11.15831,
      "TopRIghtLon": 77.67071,
      "BotRightLat": 9.06587,
      "BotRightLon": 77.65347,
      "BotLeftLat": 9.07503,
      "BotLeftLon": 75.59057
     },
     {
      "Date": "10-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 11.16962,
      "TopLeftLon": 75.59716,
      "TopRightLat": 11.15828,
      "TopRIghtLon": 77.67345,
      "BotRightLat": 9.06585,
      "BotRightLon": 77.65619,
      "BotLeftLat": 9.07503,
      "BotLeftLon": 75.5933
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 11.16959,
      "TopLeftLon": 75.6109,
      "TopRightLat": 11.15814,
      "TopRIghtLon": 77.68992,
      "BotRightLat": 9.06574,
      "BotRightLon": 77.67256,
      "BotLeftLat": 9.075,
      "BotLeftLon": 75.60695
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 11.16956,
      "TopLeftLon": 75.62464,
      "TopRightLat": 11.15801,
      "TopRIghtLon": 77.70364,
      "BotRightLat": 9.06564,
      "BotRightLon": 77.68619,
      "BotLeftLat": 9.07498,
      "BotLeftLon": 75.6206
     },
     {
      "Date": "04-10-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.61462,
      "TopLeftLon": 75.93729,
      "TopRightLat": 12.59914,
      "TopRIghtLon": 78.02415,
      "BotRightLat": 10.50754,
      "BotRightLon": 78.00178,
      "BotLeftLat": 10.52039,
      "BotLeftLon": 75.93035
     },
     {
      "Date": "26-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.61466,
      "TopLeftLon": 75.92348,
      "TopRightLat": 12.5993,
      "TopRIghtLon": 78.01036,
      "BotRightLat": 10.51038,
      "BotRightLon": 77.98812,
      "BotLeftLat": 10.52314,
      "BotLeftLon": 75.91665
     },
     {
      "Date": "10-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 12.61472,
      "TopLeftLon": 75.90691,
      "TopRightLat": 12.59948,
      "TopRIghtLon": 77.99381,
      "BotRightLat": 10.51054,
      "BotRightLon": 77.97169,
      "BotLeftLat": 10.52319,
      "BotLeftLon": 75.9002
     },
     {
      "Date": "18-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 12.61472,
      "TopLeftLon": 75.90691,
      "TopRightLat": 12.59952,
      "TopRIghtLon": 77.99105,
      "BotRightLat": 10.50785,
      "BotRightLon": 77.96893,
      "BotLeftLat": 10.52047,
      "BotLeftLon": 75.90019
     },
     {
      "Date": "09-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.0592,
      "TopLeftLon": 74.66192,
      "TopRightLat": 14.05299,
      "TopRIghtLon": 76.76512,
      "BotRightLat": 11.95427,
      "BotRightLon": 76.75034,
      "BotLeftLat": 11.95952,
      "BotLeftLon": 74.66476
     },
     {
      "Date": "03-10-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.05649,
      "TopLeftLon": 74.66471,
      "TopRightLat": 14.05024,
      "TopRIghtLon": 76.77066,
      "BotRightLat": 11.95695,
      "BotRightLon": 76.75587,
      "BotLeftLat": 11.96224,
      "BotLeftLon": 74.66751
     },
     {
      "Date": "17-09-2024",
      "Satellite": "L9",
      "TopLeftLat": 14.0565,
      "TopLeftLon": 74.67026,
      "TopRightLat": 14.05022,
      "TopRIghtLon": 76.77343,
      "BotRightLat": 11.95693,
      "BotRightLon": 76.75862,
      "BotLeftLat": 11.9622,
      "BotLeftLon": 74.67302
     },
     {
      "Date": "25-09-2024",
      "Satellite": "L8",
      "TopLeftLat": 14.05923,
      "TopLeftLon": 74.68415,
      "TopRightLat": 14.05281,
      "TopRIghtLon": 76.79012,
      "BotRightLat": 11.95411,
      "BotRightLon": 76.77513,
      "BotLeftLat": 11.95955,
      "BotLeftLon": 74.6868
     }
    ]`;

const data = JSON.parse(jsonData);


var ilong;
var ilatt;

var odate;

var lctla;
var lctlo;


//--------------------------

function crossProduct(x1, y1, x2, y2, xp, yp) {
    return (x2 - x1) * (yp - y1) - (y2 - y1) * (xp - x1);
}

// Function to check if a point (xp, yp) is inside a quadrilateral
function isPointInQuad(x1, y1, x2, y2, x3, y3, x4, y4, xp, yp) {
    // Calculate cross products for each side
    const cp1 = crossProduct(x1, y1, x2, y2, xp, yp);
    const cp2 = crossProduct(x2, y2, x3, y3, xp, yp);
    const cp3 = crossProduct(x3, y3, x4, y4, xp, yp);
    const cp4 = crossProduct(x4, y4, x1, y1, xp, yp);

    // Check if all cross products are either positive or negative
    const allPositive = (cp1 > 0 && cp2 > 0 && cp3 > 0 && cp4 > 0);
    const allNegative = (cp1 < 0 && cp2 < 0 && cp3 < 0 && cp4 < 0);

    return allPositive || allNegative;
}



//-------------------------------

function checkCoords(lat, long, i) {
    // Coordinates of the quadrilateral (clockwise or counterclockwise order)
    var x1 = data[i].TopLeftLat, y1 = data[i].TopLeftLon;
    var x2 = data[i].TopRightLat, y2 = data[i].TopRIghtLon;
    var x3 = data[i].BotRightLat, y3 = data[i].BotRightLon;
    var x4 = data[i].BotLeftLat, y4 = data[i].BotLeftLon;

    // Point to check (2, 2)
    var xp = lat, yp = long;

    var isInside = isPointInQuad(x1, y1, x2, y2, x3, y3, x4, y4, xp, yp);

    if (isInside == true){
        displayStuff(i);
    }
}

function getIt(){
    var x = document.querySelector(".ilong").value;
    var y = document.querySelector(".ilatt").value;

    var ilong = parseFloat(x);
    var ilatt = parseFloat(y);

    for (let i = 0; i < data.length; i++) {
        checkCoords(ilatt, ilong, i)
    }
}

function displayStuff(i){
    document.getElementById("DisplayDate").textContent = data[i].Date;
    document.getElementById("DisplaySatt").textContent = data[i].Satellite;
}