package com.zhiy.pojo;

public class Zyfsx {
    private String id;

    private String zymc;

    private String gxmc;

    private String pjf;

    private String zgf;

    private String ksdq;

    private String kb;

    private String nf;

    private String pc;

    public Zyfsx(String id, String zymc, String gxmc, String pjf, String zgf, String ksdq, String kb, String nf, String pc) {
        this.id = id;
        this.zymc = zymc;
        this.gxmc = gxmc;
        this.pjf = pjf;
        this.zgf = zgf;
        this.ksdq = ksdq;
        this.kb = kb;
        this.nf = nf;
        this.pc = pc;
    }

    public Zyfsx() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getZymc() {
        return zymc;
    }

    public void setZymc(String zymc) {
        this.zymc = zymc == null ? null : zymc.trim();
    }

    public String getGxmc() {
        return gxmc;
    }

    public void setGxmc(String gxmc) {
        this.gxmc = gxmc == null ? null : gxmc.trim();
    }

    public String getPjf() {
        return pjf;
    }

    public void setPjf(String pjf) {
        this.pjf = pjf == null ? null : pjf.trim();
    }

    public String getZgf() {
        return zgf;
    }

    public void setZgf(String zgf) {
        this.zgf = zgf == null ? null : zgf.trim();
    }

    public String getKsdq() {
        return ksdq;
    }

    public void setKsdq(String ksdq) {
        this.ksdq = ksdq == null ? null : ksdq.trim();
    }

    public String getKb() {
        return kb;
    }

    public void setKb(String kb) {
        this.kb = kb == null ? null : kb.trim();
    }

    public String getNf() {
        return nf;
    }

    public void setNf(String nf) {
        this.nf = nf == null ? null : nf.trim();
    }

    public String getPc() {
        return pc;
    }

    public void setPc(String pc) {
        this.pc = pc == null ? null : pc.trim();
    }
}