<?php
defined('_JEXEC') or die;
JHtml::_('behavior.framework', true);
// disabled frontend scripts
/*  unset($this->_scripts[$this->baseurl.'/media/system/js/mootools-core.js'], 
 		$this->_scripts[$this->baseurl.'/media/system/js/mootools-more.js'],
 		$this->_scripts[$this->baseurl.'/media/system/js/core.js'],
 		$this->_scripts[$this->baseurl.'/media/system/js/modal.js'],
 		$this->_scripts[$this->baseurl.'/media/system/js/caption.js']);  */
//class of page
$app = JFactory::getApplication();
?>

<!doctype html>
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="js" lang="<?php echo $this->language; ?>"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<?php $this->setGenerator('posmishka.com');?>
		<jdoc:include type="head" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/style.css" type="text/css" />
		<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/js/modernizr-2.5.3.min.js"></script>
		
</head>
<body>
	<header class="clearfix">
		<div class="wrapper">
			<div class="logo">
			    <?php if($this->countModules('h-logo')) : ?>
	  	 		    <jdoc:include type="modules" name="h-logo" />
			    <?php endif; ?>

			</div>
			
			<div class="right-header">
			<?php if($this->countModules('right-header')) : ?>
	  	 			<jdoc:include type="modules" name="right-header" />
			<?php endif; ?>
			</div>
			<div class="clearfix"></div>
		</div>
		
		<nav id="nav-container">
			<div class="wrapper nav">
			<?php if($this->countModules('main-nav')) : ?>
	  	 			<jdoc:include type="modules" name="main-nav" style="none" />
			<?php endif; ?>
			</div>
		</nav>
		<div class="clearfix"></div>
	</header>
			
	<div class="container wides clearfix">
		<?php if($this->countModules('home-slider')) : ?>
			<div class="home-slider">
				<jdoc:include type="modules" name="home-slider" style="none" />
			</div>	
		<?php endif; ?>
		
		<div class="wrapper main">
		<?php if($this->countModules('home-service')) : ?>
			<jdoc:include type="modules" name="home-service" style="none" />
		<?php endif; ?>	

			<jdoc:include type="message" />
			<jdoc:include type="component" />

		<?php if($this->countModules('bannersh')) : ?>
		    <div id="thrid-container" class="container_12 container_bottom">
	            <section>
		            <div class="grid_12 banners">		        
		                <jdoc:include type="modules" name="bannersh" style="none" />
		            </div>		
	            </section>
	            <div class="clearfix">&nbsp;</div>
            </div>
		<?php endif; ?>
	
		</div>
	</div>
	
	<footer id="footer-container">
		<div class="container_12 footer">
    		<div class="grid_2 social"></div>
        	<div id="alpha-foot-links-container" class="grid_8">
			<?php if($this->countModules('footer-menu')) : ?>
				<jdoc:include type="modules" name="footer-menu" style="none" />
			<?php endif; ?>
         </div>
        	<div id="social-links-container" class="grid_2">
        	   <a class="facebook open_window" href="http://www.facebook.com/"></a>
        	   <a class="twitter open_window" href="http://www.twitter.com/"></a>
        	   <a class="linkedin open_window" href="http://www.linkedin.com/company/"></a>
        	   <a class="youtube" href="http://www.youtube.com/user/"></a>
        	   <div class="clearfix"></div>
         </div>
        	<div id="beta-foot-links-container" class="grid_8">
        	<ul>
				<li><a href="">Новости</a></li>
				<li><a href="">Связаться с нами</a></li>
				<li><a href="">Вакансии</a></li>
         </ul>
         </div>
        	<div id="share-foot-links-container" class="grid_2">
        	            	<a href="" class="st-taf">Поделиться</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="sendtop" href="#">Вверх</a>
         </div>
        	<div class="clearfix"></div>
    	</div>
    	<div class="container_12 footnote">
    		<div class="grid_10">
				&nbsp;&nbsp;All rights reserved &copy;&nbsp;2012&nbsp;Альба Украина
				<a href="">Privacy Policy</a>
				<a href="">Условия использования</a>
				<a href="">Карта сайта</a>			 
        	</div>
        	<div class="grid_2">
        		&nbsp;
        	</div>
        	<div class="clearfix"></div>
    	</div>
	</footer>
		
	<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/js/template.js"></script>
		
	<jdoc:include type="modules" name="debug" />
</body>
</html>


