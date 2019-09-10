# Permissões:
id_permissao - int (11)
Permissão - bool

# Perfil:
id_permissao - int (11)
id_usuario - int (20)

# Profissões:
id_profissao - int (11)
nome - tinytext (250)

# Endereço:
id_endereço - int (11)
id_usuario- int (11)
id_cidade - int (11)
cep - tinyint (8)
endereço - varchar(150)
numero - varchar (20)
bairro - varchar (80)
completamento - varchar (50)

# Interresses:
id_usuario - int (11)
id_categoria - int (11)

# Estado:
id_estado - int (11)
id_pais - int (11)
nome - tinytext (150)
uf - tinytext (2)
populacao - int (11)
site - varchar (255)
fuso - time

# Cidade:
id_cidade - int (11)
id_estado - int (11) 
nome - tinytext (150)
capital - tinytext (150)
fundação - date
populacao - int (11)
latitude - float
longitude - float
site - varchar (255)
ddd - int (3)

# Categoria:
id_categoria - int(11)
categoria - varchar(50)

# Usuario_segue_pasta:
id_usuario - int(11)
id_pasta - int (11)

# Usuario_avalia_pasta:
id_usuario - int(11)
id_pasta - int(11)
avaliação - tinyint(1)

# Foto:
id_foto - int(11)
id_usuario - int (11)
id_pasta - int(11)
descricao - varchar (300)

# Avaliação_tec:
id_avaliacao - int(11)
id_usuario - int(11)
id_pasta - int(11)
mensagem - varchar (255)
timetemp - DataTime

# Mensagem:
id_mensagem - int(11)
id_usuario - int (11)
id_pasta - int(11)
mensagem - varchar (160)
timetemp - DataTime
 
# Pasta_categoria:
id_categoria - int(11)
id_pasta - int(11)

# Pasta:
id_pasta - int(11)
id_ususario - int(11)
id_categoria - int(11)
nome - tinytext (150)
descrição - varchar(300)
localização - varchar(300)
homologada - bool
date_criacao - dataTime