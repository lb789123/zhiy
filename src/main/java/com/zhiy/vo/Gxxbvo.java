package com.zhiy.vo;

import com.zhiy.pojo.Gxxxb;

public class Gxxbvo {

    private String gxxm;

    private String tb;

    private String szd;

    private String ts;

    private String zs;

    private String wz;

    private String wd;

    private String jd;
    private int fencha;

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

    public int getFencha() {
        return fencha;
    }

    public void setFencha(int fencha) {
        this.fencha = fencha;
    }

    public Gxxbvo(Gxxxb gx,int fencha) {
        this.gxxm = gx.getGxxm();
        this.tb =  gx.getTb();
        this.szd =  gx.getSzd();
        this.ts = gx.getTs();
        this.zs = gx.getZs();
        this.wz = gx.getWz();
        this.wd = gx.getWd();
        this.jd = gx.getJd();
        this.fencha = fencha;
    }
}
