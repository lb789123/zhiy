package com.zhiy.common;

public class Gxzy {
    private String zytydm;
    private String zymc;
    private String gxtydm;
    private String gxxm;
    private String jd;
    private String wd;

public Gxzy( String zytydm,String zymc,String gxtydm,String gxxm,String jd,String wd){
    this.zytydm=zytydm;
    this.zymc=zymc;
    this.gxtydm=gxtydm;
    this.gxxm=gxxm;
    this.jd=jd;
    this.wd=wd;
}
    public String getZytydm() {
        return zytydm;
    }

    public void setZytydm(String zytydm) {
        this.zytydm = zytydm == null ? null : zytydm.trim();
    }

    public String getZymc() {
        return zymc;
    }

    public void setZymc(String zymc) {
        this.zymc = zymc == null ? null : zymc.trim();
    }

    public String getJd() {
        return jd;
    }

    public void setJd(String jd) {
        this.jd = jd == null ? null : jd.trim();
    }

    public String getWd() {
        return wd;
    }

    public void setWd(String wd) {
        this.wd = wd == null ? null : wd.trim();
    }

    public String getGxtydm() {
        return gxtydm;
    }

    public void setGxtydm(String gxtydm) {
        this.gxtydm = gxtydm == null ? null : gxtydm.trim();
    }

    public String getGxxm() {
        return gxxm;
    }

    public void setGxxm(String gxxm) {
        this.gxxm = gxxm == null ? null : gxxm.trim();
    }
}
