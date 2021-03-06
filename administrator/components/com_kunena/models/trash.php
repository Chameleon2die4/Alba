<?php
/**
 * Kunena Component
 * @package Kunena.Administrator
 * @subpackage Models
 *
 * @copyright (C) 2008 - 2012 Kunena Team. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link http://www.kunena.org
 **/
defined ( '_JEXEC' ) or die ();

jimport ( 'joomla.application.component.model' );

/**
 * Trash Model for Kunena
 *
 * @since 2.0
 */
class KunenaAdminModelTrash extends KunenaModel {
	protected $__state_set = false;
	protected $_items = false;
	protected $_items_order = false;
	protected $_object = false;

	/**
	 * Method to auto-populate the model state.
	 */
	protected function populateState() {
		static $t_ordering = array('tt.id', 'tt.subject', 'm.ip', 'tt.first_post_userid', 'tt.first_post_guest_name', 'tt.first_post_time');
		static $m_ordering = array('m.id', 'm.subject', 'm.ip', 'm.userid', 'm.name', 'm.time');

		$mode = $this->getUserStateFromRequest ( "com_kunena.admin.trash.list.view_selected", 'view_selected', 0, 'int' );
		// Set default view on messages
		if ( $mode=='none' ) $mode=0;
		$this->setState ( 'list.view_selected', $mode );

		// List state information
		$value = $this->getUserStateFromRequest ( "com_kunena.admin.trash.list.limit", 'limit', $this->app->getCfg ( 'list_limit' ), 'int' );
		$this->setState ( 'list.limit', $value );

		$value = $this->getUserStateFromRequest ( "com_kunena.admin.trash.list.start", 'limitstart', 0, 'int' );
		$this->setState ( 'list.start', $value );

		$value = $this->getUserStateFromRequest ( 'com_kunena.admin.trash.list.ordering', 'filter_order', '', 'cmd' );
		if ($mode) {
			if (!in_array($value, $t_ordering)) $value = 'tt.id';
		} else {
			if (!in_array($value, $m_ordering)) $value = 'm.id';
		}
		$this->setState ( 'list.ordering', $value );

		$value = $this->getUserStateFromRequest ( 'com_kunena.admin.trash.list.direction', 'filter_order_Dir', 'asc', 'word' );
		if ($value != 'asc')
			$value = 'desc';
		$this->setState ( 'list.direction', $value );

		$value = $this->getUserStateFromRequest ( 'com_kunena.admin.trash.list.search', 'search', '', 'string' );
		$this->setState ( 'list.search', $value );

		$value = $this->getUserStateFromRequest ( "com_kunena.admin.trash.list.levels", 'levellimit', 10, 'int' );
		$this->setState ( 'list.levels', $value );
	}

	/**
	 * Method to get all deleted messages or topics in function of user selection.
	 *
	 * @return	Array
	 * @since	1.6
	 */
	public function getTrashItems() {
		if ( $this->state->get( 'list.view_selected') ) {
			// Get topics
			$trash_items = $this->_getTopicsItems();
		} else {
			// Get messages
			$trash_items = $this->_getMessagesItems();
		}
		return $trash_items;
	}

	/**
	 * Method to get all deleted messages.
	 *
	 * @return	Array
	 * @since	1.6
	 */
	protected function _getMessagesItems() {
		$db = JFactory::getDBO();
		$where = '';
		if ($this->getState ( 'list.search')) {
			$where = '( m.subject LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ).' OR m.name LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ).' OR m.id LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ) . ' )';
		}

		$orderby = '';
		$ordering = $this->state->get('list.ordering');
		if ( !empty($ordering) ) {
			$orderby = $this->state->get('list.ordering').' '.$this->state->get('list.direction');
		} else {
			$orderby = 'm.id '.$this->state->get('list.direction');
		}

		$params = array ('starttime'=> '-1',
			'orderby' => $orderby,
			'mode' => 'deleted',
			'where' => $where,
			'nolimit' => true);

		$cats = KunenaForumCategoryHelper::getCategories();
		$cats_array =array();
		foreach ($cats as $cat) {
			if ( $cat->id ) $cats_array[] = $cat->id;
		}
		list($total,$messages) = KunenaForumMessageHelper::getLatestMessages($cats_array, $this->getState('list.start'), $this->getState('list.limit'), $params);
		$this->setState ( 'list.total', $total );

		return $messages;
	}

	/**
	 * Method to get select options to choose between topics and messages.
	 *
	 * @return	Array
	 * @since	1.6
	 */
	public function getViewOptions() {
		$view_options = array();
		$view_options[] = JHTML::_ ( 'select.option', 'none',JText::_('COM_KUNENA_SELECT_VIEW'));
		$view_options[] = JHTML::_ ( 'select.option', '0',JText::_( 'COM_KUNENA_TRASH_MESSAGES'));
		$view_options[] = JHTML::_ ( 'select.option', '1',JText::_( 'COM_KUNENA_TRASH_TOPICS' ));
		$this->view_options_list = JHTML::_ ( 'select.genericlist', $view_options, 'view_selected', 'class="inputbox" size="1" onchange="this.form.submit()"', 'value', 'text', $this->state->get('list.view_selected') );

		return $this->view_options_list;
	}

	/**
	 * Method to get all deleted topics.
	 *
	 * @return	Array
	 * @since	1.6
	 */
	protected function _getTopicsItems() {
		$db = JFactory::getDBO();
		$where = '';
		if ($this->getState ( 'list.search')) {
			$where = '(tt.subject LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ).' OR tt.first_post_userid LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ).' OR tt.id LIKE '.$db->Quote( '%'.$db->getEscaped( $this->getState ( 'list.search'), true ).'%', false ) . ')';
		}

		$orderby = '';
		$ordering = $this->state->get('list.ordering');
		if ( !empty($ordering) ) {
			$orderby = $this->state->get('list.ordering').' '.$this->state->get('list.direction');
		} else {
			$orderby = 'tt.id '.$this->state->get('list.direction');
		}

		$params = array ('hold' => '2,3',
			'orderby' => $orderby,
			'where' => $where,
			'nolimit' => true);

		$cats = KunenaForumCategoryHelper::getCategories();
		$cats_array =array();
		foreach ($cats as $cat) {
			if ( $cat->id ) $cats_array[] = $cat->id;
		}
		list($total,$topics) = KunenaForumTopicHelper::getLatestTopics ( $cats_array, $this->getState('list.start'), $this->getState('list.limit'), $params );
		$this->setState ( 'list.total', $total );

		return $topics;
	}

	/**
	 * Method to get details on selected items.
	 *
	 * @return	Array
	 * @since	1.6
	 */
	public function getPurgeItems() {
		$ids = $this->app->getUserState ( 'com_kunena.purge' );
		$topic = $this->app->getUserState('com_kunena.topic');
		$message = $this->app->getUserState('com_kunena.message');

		$ids = implode ( ',', $ids );

		if ( $topic ) {
			$items = KunenaForumTopicHelper::getTopics($ids);
		} elseif ( $message ) {
			$items = KunenaForumMessageHelper::getMessages($ids);
		} else {

		}

		return $items;
	}

	/**
	 * Method to hash datas.
	 *
	 * @return	hash
	 * @since	1.6
	 */
	public function getMd5() {
		$ids = $this->app->getUserState ( 'com_kunena.purge' );

		return md5(serialize($ids));
	}

	public function getNavigation() {
		jimport ( 'joomla.html.pagination' );
		$navigation = new JPagination ($this->getState ( 'list.total'), $this->getState ( 'list.start'), $this->getState ( 'list.limit') );
		return $navigation;
	}
}
