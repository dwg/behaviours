CalendarDateSelector = Behavior.create({
	initialize: function(options) {
		this.options = $H(options);
		
		var image_path = this.options.unset('image') || '/images/calendar_date_select/calendar.gif';
		if (this.options.get('embedded')) {
			new CalendarDateSelect(this.target_element, this.options);
		} else {
			var image = $img({src: image_path, className: 'calendar_date_select_popup_icon'}).setStyle({border: 'none', cursor: 'pointer'});
			image.observe('click', function(event) {
				new CalendarDateSelect(this.element, this.options);
				event.stop();
			}.bindAsEventListener(this));
			this.element.insert({after: image});
		}
	}
});
