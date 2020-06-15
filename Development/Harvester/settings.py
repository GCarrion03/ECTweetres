# -*- coding: utf-8 -*-
#########################################################################################################
#
# Author: Gustavo Carrion
# Date: Aug-2015
# Name: settings.py
# Description: Configuration file that specifies generic harvest parameters like usernames / e-mails for automated responses
# Execution:   python harvester_classifier.py 1
#
#########################################################################################################



#Local CouchDB 
server = 'http://localhost:5984/'
vm_ip = 'node1:localhost' #just a description to be included on emails
database = '' #create empty
location = '' #create empty
admin_user = 'user' #Futon admin username
admin_pass = 'user' #Futon admin pass

#create variables for each quadrant
consumer_key = '' #create empty
consumer_secret = '' #create empty
access_token = '' #create empty
access_secret = '' #create empty
region_quadrant = '' #create empty
#Bounding Box:
locations = [] #create empty
tracks = '' #create empty
follows = '' #create empty

#Email default configurations:
smtp_server = 'smtp.gmail.com'
from_address = 'gcmlth2015@gmail.com'
to_address = 'gcarrion03@gmail.com'
from_password = '2015GCMLTH'
def_subject = 'Harvesting process status update'
smtp_port = 587

#Define Quadrant initialization:
# Description: 	Method to be called by the main harvester file this configuration file especifies the cuadrant for melbourne
#
def defineQuadrant(quadrant):

	global consumer_key
	global consumer_secret
	global access_token
	global access_secret
	global locations
	global tracks
	global follows
	global location
	global database
	global region_quadrant

#harvester configuration
	if quadrant == '1': #single harvester setup
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '1' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'EF6WH9n1hv0T8rAW3FqFWeFG6' #Twitter API user info. (example)
		consumer_secret = 'RmIDDsWpvR3QES64Sx6haMnqOG5BpZqOm0HjsqAMkQrlciqrth' #Twitter API user info. (example)
		access_token = '496692665-fsM9vJRP2S2FFDeGFd4ie3QdSZDYEJv5PD1jBadF' #Twitter API user info. (example)
		access_secret = 'qDMBmfraxTcGhY2BavCqt0rg9UMjow7oY8xnffWzBCTTe' #Twitter API user info. (example)
		#geo cuadrant:
		locations = []
		tracks= ['MashiRafael','alcaldiagye','AsambleaEcuador','Ambiente_Ec','FiscaliaEcuador','fcorderoc','SocialEc','IEPI_Ecuador','dometabacchi','ApoyaAlEcuador','SETEDIS','roxanasilvach','UISEK','JCQuinonez','Todo_TurismoEc','rompecabezas24','MoisesTacle','ProCambalache','USFQPolitecnico','pamdanzateatro','CanadaEquateur','MisionAlianzaEc','USFQLawReview','Fedaeps','UPEC2012','elnacionalec','LigaAgenda','BancoGuayaquil','PacifiCard','McDonalds_Ecu','BaninterEc','IIASACAT','BcoBolivariano','PoweradeEcuador','PronacaOficial','FantaEc','marcimex_','ZILLAZec','FotoEcuador','VILLAGE_PLAZA','Mall_El_Fortin','GYE_AAG','MuseoCarmenAlto','Bless_Ecuador','Gamatvec','estadioec','elnoticierotc','eltiempocuenca','JUANPABLOSICCO','Gamatvdeportes','redigitalec','DeporteTA','ElMercioEC','ElMilagrenoEC','cristomorphosis']
		follows=['209780362','101895924','215996236','202282454','24776620','186471345','221442560','259612451','24748345','140922305','192378571','18661588','303941159','563350368','939367022','300390462','56502954','269862460','58535652','378253705','222231985','151635175','202792190','210148155','282768438','345053613','159162810','202829724','199788212','119392416','533257020','170069351','134671641','248409578','270563992','360682978','728472848','338667650','368569541','134895754','62437668','136372603','235599881','126760901','173925293','268485186','207735455','119383183','293597186','144866342','473347939','584290563','271933511','305005228','131301812','242876780','236401550','246839553','599612165','257068100','69099918','235029658','557130323','548683892','437636228','424618544','234161597','27807595','60661915','253717734','17316914','3298802431','1881177722','46700541','253628616','153139530','1372939538','145326632','21017888','400283454','731296896','213715038','199334022','388313426','274703361','2559904411','321616654','20609955','118764786','133477784','1092684408','174704484','107118834','1419031159','355577999']
