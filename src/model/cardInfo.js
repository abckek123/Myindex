export default class CardInfo{
	constructor(title,msg,langs,state,process=100,href=null){
		this.title=title;
		this.msg=msg;
		this.langs=langs;
		this.state=state;
		this.process=process;
		this.href=href;
	}
}
