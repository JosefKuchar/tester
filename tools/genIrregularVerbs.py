import sys
with open(sys.argv[1], 'r', encoding='utf-8') as file:
    for line in file.read().splitlines():
        s = line.split(';')
        print('{{ en: [{}, {}, {}], cs: {}}},'.format(s[0].split(
            ','), s[1].split(','), s[2].split(','), s[3].split(',')))
