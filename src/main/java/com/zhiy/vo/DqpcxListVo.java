package com.zhiy.vo;

public class DqpcxListVo {

    private String id;

    private String nf;

    private String ksszd;

    private String wlfk;

    private String pcmc;

    private String zdkzfsx;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getNf() {
        return nf;
    }

    public void setNf(String nf) {
        this.nf = nf == null ? null : nf.trim();
    }

    public String getKsszd() {
        return ksszd;
    }

    public void setKsszd(String ksszd) {
        this.ksszd = ksszd == null ? null : ksszd.trim();
    }

    public String getWlfk() {
        return wlfk;
    }

    public void setWlfk(String wlfk) {
        this.wlfk = wlfk == null ? null : wlfk.trim();
    }

    public String getPcmc() {
        return pcmc;
    }

    public void setPcmc(String pcmc) {
        this.pcmc = pcmc == null ? null : pcmc.trim();
    }

    public String getZdkzfsx() {
        return zdkzfsx;
    }

    public void setZdkzfsx(String zdkzfsx) {
        this.zdkzfsx = zdkzfsx == null ? null : zdkzfsx.trim();
    }
}