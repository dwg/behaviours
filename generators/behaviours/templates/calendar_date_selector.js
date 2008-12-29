CalendarDateSelector = Behavior.create({
	initialize: function(options) {
		this.options = $H(options);
		this.target_element = this.element;
		
		var image_path = this.options.unset('image') || '/images/calendar_date_select/calendar.gif';
		if (!this.options.get('embedded')) {
			var image = $img({src: image_path, 'class': 'calendar_date_select_popup_icon', style: 'border: 0px; cursor: pointer;'})
			Event.observe(image, 'click', function(event) {
				new CalendarDateSelect(this.target_element, this.options);
				event.stop();
			}.bind(this));
			this.target_element.insert({after: image});
		} else {
			new CalendarDateSelect(this.target_element, this.options);
		}
	}
});
