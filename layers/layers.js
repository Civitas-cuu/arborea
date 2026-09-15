ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11819150.886376, 3331677.254376, -11817863.791731, 3332575.473135]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
    <img src="styles/legend/ARBOREA_1_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/ARBOREA_1_1.png" /> CASA CLUB<br />\
    <img src="styles/legend/ARBOREA_1_2.png" /> CASETA<br />\
    <img src="styles/legend/ARBOREA_1_3.png" /> <br />\
    <img src="styles/legend/ARBOREA_1_4.png" /> AREA AJARDINADA<br />\
    <img src="styles/legend/ARBOREA_1_5.png" /> ARROYO<br />\
    <img src="styles/legend/ARBOREA_1_6.png" /> RESERVA<br />\
    <img src="styles/legend/ARBOREA_1_7.png" /> SERVIDUMBRE<br />' });

lyr_Googlesatellite_0.setVisible(true);lyr_ARBOREA_1.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_ARBOREA_1];
lyr_ARBOREA_1.set('fieldAliases', {'fid': 'fid', 'FRACC': 'Fraccionamiento', 'ETAPA': 'Etapa', 'MANZANA': 'Manzana', 'LOTE': 'Lote', 'SUPERFICIE': 'Superficie (m²)', 'USO': 'Uso', 'PDF': 'Plano catastral', 'SUP_M2': 'SUP_M2', });
lyr_ARBOREA_1.set('fieldImages', {'fid': 'TextEdit', 'FRACC': 'TextEdit', 'ETAPA': 'TextEdit', 'MANZANA': 'TextEdit', 'LOTE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'USO': 'TextEdit', 'PDF': 'TextEdit', 'SUP_M2': '', });
lyr_ARBOREA_1.set('fieldLabels', {'fid': 'hidden field', 'FRACC': 'inline label - visible with data', 'ETAPA': 'inline label - visible with data', 'MANZANA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'SUPERFICIE': 'hidden field', 'USO': 'hidden field', 'PDF': 'inline label - visible with data', 'SUP_M2': 'inline label - visible with data', });
lyr_ARBOREA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});