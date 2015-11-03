package com.drimhitech.rhscm_smartMobile;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import android.os.Bundle;
import android.widget.Toast;

import org.apache.cordova.*;

import com.bxl.service.phonegap.BXLService;

public class MainActivity extends CordovaActivity
{
	private static final String CONFIG_FILE_NAME = "jpos.xml";
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
    	/*
        super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
        */
    	
    	super.onCreate(savedInstanceState);
        super.init();
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
        
        createConfigFile();
        BXLService.setContext(this);
    }
    
    private void createConfigFile() {
		FileInputStream fis = null;
		
		try {
			fis = openFileInput(CONFIG_FILE_NAME);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			Toast.makeText(this, e.getMessage(), Toast.LENGTH_SHORT).show();
			createNewConfigFile();
		}
		
		if (fis != null) {
			try {
				fis.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	private void createNewConfigFile() {
		InputStream is = getResources().openRawResource(R.raw.jpos);
		FileOutputStream fos = null;
		
		int available = 0;
		byte[] buffer = null;
		
		try {
			available = is.available();
			buffer = new byte[available];
			is.read(buffer);
			
			fos = openFileOutput(CONFIG_FILE_NAME, MODE_PRIVATE);
			fos.write(buffer);
		} catch (IOException e) {
			e.printStackTrace();
			Toast.makeText(this, e.getMessage(), Toast.LENGTH_SHORT).show();
		} finally {
			try {
				is.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			if (fos != null) {
				try {
					fos.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
}
