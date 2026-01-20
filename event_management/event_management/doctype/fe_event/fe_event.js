// Copyright (c) 2026, amitesh and contributors
// For license information, please see license.txt

frappe.ui.form.on("FE Event", {
	refresh(frm) {
		frappe.call("frappe.geo.country_info.get_country_timezone_info").then(({ message }) => {
			frm.set_df_property("time_zone", "options", message.all_timezones);
		});
	},
});
