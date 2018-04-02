define(['jquery'], function($){
    var CustomWidget = function () {
    	var self = this;
    	system = self.system(),
		this.callbacks = {
			render: function(){
				if($('.kits_nova').length==0)
				{
					$.get('https://amo-widget.mosvodostroy.ru/kits_nova/view.php',{},function(data){
						$('body').append(data);
						kits_nova.start();
					})
				}else{
					kits_nova.start()
				}
				return true;
			},
			init: function(){
				return true;
			},
			bind_actions: function(){
				return true;
			},
			settings: function(){
				//get data from api
				//add a view
				return true;
			},
			onSave: function(){
				//send to api
				//console.log(system);
				//$.post('https://nova-agency.ru/widgets/api/zay2/save_api.php',{amouser:system.amouser, amohash:system.amohash, subdomain:system.subdomain},function(data){})
				//$.post('/private/api/v2/json/webhooks/subscribe',{request:{webhooks:{subscribe:[{url:"https://nova-agency.ru/widgets/api/zay2/check.php", events:["add_lead"]}]}}},function(){})
				return true;
			},
			destroy: function(){
				
			}
		};
		return this;
    };

return CustomWidget;
});