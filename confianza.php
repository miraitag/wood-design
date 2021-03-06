<?php $title="WD | Confianza"; include "components/head.php"; ?>
	<div class="wd-wrapper">
		<?php  include "components/menu/index.php"; ?>
		<div class="wd-wrapper__max">
			<main class="wd-main">
				<?php
					$stage_location = 'right';
					$stage_class = 'gray';
					$stage_title = 'Confinza';
					$stage_image = 'in/carpinteria_confianza';
					$stage_description = 'Ellso confian en nuestra profesionalidad y nuestra credebilidad';
					include "components/stage/index.php";
							$content = array(
						array(
							'text' => 'Historia de la CNIM. La Cámara Nacional de la Industria Maderera se creó hace 63 años, como un instrumento colectivo para contribuir en forma organizada y permanente al desarrollo de ese sector y de la economia de México...',
							'title' => 'CANAINMA',
							'img' => 	'assets/img/logos/logo_canainma.jpg',
							'link' => 'http://www.cnim.mx/'
						),
						array(
							'text' => 'Expo AMPIMM es un evento especializado en la proveeduría de componentes, materias primas, maquinaria y soluciones para la industria de la fabricación de muebles. Organizado por la Asociación Mexicana de Proveedores de la Industria Maderera y Mueblera, A.C., que nació bajo el interés de las empresas dedicadas a la proveeduría de esta industria, con la finalidad de promover sus productos y novedades...',
							'title' => 'AMPIMM',
							'img' => 	'assets/img/logos/logo_ampimm.jpg',
							'link' => 'http://expoampimm.com/'
						),
						array(
							'text' => 'En Grupo Garzo tal y como lo estipula nuestra MISION y VISION estamos en la constante búsqueda de tener los insumos de materia prima de la mejor calidad y preferentemente de procedencia nacional...',
							'title' => 'GARZO',
							'img' => 	'assets/img/logos/logo_garzo.jpg',
							'link' => 'http://www.garzo.mx/'
						),
						array(
							'text' => 'Generamos más que superficies, creamos los ambientes donde los sueños se construyen. Desde el inicio, Ralph Wilson ha traído belleza inigualable, diseño y arte a cubiertas y paredes...',
							'title' => 'RALPH WILSON',
							'img' => 	'assets/img/logos/logo_ralph.jpg',
							'link' => 'http://www.ralphwilson.com.mx/'
						),
						array(
							'text' => 'CYMISA tiene como misión la de proveer a los fabricantes de muebles con productos de calidad internacional, de tal manera que tengamos clientes satisfechos con la disponibilidad, el servicio y la atención. </br></br> Tenemos 25 años comprometidos en crear relaciones éticas de largo plazo con nuestros clientes, empleados y proveedores, a través de una mejora continua...',
							'title' => 'CYMISA',
							'img' => 'assets/img/logos/logo_cymisa.jpg',
							'link' => 'http://www.cymisa.com.mx/'
						),
						array(
							'text' => 'En la empresa familiar Felder, la construcción de máquinas así como el tratamiento de los metales son una tradición desde generaciones. Los departamentos de investigación y desarrollo, producción, la elaboración técnica de las superficies así como el montaje, el marketing, la publicidad, distribución, el servicio y sin olvidar la formación de nuestros empleados, son los principales pilares tan importantes de nuestra empresa multinacional...',
							'title' => 'FELDER',
							'img' => 'assets/img/logos/logo_felder.jpg',
							'link' => 'http://www.felder-group.com.mx/'
						),
						array(
							'text' => 'Compra Venta Madera - Boulevard Miguel Aleman 48 (50230) Col San Nicolás Tolentino, Toluca, Estado de México.',
							'title' => 'HETTICH',
							'img' => 'assets/img/logos/logo_hettich.jpg',
							'link' => 'https://www.hettich.com/'
						),
						array(
							'text' => 'Compra Venta Madera - Boulevard Miguel Aleman 48 (50230) Col San Nicolás Tolentino, Toluca, Estado de México.',
							'title' => 'MADERAS AEROPUERTO',
							'img' => 'assets/img/logos/logo_maderas.jpg',
							'link' => 'false'
						),
						array(
							'text' => 'Comercio al por mayor de madera para la construcción y la industria. Comercio al por mayor de madera para la construcción y la industria.',
							'title' => 'MICHOMEX',
							'img' => 'assets/img/logos/logo_michomex.jpg',
							'link' => 'false'
						),
						array(
							'text' => 'Tecnologia En Promob, la tecnología integra sistemas, personas, innovaciones y oportunidades.</br></br>
										Más que actuar en el mercado de muebles, buscamos contribuir a su desarrollo a través de inversiones constantes en tecnología de punta para el desarrollo de software que haga que la experiencia de usuario sea más dinámica y productiva...',
							'title' => 'PROMOB',
							'img' => 'assets/img/logos/logo_promob.jpg',
							'link' => 'http://www.promob.com/'
						),
						array(
							'text' => 'Somos la primera empresa mexicana en fabricar tableros especializados de buena madera, con materia prima 100% sustentable, proveniente de nuestras plantaciones forestales renovables, tecnología de punta y un enfoque en innovación de productos. El control de la materia prima nos permite ofrecer al mercado tableros de alta calidad. </br></br> Existimos para crear soluciones de buena madera al alcance de todos...',
							'title' => 'TECNOTABLA',
							'img' => 'assets/img/logos/logo_tecnotabla.jpg',
							'link' => 'http://www.tecnotabla.com/'
						),
					);
					include "components/cards/index.php";
					/*$pleca = 'Docentes';
					include "components/pleca/index.php";
					include "components/carousel-thumbs/index.php";*/
					include "components/foo/index.php";
				?>
			</main>
		</div>
	</div>
 <?php  include "components/footer.php";
