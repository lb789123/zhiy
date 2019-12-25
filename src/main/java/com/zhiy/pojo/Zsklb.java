package com.zhiy.pojo;

public class Zsklb {
    private String id;

    private String zsklbm;

    private String zsklmc;

    private String xlcc;

    private String ssdl;

    private String xw;

    private String xk;

    private String xjzy;

    public Zsklb(String id, String zsklbm, String zsklmc, String xlcc, String ssdl, String xw, String xk, String xjzy) {
        this.id = id;
        this.zsklbm = zsklbm;
        this.zsklmc = zsklmc;
        this.xlcc = xlcc;
        this.ssdl = ssdl;
        this.xw = xw;
        this.xk = xk;
        this.xjzy = xjzy;
    }

    public Zsklb() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getZsklbm() {
        return zsklbm;
    }

    public void setZsklbm(String zsklbm) {
        this.zsklbm = zsklbm == null ? null : zsklbm.trim();
    }

    public String getZsklmc() {
        return zsklmc;
    }

    public void setZsklmc(String zsklmc) {
        this.zsklmc = zsklmc == null ? null : zsklmc.trim();
    }

    public String getXlcc() {
        return xlcc;
    }

    public void setXlcc(String xlcc) {
        this.xlcc = xlcc == null ? null : xlcc.trim();
    }

    public String getSsdl() {
        return ssdl;
    }

    public void setSsdl(String ssdl) {
        this.ssdl = ssdl == null ? null : ssdl.trim();
    }

    public String getXw() {
        return xw;
    }

    public void setXw(String xw) {
        this.xw = xw == null ? null : xw.trim();
    }

    public String getXk() {
        return xk;
    }

    public void setXk(String xk) {
        this.xk = xk == null ? null : xk.trim();
    }

    public String getXjzy() {
        return xjzy;
    }

    public void setXjzy(String xjzy) {
        this.xjzy = xjzy == null ? null : xjzy.trim();
    }
}