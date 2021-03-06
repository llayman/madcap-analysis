package org.fraunhofer.cese.madcap.analysis.models;

/**
 * A container to return the data probes, which are needed by the timeline visualization.
 * @author Stefan Hintzen
 */
public class TimelineReturnContainer {

	public ActivityEntry[] returnedAE;
	public ForegroundBackgroundEventEntry[] returnedFBEE;
	public String emptyMessage;
	
	public TimelineReturnContainer(){
		this.emptyMessage = "default";
	}

	public TimelineReturnContainer(String message){
		this.emptyMessage = message;
	}

	public TimelineReturnContainer(ActivityEntry[] returnedAE){
		this.returnedAE = returnedAE;
		this.emptyMessage = "";
	}
	
	public TimelineReturnContainer(ForegroundBackgroundEventEntry[] returnedFBEE){
		this.returnedFBEE = returnedFBEE;
		this.emptyMessage = "";
	}
}
