package com.zhiy.pojo;

public class Gxxxb {
    private String gxtydm;

    private String gxxm;

    private String tb;

    private String szd;

    private String ts;

    private String zs;

    private String wz;

    private String wd;

    private String jd;

    public Gxxxb(String gxtydm, String gxxm, String tb, String szd, String ts, String zs, String wz, String wd, String jd) {
        this.gxtydm = gxtydm;
        this.gxxm = gxxm;
        this.tb = tb;
        this.szd = szd;
        this.ts = ts;
        this.zs = zs;
        this.wz = wz;
        this.wd = wd;
        this.jd = jd;
    }

    public Gxxxb() {
        super();
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

    public String getTb() {
        return tb;
    }

    public void setTb(String tb) {
        this.tb = tb == null ? null : tb.trim();
    }

    public String getSzd() {
        return szd;
    }

    public void setSzd(String szd) {
        this.szd = szd == null ? null : szd.trim();
    }

    public String getTs() {
        return ts;
    }

    public void setTs(String ts) {
        this.ts = ts == null ? null : ts.trim();
    }

    public String getZs() {
        return zs;
    }

    public void setZs(String zs) {
        this.zs = zs == null ? null : zs.trim();
    }

    public String getWz() {
        return wz;
    }

    public void setWz(String wz) {
        this.wz = wz == null ? null : wz.trim();
    }

    public String getWd() {
        return wd;
    }

    public void setWd(String wd) {
        this.wd = wd == null ? null : wd.trim();
    }

    public String getJd() {
        return jd;
    }

    public void setJd(String jd) {
        this.jd = jd == null ? null : jd.trim();
    }
}