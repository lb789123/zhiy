package com.zhiy.pojo;

public class Gxdwb {
    private String xxdm;

    private String jd;

    private String wd;

    private String xq;

    public Gxdwb(String xxdm, String jd, String wd, String xq) {
        this.xxdm = xxdm;
        this.jd = jd;
        this.wd = wd;
        this.xq = xq;
    }

    public Gxdwb() {
        super();
    }

    public String getXxdm() {
        return xxdm;
    }

    public void setXxdm(String xxdm) {
        this.xxdm = xxdm == null ? null : xxdm.trim();
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

    public String getXq() {
        return xq;
    }

    public void setXq(String xq) {
        this.xq = xq == null ? null : xq.trim();
    }
}