#		locations = [-78.833770752, -0.1160430115 , -78.2061767578, 0.2107996953] 
#		tracks= #'de,primera,obra,zona,la,mucho,incluso,sabe,que,mientras,través,calle,el,además,último,interior,en,quien,madre,tampoco,y,momento,mis,música,a,millones,modo,ningún,los,esto,problemas,vista,se,españa,cinco,campo,del,hombre,carlos,buen,las,están,hombres,hubiera,un,pues,información,saber,por,hoy,ojos,obras,con,lugar,muerte,razón,no,madrid,nombre,ex,una,nacional,algunas,niños,su,trabajo,público,presencia,para,otras,mujeres,tema,es,mejor,siglo,dinero,al,nuevo,todavía,comisión'
#		follows=''
	if quadrant == '2': # harvester 2 setup
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '2' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'XjfFq0Cd4SyaxNHF4N7hZsrXN' #Twitter API user info. (example)
		consumer_secret = 'hdkMyIuCnaCBHYtzrxqV1BUpxMla5y9mY2MUFW71buAQXju3cy' #Twitter API user info. (example)
		access_token = '755151922831691776-rTnvKDMbQEtmhP6pggUAwatmLB7Uxpn' #Twitter API user info. (example)
		access_secret = 'qMThXpaGzFZ1tkhMIijZJHHeUtPhZEvJNGi1U7EBbMj1D' #Twitter API user info. (example)
		#geo cuadrant:
		locations = []
		tracks= ['ecuavisa','Expresoec','100xCientoFTBL','ECUAGOL','tomebamba','noticierouno','emelexistaradio','julgamentobruto','RevistaHogar','entresalidas','lunesdeportivo','Presidencia_Ec','CTEcuador','Seguridad_Ec','vinizeta','PaulCarrascoC','Cultura_Ec','cruzrojaecuador','EnergiaEc','CiudadYachay','ciespal','CorteConstEcu','LuisMongeE','CocoYunez_6','UIDE','GuidoAlexJalil','luisvillacism','CanadaEcuador','aprofesalud','IPAC_edu','Colegio_CENU','EcSaludable','USFQ_IDEA','aiesecincusfq','FIS_EPN','Hincha_Azul','JPlayRaces','CocaColaEC','Payless_EC','ChevroletEc','BrahmaEc','ElBosqueEC','Innovering','PepsiEcuador','guiaecuador','SupermaxiEcu','BDEcuadorBP','todocomex','VisitaQuito','amalavidaEC','prefecturaLoja','EPMQuitoTurismo','OMNIHospital','interlab_ec']
		follows=['42600164','166205272','592123022','758241776','300279484','237347842','1713203982','44521686','247779151','181975208','275186721','203964709','870671276','343387675','468601590','116547001','270452854','278579246','136343754','488055356','56408127','175720832','56407625','236458659','764388228','2697621','237354846','139578316','389504098','270391354','174498451','117191333','574607464','944056508','2480185590','355592224','15255651','117225069','185778747','208807043','117131632','1696790791','442855257','117224289','3433000677','1179881365','2414855042','1548422406','2484596965','117130786','392942099','1355343877','290653528','84415692','117190485','166576948','1933518061','240113198','1580810281','116884740','171521434','208618401','4332133109','116885729','1433196384','2480191548','989723984','116885308','820678825','115109114','117134426','1038817603','121798996','214883511','117197517','2160926690','117133791','955559108','207643330','360480041','829781269','1111928040','1274032243','18020949','2351614218','133786620','518869361','858240319','960708380','576517764','1729276080','2151501577','1547453611','203952022','2289845377','1534520677','1488208765','551419659']

 #Define a geo area to extract tweets from
	if quadrant == '3': #harvester 3 setup
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '3' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'v6vHSrnFnJsJetfrsKtYkdto7' #Twitter API user info. (example)
		consumer_secret = 'xiOFOHTc2psM5nXG3YfNpRDV3HQbpJy4aor05568ypQWYDzPCN' #Twitter API user info. (example)
		access_token = '755153671239921664-zqyL7SnGTA4usmndk3ECVoPReBg8xO1' #Twitter API user info. (example)
		access_secret = '8Ks87P3dZatELtarLtwTAZEBYdcNu2MrIOYdBEzlggMSg' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['ClaroEcua','marathonsports_','BancoCentral_Ec','PetroamazonasEP','BB_Soluciones','CNEL_EP','FioravantiEc','kiamotorsec','metrovisiongye','TEAMProdECU','ComputronNEWS','TridentEcuador','parischiquitoo','MunicipioCuenca','RiocentroShopEC','MalteriaPlaza','RestauranteSur','quitoairportc','teleamazonasec','EcuadorTV','marcadorec','Gamanoticiasec','JuicioCrudo','labrujaecuador','ExaFmEcuador','WQRadio_EC','RevistaEkos','clarosportsec','RevistaGuc','ppsesa','CarlosVerareal','ComunicacionEc','cnegobec','DefensaEc','Telecom_Ec','Louisss_ale','PartidoAvanza','LucioGutierrez3','ObrasQuito','FPolyUgarte','Becas_SENESCYT','UIDEGuayaquil','goberzamora','loxaesmas','ICP_UEES','worldvisionEC','USFQ_CADE','EPUNEMI','USFQ_COCIBA','USFQ_CADI','USFQMarketing','eventosutpl','ROMODJEC','SDQUITO'] 
		follows=['97513349','95217117','8225692','57333011','14333756','256747696','72325179','254275716','35047698','133184048','51254405','204406337','167391967','42479903','47384568','198666634','466966076','390220919','32573359','274259338','12416472','98708202','105186569','214123335','87531731','205703978','61844201','135323871','326513866','111157576','35058064','58813551','89563373','494386072','380569832','72900795','625608184','97003915','35289042','152188619','369779016','82985256','1231578109','193041317']
	if quadrant == '4': #harvester 4 setup
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '4' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'ETj0EjyZ5MDz7gVkq1J21hlgz' #Twitter API user info. (example)
		consumer_secret = 'tqdHNhk4bKjRxGitCbLGHvWr3BZrlbSvZLTS47QvYC2zU1FFEk' #Twitter API user info. (example)
		access_token = '3163170402-B8Z9sJaKHhxxSrICk9uJwbBbYXlUoMJuBR7XTAU' #Twitter API user info. (example)
		access_secret = 'LnQmzv1js4uRQQVH7Jm6HFM1FRTcJpt434kcz7HO37MU2' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks= ['BarcelonaSCweb','ECUADORolimpico','MovistarEC','DIRECTVEcuador','Sprite_Ec','produbancoec','Juanmarcetec','DiscoverECU','LaLlave_Ec','AlmacenesBoyaca','Indurama','fulgoreEC','TropicalEC','GuitigEC','ViajaPrimeroEC','PHGEcuador','ConvencionesGye','granados_plaza','PolicentroGye','medsteticaEc','eluniversocom','el_telegrafo','UNQuito','CanalRTU','CanalUnoTv','enlineaok','comunidadquito','mastermusicmarc','notiecuadoradio','ecua_foto','ThinkTankONG','PoliciaEcuador','daloes10','TurismoEc','SenpladesEc','Educacion_Ec','DEFENSORIAEC','6SusanaGonzalez','RescateAnimalEC','utpl','AmazoniaEc','FuerzaAereaEc','Yasuni_VIVE','dgac_ecuador','PrimeroEcuador','COCOAUSFQ','fundaciontef_ec','fundapi','LaCanteraEC','HumaneNegocios','ieee_espol','Tueri_USFQ','USFQ_CHAT','OCCCuenca']
		follows=['246507155','175447500','1633542588','419971210','714806989','118800631','192945606','174025074','121779106','222162057','234001268','109698640','889646318','423764833','1924874324','240733743','129993932','136042801','3062567512','1601592949','351822551','239988268','257561065','306843307','1205862511','456726836','202867788','1132892420','182510160','3310026189','1395597684','132071129','109031914','1389862339','332893113','2290262444','123284079','531445621','989021995','390984631','556428696','189255192','1403136992','101078962']
