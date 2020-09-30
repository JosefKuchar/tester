f = open('7.txt', 'r', encoding='utf-8')

for line in f.read().splitlines():
  split = line.split(';')
  test = '{{ en: {}, cs: {} }},'.format(split[0].split(','), split[1].split(','))
  print(test)
