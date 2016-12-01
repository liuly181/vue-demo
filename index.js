var goods=[
	{
		"goosImg":"images/img1.jpg",
		"goodsTitle":"奥巴马",
		"goodsTxt":"我是奥巴马",
		"goodsCount":"1",
		"goodsPrice":"70"
	},
	{
		"goosImg":"images/img2.jpg",
		"goodsTitle":"奥巴马2",
		"goodsTxt":"我是奥巴马2",
		"goodsCount":"1",
		"goodsPrice":"80"
	},
	{
		"goosImg":"images/img1.jpg",
		"goodsTitle":"奥巴马3",
		"goodsTxt":"我是奥巴马3",
		"goodsCount":"1",
		"goodsPrice":"90"
	}

]

new Vue({
	"el":"#app",
	data:{
		"goods":goods
	},
	computed:{ //计算
		count:function(){
			var sum=0;
			for(var i=0;i<goods.length;i++){
				sum=sum+goods[i].goodsCount*goods[i].goodsPrice
			}
			return sum
			
		}
	},
	methods:{
		add:function(n){
			
				this.goods[n].goodsCount++;
			
		},
		jian:function(n){
			this.goods[n].goodsCount--;
			if(this.goods[n].goodsCount<=1){

				this.goods[n].goodsCount=1;
			}

			
		},
		remove:function(x){
			this.goods.splice(x,1);
			
			
		}
	}
})