#[144.3336,-38.5030,145.8784,-37.1751] melb
	if quadrant == '5': #harvester 5 setup by geolocation
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '5' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'LtnxKVrcGbQXmL4FJ0v7E4IWi' #Twitter API user info. (example)
		consumer_secret = 'bZECLPJ6HeTT8WBEefUvfsVCYchZXJgjnUJWq6oIvN8hD24Pwa' #Twitter API user info. (example)
		access_token = '755199932760526848-uA9MxkyxeelK3E6NpnhyhaJ0XPyETDs' #Twitter API user info. (example)
		access_secret = 'lYpcpwyufyy8ZSatao2zgDfl873uRmrxtATxPyejhItLQ' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['ecuador']
		follows=['209780362']
#[144.3336,-38.5030,145.8784,-37.1751] melb
	if quadrant == '6': #harvester 6 setup by geolocation acc:Da_guz
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '6' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'ETNeUti5ZJMxZWDtVkrZstE82' #Twitter API user info. (example)
		consumer_secret = 'vpnignYQVcWWwdlM71VzNuP6qMMwuikCtk9eHhQsl8a5Bpn9NX' #Twitter API user info. (example)
		access_token = '496692665-s7ac68CwhcumKyDInmnbttjjTmYhCRAk7HLNDa61' #Twitter API user info. (example)
		access_secret = 'FU4sfHrp7N2UoqoJQrGbElTgO5NLbJoo90n3CGizhHBWz' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['CSEmelec','vamosazules','SweetandCoffee','BiessEcuador','SamsungEC','De_Prati','DinersClubEC','comandato','HuaweiMobileEc','TempoDesign','KitKatEcuador','MetrodeQuito','SumbawaEcuador','AllYouNeedisEC','AeropuertoUIO','PlazaLagos','SanLuis_UIO','ElRecreoQuito','museoalabado','tctelevision','noticiasecuador','comunidadgye','radiopublicaEC','teleramaec','estadiomag','PROGRAMALATV','radiorumbagye','ElproductorEC','MILAGROCITY','vivefit_com','jaimenebotsaadi','Riesgos_Ec','Salud_Ec','DeporteEc','MunicipioQuito','RegistroCivilec','FinanzasEc','UDLAQuito','uees_ec','INSPI_ECUADOR','PolEconomicaEc','TesEcuador','ChechiAlvarado','GoberTungurahua','UNEMI_ec','pacoasan','usfq_deportes','FCME_fcpc','uhemisferios','ColSEKGuayaquil','USFQ_enlinea','AnaHunnaEgypt','venalfine','educarencristo']
		follows=['112757144','15447575','2409683900','174825461','223707073','135955550','475329140','164872539']
	if quadrant == '7': #harvester 7 setup by geolocation acc:Da_guz
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '7' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'QRJ5A4gaibTroidYma2p8vJUf' #Twitter API user info. (example)
		consumer_secret = 'UcxZMUehmYFVQ7RBEZ6IlsqjBTgMqyRCsi6Mn2LCD2oGtpxlFC' #Twitter API user info. (example)
		access_token = '496692665-8dYi0rkF4g8JjdLexCi1kqhS2wyNqKFNoecuuQpw' #Twitter API user info. (example)
		access_secret = 'Ompqes8YEWgUoRpMJpt3vKxnUzQqrLfOq0DVxuFsqueXO' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['FEFecuador','body_and_health','BancoPacificoEC','empresar','CFN_ECUADOR','TuentiEC','Artefacta_ec','TrenEcuador','fybeca','Nestle_Ecuador','FUZETeaEC','BurgerKingEC','BuenisimoKFC','EcuadorTravel','CityMall_Gye','QuicentroShoppi','ambientequito','MALLDELRIO','H_UTPL','elcomerciocom','lahoraecuador','hoycomec','EcuavisaShow','sucomentario','larepublica_ec','los40ecuador','cosasecuador','RTS_LaNoticiaEC','BGmagazineec','IGecuador','ECU911_','abdalabucaram','jimmyjairala','CJudicaturaEc','EduSuperiorEc','Pro_Ecuador','Maria_DuarteP','ucatolicagye','lacamaragye','ProalimentosEC','QuitoFluye','CentEstEspSanto','EspochRio','liderazgoecu','aldeasosecuador','USFQ_GOBE','LosDoctoresEc','USFQ_COM','MuniSamborondon','USFQ_Vespertino','SEKQuito','PeruEnEc','Colectivo_PRODH','']
		follows=['260852470','18481795','47498127','492680819','226365618','834173358','1708942279','2227625119']
	if quadrant == '8': #harvester 8 setup by geolocation acc:Da_guz
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '8' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = '74bhY7fRBHQAWboQNfJjuMwAF' #Twitter API user info. (example)
		consumer_secret = 'WyFAkqsYyUvr6Obnad38oGNCCcdhmT7ACNLYvCnVrzT8gT5iTW' #Twitter API user info. (example)
		access_token = '496692665-VbvsY4uxXuptAMy29hsGClq3oZFOEyJ5IGdQOrSr' #Twitter API user info. (example)
		access_secret = 'GqYoJQJResSDxpSx3mUrrkqsWbQnCC3TiFTUVCuAGu9sI' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['LDU_Oficial','Aucas45','CNT_EC','ClubPremiumEc','Colineal_ec','LATAM_ECU','dm3deportes','Budweiser_EC','DonCamaronEc','nissanecuador','Correos_Ecuador','pharmacys','LoteriaNacJBG','MALLDELSOL_EC','Sanmarinogye','BuenVivir_EC','condadoshopping','locos_parrilla','HospiKennedy','EcuavisaInforma','ecuainm','ElCiudadano_ec','ecuadorenvivo','andesecuador','DiarioExtraEc','revgeneracion21','revistalaonda','eluniverso','NuevoTiempo_Ec','HUANCAVILCA830','MinInteriorEc','JorgeGlas','RicardoPatinoEC','Vice_Ec','InclusionEc','AdmPublicaEc','martharoldos','EstrategicosEc','espol','unicefecuador','SeguridadeQuito','IEPS_Ec','ucasagrande','UnivEcotec','UnidadPopularUP','USFQ_Alumni','ignacioxavier','GADPlayas','Pucesibarra','usfq_cocisoh','albertoariasec','FacingFinance','copol_ec','UBIBancaPopolar']
		follows=['248877722','96039232','167046714','361343242','330021348','132547612','14369839','454132312','169627734','296239551','246112803','368472038','236983585','358954167','315585961','2806505887','259780884','317783903','555264023','250729244','143860873','214977276','743593404','80688967','449818902','418782370','56716207','3196292541','2710521499','347956997','599525093','348725063','185305650','369198132','1328399822','492412104','267158028','962737249','284031928','234024077','232237571','1390512968','159175408','291773990','304526698','254114111','252884601','540956292','465890294','1887756121','3110534385','101788047','271524726','240754635','776910906','56455194','449138842','289606342','173976615','2161627459','175825033','301084643','1098279542','65205231','175419025','388313534','3063048622','562343909','882582638','170479559']
	if quadrant == '9': #harvester 9 setup by geolocation acc:gcarrion@student.unimelb.edu.au
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '9' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'gaQwAdbl7SyRUP1wF2yB5Aiw1' #Twitter API user info. (example)
		consumer_secret = 'HBiVcjfno2hdNPZqixyEbnMpFfZi16vA2U4vhmg1szKA0jG8jD' #Twitter API user info. (example)
		access_token = '3163170402-w0HYbrssFGCrbBi4bi1i8Dj92kz1TsoiSdPUtlI' #Twitter API user info. (example)
		access_secret = 'dj0A1ml8dE6GREoCkCn9IyaaqDjLD1ikhwpMZnMlUGIQ9' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['DCuencaOficial','Irvin_Veloz','BancoPichincha','pilsener_light','NetlifeEcuador','PilsenerEcuador','Qbit_Ecuador','ZhumirEcuador','DasaniEcuador','hunterEcuador','Avianca_ec','Cocolon1','EPPETROECUADOR','EcuaPoll','malldelsur','QuicentroSur','MiTierra_rest','MrDicto','CCI_ECUADOR','RTSEcuador','revistavistazo','StudioFutbol','mercurioec','eldiarioec','GrupoTVCableEC','LaSuprema961','ElMatinalGamaTv','VIDACTIVAec','ZonaSurEcuador','BananaSapiens','MauricioRodasEC','LassoGuillermo','CancilleriaEc','Justicia_Ec','PoliticaEc','Ecuadorencifras','MinEnergia','ConocimientoEc','ATMGuayaquil','EmAseoQuito','jbgorg','AdventistasEC','cruzrojaguayas','IDEbschool','competenciascnc','lacapig','USFQ_Derecho','MBabahoyo','ieHST','ProEcuadorBR','usfq_admisiones','Rafael_Contigo','csirtutpl','MachalaAvanza']
		follows=['3044914493','1965740845','169098508','413694085','322843984','807870157','94009674','81691066','339716107','1024365918','108764205','291998242','148794487','322847441','284148966','153447983','1117140031','18338160','227466451','1413770556','2285622972','435882815','67665104','406744818','801736166','144889418','1570723766','312148756','515869169','381766129','355620207','78465034','138099903','1358190091','2499422425','1551251448','381140429','164803945','1660195272','545469601','2254238180','52111884','1578082904','240008178','545497664','398151205','179377091','191090099','1209756726','2285375413','974878770','545507629','145475909','238375442','601086194','757623228','1949675732','115444056','393687098','768542695','249823507','1428804114','2906743588','128267192','1055793966','2790366846','3305082185','2541575882']
	if quadrant == '10': #harvester 5 setup by geolocation
		database = 'echarvestmain' #name of the couchdb used to store tweets
		location = 'HarvestEC' #emailing services description
		region_quadrant = '10' #description to be included on emailing services, may be the same as the value of quadrant
		consumer_key = 'c6Ut2FplntNlAht6Pj99cpDHO' #Twitter API user info. (example)
		consumer_secret = 'Gf7yzCtl0ps5ekxTnrOZkRDF3R91V9tpB0NV2bGJH6JoInQnYV' #Twitter API user info. (example)
		access_token = '3163170402-PcEZ4h2N9YxPgSji6QUphaKP2dUo4feJsqeb0Yo' #Twitter API user info. (example)
		access_secret = 'WsJmjTAiX2HoO9aiz1dwsBUQUPfrgxi4c2oELldYNNpHb' #Twitter API user info. (example)
		#geo cuadrant:
		locations = [] 
		tracks=['quito','guayaquil','AllYouNeedIsEcuador']
		follows=['3044914493']
