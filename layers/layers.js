ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32613").setExtent([385543.019471, 3170304.851292, 386480.845314, 3170959.327455]);
var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ARBOREA_1 = new ol.format.GeoJSON();
var features_ARBOREA_1 = format_ARBOREA_1.readFeatures(json_ARBOREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_ARBOREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARBOREA_1.addFeatures(features_ARBOREA_1);
var lyr_ARBOREA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARBOREA_1, 
                style: style_ARBOREA_1,
                popuplayertitle: 'ARBOREA',
                interactive: true,
    title: 'ARBOREA<br />\
    <img src="styles/legend/ARBOREA_1_0.png" /> SERVIDUMBRE<br />\
    <img src="styles/legend/ARBOREA_1_1.png" /> RESERVA<br />\
    <img src="styles/legend/ARBOREA_1_2.png" /> HABITACIONAL<br />\
    <img src="styles/legend/ARBOREA_1_3.png" /> CASETA<br />\
    <img src="styles/legend/ARBOREA_1_4.png" /> CASA CLUB<br />\
    <img src="styles/legend/ARBOREA_1_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/ARBOREA_1_6.png" /> AREA AJARDINADA<br />\
    <img src="styles/legend/ARBOREA_1_7.png" /> <br />' });
var format_BANQUETAS_2 = new ol.format.GeoJSON();
var features_BANQUETAS_2 = format_BANQUETAS_2.readFeatures(json_BANQUETAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_BANQUETAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANQUETAS_2.addFeatures(features_BANQUETAS_2);
var lyr_BANQUETAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANQUETAS_2, 
                style: style_BANQUETAS_2,
                popuplayertitle: 'BANQUETAS',
                interactive: false,
                title: '<img src="styles/legend/BANQUETAS_2.png" /> BANQUETAS'
            });

lyr_Googlesatellite_0.setVisible(true);lyr_ARBOREA_1.setVisible(true);lyr_BANQUETAS_2.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_ARBOREA_1,lyr_BANQUETAS_2];
lyr_ARBOREA_1.set('fieldAliases', {'fid': 'fid', 'FRACC': 'Fraccionamiento', 'ETAPA': 'Etapa', 'MANZANA': 'Manzana', 'LOTE': 'Lote', 'SUPERFICIE': 'Superficie (m²)', 'USO': 'Uso', 'PDF': 'Plano catastral', 'SUP_M2': 'Superficie m²', 'ATRIBUTOS': 'Atributos', });
lyr_BANQUETAS_2.set('fieldAliases', {'PaperSpace': 'PaperSpace', 'Linetype': 'Linetype', });
lyr_ARBOREA_1.set('fieldImages', {'fid': 'TextEdit', 'FRACC': 'TextEdit', 'ETAPA': 'TextEdit', 'MANZANA': 'TextEdit', 'LOTE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'USO': 'TextEdit', 'PDF': 'TextEdit', 'SUP_M2': 'TextEdit', 'ATRIBUTOS': 'TextEdit', });
lyr_BANQUETAS_2.set('fieldImages', {'PaperSpace': 'Range', 'Linetype': 'TextEdit', });
lyr_ARBOREA_1.set('fieldLabels', {'fid': 'hidden field', 'FRACC': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'MANZANA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'SUPERFICIE': 'hidden field', 'USO': 'hidden field', 'PDF': 'inline label - visible with data', 'SUP_M2': 'inline label - visible with data', 'ATRIBUTOS': 'inline label - visible with data', });
lyr_BANQUETAS_2.set('fieldLabels', {'PaperSpace': 'hidden field', 'Linetype': 'hidden field', });
lyr_BANQUETAS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});